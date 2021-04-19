import {
  Button,
  ButtonGroup,
  Checkbox,
  ControlGroup,
  ITreeNode,
  Tree,
} from "@blueprintjs/core";
import { Store, sym } from "rdflib";
import { NamedNode } from "rdflib/lib/tf-types";
import * as React from "react";
import { getClassAncestors } from "../../lib/rdf/getClassAncestors";
import {
  getClassProperties,
  getDirectAndIndirectClassProperties,
} from "../../lib/rdf/getClassProperties";
import { getPropertyMetadataCompact } from "../../lib/rdf/getPropertyMetadata";
import isClassNode from "../../lib/rdf/isClassNode";
import { replaceURIWithPrefix } from "../../lib/rdf/namespaces";
import ClassNodeButtonWithPopover from "./ClassNodeButtonWithPopover";
import { RDFGraphContext } from "./RDFGraphContext";

interface IRDFNodeWithPath {
  node: NamedNode;
  path: string;
  isClass: boolean;
}

/** The label visible on the right of each tree item. */
function SecondaryLabel(props: {
  node: IRDFNodeWithPath;
  graph: Store;
  contextPrefix: string;
}) {
  const { node, graph } = props;
  const metadata = React.useMemo(
    () => getPropertyMetadataCompact(node.node, graph),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [graph, node.node.value]
  );

  const types = metadata.get("rangeIncludes");
  return (
    <ButtonGroup>
      {types?.map((t) => (
        <Button outlined={true}>
          {replaceURIWithPrefix(t).replace(props.contextPrefix + ":", "")}
        </Button>
      ))}
    </ButtonGroup>
  );
}

/** Recursively creates ITreeNode objects from the given model root. */
export function getNodeTree(
  path: string,
  expandedNames: Set<string>,
  selectedNames: Set<string>,
  node: NamedNode,
  contextPrefix: string,
  graph: Store,
  transform: (
    result: ITreeNode<IRDFNodeWithPath>,
    isRoot: boolean
  ) => ITreeNode<IRDFNodeWithPath>,
  isRoot: boolean = true
): ITreeNode<IRDFNodeWithPath> {
  const isClass = isClassNode(node, graph);
  const properties = getClassProperties(node, graph);
  const ancestors =
    path === "" || !isClass ? getClassAncestors(node, graph) : [];

  const childNodes = ancestors.concat(properties).map((node) => {
    return getNodeTree(
      path + "." + node.value,
      expandedNames,
      selectedNames,
      node,
      contextPrefix,
      graph,
      transform,
      false
    );
  });

  return transform(
    {
      id: path,
      label: node.value,
      nodeData: { node, path, isClass },
      childNodes: childNodes.length > 0 ? childNodes : undefined,
    },
    isRoot
  );
}

/** Shows a collapsible JSON tree of the survey result data for debugging. */
export default function ModelTree(props: {}) {
  const [expandedNames, setExpandedNames] = React.useState<Set<string>>(
    new Set([""])
  );

  const [selectedNames, setSelectedNames] = React.useState<Set<string>>(
    new Set([])
  );
  const store = React.useContext(RDFGraphContext);
  const handleCheckboxChange = React.useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      const checkbox = event.currentTarget;
      const name = checkbox.dataset["name"];
      if (!name) {
        debugger;
        throw new Error("data-name must be set on checkbox");
      }
      const ancestors = getClassAncestors(sym(name), store);
      const properties = getDirectAndIndirectClassProperties(sym(name), store);
      if (checkbox.checked) {
        properties.forEach((p) => {
          selectedNames.add(p.value);
        });
        selectedNames.add(name);
      } else {
        ancestors.forEach((a) => selectedNames.delete(a.value));
        properties.forEach((p) => selectedNames.delete(p.value));
        selectedNames.delete(name);
      }
      setSelectedNames(new Set([...selectedNames]));
    },
    [selectedNames, store]
  );

  const node = sym("https://schema.org/Hotel");
  const contextPrefix = React.useMemo(() => {
    return replaceURIWithPrefix(node.value).split(":")[0];
  }, [node.value]);

  const result = React.useMemo(() => {
    return getNodeTree(
      "",
      expandedNames,
      selectedNames,
      node,
      contextPrefix,
      store,
      (result, isRoot: boolean) => {
        const nodeData = result.nodeData;
        if (!nodeData) {
          throw new Error(
            "Encountered a tree node that is not associated with a node. Please fix this."
          );
        }

        const name = nodeData.node.value;
        const directProperties = getClassProperties(sym(name), store);
        const hasSelectedDirectProperties = !!directProperties.find((p) =>
          selectedNames.has(p.value)
        );
        const isPartiallySelected =
          !selectedNames.has(name) && hasSelectedDirectProperties;
        const isSelected = selectedNames.has(nodeData.node.value);

        const label = (
          <ControlGroup>
            <Checkbox
              inline={true}
              style={{ margin: "0", alignSelf: "center" }}
              checked={isSelected}
              aria-checked={isPartiallySelected ? "mixed" : isSelected}
              indeterminate={isPartiallySelected}
              onChange={handleCheckboxChange}
              data-name={nodeData.node.value}
            />
            <ClassNodeButtonWithPopover
              name={nodeData.node.value}
              contextPrefix={isRoot ? "" : contextPrefix}
            />
          </ControlGroup>
        );

        const transformedResult: ITreeNode<IRDFNodeWithPath> = {
          ...result,
          label,
          isExpanded: expandedNames.has(nodeData.node.value),
          secondaryLabel: nodeData && (
            <SecondaryLabel
              node={nodeData}
              graph={store}
              contextPrefix={contextPrefix}
            />
          ),
        };

        return transformedResult;
      }
    );
  }, [
    expandedNames,
    selectedNames,
    node,
    contextPrefix,
    store,
    handleCheckboxChange,
  ]);

  return result ? (
    <Tree
      onNodeExpand={(node) => {
        node.nodeData?.node.value &&
          expandedNames.add(node.nodeData?.node.value);
        setExpandedNames(new Set(expandedNames));
      }}
      onNodeCollapse={(node) => {
        if (!node.nodeData?.node.value) {
          return;
        }
        expandedNames.delete(node.nodeData.node.value);
        setExpandedNames(new Set(expandedNames));
      }}
      contents={[result]}
    />
  ) : (
    <div></div>
  );
}
