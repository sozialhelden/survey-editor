import { ControlGroup, ITreeNode, Tree } from "@blueprintjs/core";
import { Store, sym } from "rdflib";
import { NamedNode } from "rdflib/lib/tf-types";
import * as React from "react";
import { getClassAncestors } from "../../lib/rdf/getClassAncestors";
import { getClassProperties } from "../../lib/rdf/getClassProperties";
import isClassNode from "../../lib/rdf/isClassNode";
import ClassNodeButtonWithPopover from "./ClassNodeButtonWithPopover";
import { RDFGraphContext } from "./RDFGraphContext";

interface IRDFNodeWithPath {
  node: NamedNode;
  path: string;
  isClass: boolean;
}

/** The label visible on the right of each tree item. */
function SecondaryLabel(props: { node: IRDFNodeWithPath }) {
  // const { node } = props;
  return <ControlGroup>{"Test"}</ControlGroup>;
}

/** Recursively creates ITreeNode objects from the given model root. */
export function getNodeTree(
  path: string,
  expandedPaths: Set<string>,
  selectedPaths: Set<string>,
  node: NamedNode,
  graph: Store,
  transform: (
    result: ITreeNode<IRDFNodeWithPath>
  ) => ITreeNode<IRDFNodeWithPath>
): ITreeNode<IRDFNodeWithPath> {
  const isClass = isClassNode(node, graph);
  const result: ITreeNode<IRDFNodeWithPath> = {
    id: path,
    label: node.value,
    childNodes: [],
    nodeData: { node, path, isClass },
  };

  if (!isClass || !(expandedPaths.has(path) || selectedPaths.has(path))) {
    return result;
  }

  const properties = getClassProperties(node, graph);
  const ancestors =
    path === "" || !isClass ? getClassAncestors(node, graph) : [];

  return transform({
    ...result,
    childNodes: ancestors.concat(properties).map((node) => {
      return getNodeTree(
        path + "." + node.value,
        expandedPaths,
        selectedPaths,
        node,
        graph,
        transform
      );
    }),
  });
}

/** Shows a collapsible JSON tree of the survey result data for debugging. */
export default function ModelTree(props: {}) {
  const [expandedPaths, setExpandedPaths] = React.useState<Set<string>>(
    new Set([""])
  );
  const [selectedPaths, setSelectedPaths] = React.useState<Set<string>>(
    new Set([])
  );
  const store = React.useContext(RDFGraphContext);
  const result = React.useMemo(() => {
    return getNodeTree(
      "",
      expandedPaths,
      selectedPaths,
      sym("https://schema.org/Hotel"),
      store,
      (result) => {
        const node = result.nodeData;
        if (!node) {
          throw new Error(
            "Encountered a tree node that is not associated with a node. Please fix this."
          );
        }

        const label = <ClassNodeButtonWithPopover name={node.node.value} />;

        return {
          ...result,
          label,
          key: node.node.value,
          isExpanded: expandedPaths.has(node.path),
          isSelected: selectedPaths.has(node.path),
          hasCaret: result.nodeData?.isClass,
          secondaryLabel: node && <SecondaryLabel node={node} />,
        } as ITreeNode<IRDFNodeWithPath>;
      }
    );
  }, [store, expandedPaths, selectedPaths]);

  return result ? (
    <Tree
      onNodeExpand={(node) => {
        node.nodeData?.path && expandedPaths.add(node.nodeData?.path);
        setExpandedPaths(new Set(expandedPaths));
      }}
      onNodeCollapse={(node) => {
        if (!node.nodeData?.path) {
          return;
        }
        expandedPaths.delete(node.nodeData?.path);
        setExpandedPaths(new Set(expandedPaths));
      }}
      contents={[result]}
    />
  ) : (
    <div></div>
  );
}
