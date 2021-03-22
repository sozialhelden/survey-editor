import { Colors, Icon, ITreeNode, Tree } from "@blueprintjs/core";
import * as React from "react";
import HighlightedExpression from "../components/HighlightedExpression/HighlightedODKExpression";
import { ODKSurveyContext } from "../lib/ODKSurveyContext";
import FieldPopoverButton from "../survey/FieldPopoverButton/FieldPopoverButton";
import { XLSForm } from "../xlsform-simple-schema";
import ODKFormulaEvaluationContext from "../xlsform-simple-schema/functions/odk-formulas/evaluation/ODKFormulaEvaluationContext";
import { getNodeAbsolutePath } from "../xlsform-simple-schema/functions/odk-formulas/evaluation/XPath";
import {
  evaluatableColumnNames,
  ODKNode,
} from "../xlsform-simple-schema/types/ODKNode";

/** The label visible on the right of each tree item. */
function SecondaryLabel(props: { node: ODKNode }) {
  const { node } = props;
  const context = React.useContext(ODKSurveyContext);
  const results = context.context?.evaluationResults.get(node);
  if (!results) {
    return <Icon icon="calculator" intent="none" />;
  }
  const keysWithErrors = evaluatableColumnNames.filter(
    (k) => results.get(k)?.error
  );

  const calculationResults = results?.get("calculation");
  const caption = (
    <HighlightedExpression
      node={node}
      state={calculationResults?.state}
      error={calculationResults?.error}
      expression={calculationResults?.expression}
    />
  );
  const error = `Node has errors in the following columns: ${keysWithErrors
    .map((k) => `‘${k}’`)
    .join(", ")}`;
  const icon = keysWithErrors.length ? (
    <Icon icon="error" intent="danger" title={error} htmlTitle={error} />
  ) : null;
  return (
    <>
      {caption}
      {icon}
    </>
  );
}

/** Recursively creates ITreeNode objects from the given survey root. */
export function getNodeTree(
  node: ODKNode,
  context: ODKFormulaEvaluationContext,
  transform: (result: ITreeNode<ODKNode>) => ITreeNode<ODKNode>
): ITreeNode<ODKNode> {
  if (node.children.length === 0) {
    return transform({
      id: getNodeAbsolutePath(node, context).join("."),
      label: node.row.name,
      childNodes: [],
      nodeData: node,
    });
  }

  return transform({
    id: getNodeAbsolutePath(node, context).join("."),
    label: node.row.name,
    childNodes: node.children.map((childNode) =>
      getNodeTree(childNode, context, transform)
    ),
    nodeData: node,
  });
}

/** Shows a collapsible JSON tree of the survey result data for debugging. */
export default function ResultCodeTree(props: { xlsForm: XLSForm }) {
  const { xlsForm } = props;
  const context = React.useContext(ODKSurveyContext);
  const evaluationContext = context.context;

  const result = React.useMemo(() => {
    return xlsForm && evaluationContext
      ? getNodeTree(xlsForm.rootSurveyGroup, evaluationContext, (result) => {
          const node = result.nodeData;
          if (!node) {
            debugger;
            throw new Error(
              "Encountered a tree node that is not associated with a node. Please fix this."
            );
          }

          if (!context.context) {
            throw new Error(
              "No context defined. Please define a context before using this component."
            );
          }

          const label = (
            <FieldPopoverButton
              node={node}
              editable={true}
              hasTypeIcon={true}
              buttonStyle={{ color: Colors.VIOLET3 }}
            />
          );

          return {
            ...result,
            label,
            key: node.row.name,
            isExpanded: true,
            hasCaret: !(result.childNodes?.length === 0),
            secondaryLabel: node && <SecondaryLabel node={node} />,
          } as ITreeNode<ODKNode>;
        })
      : null;
  }, [context.context, evaluationContext, xlsForm]);

  return result ? <Tree contents={[result]} /> : <div></div>;
}
