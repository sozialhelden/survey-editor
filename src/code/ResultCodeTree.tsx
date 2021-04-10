import { Colors, ControlGroup, Icon, ITreeNode, Tree } from "@blueprintjs/core";
import { Tooltip2 } from "@blueprintjs/popover2";
import * as React from "react";
import { useDarkMode } from "../components/core/DarkModeContainer";
import HighlightedExpression from "../components/HighlightedExpression/HighlightedODKExpression";
import { ODKSurveyContext } from "../lib/ODKSurveyContext";
import FieldPopoverButton from "../survey/FieldPopoverButton/FieldPopoverButton";
import { XLSForm } from "../xlsform-simple-schema";
import createLiteralExpressionFromValue from "../xlsform-simple-schema/functions/odk-formulas/evaluation/createLiteralExpressionFromValue";
import { getJSONResult } from "../xlsform-simple-schema/functions/odk-formulas/evaluation/evaluateNodeAndChildren";
import ODKFormulaEvaluationContext from "../xlsform-simple-schema/functions/odk-formulas/evaluation/ODKFormulaEvaluationContext";
import {
  getNodeAbsolutePath,
  getNodeAbsolutePathString,
} from "../xlsform-simple-schema/functions/odk-formulas/evaluation/XPath";
import {
  evaluatableColumnNames,
  ODKNode,
} from "../xlsform-simple-schema/types/ODKNode";

/** The label visible on the right of each tree item. */
function SecondaryLabel(props: { node: ODKNode; jsonResult: unknown }) {
  const { node } = props;
  const context = React.useContext(ODKSurveyContext);
  const results = context.evaluationContext?.evaluationResults.get(node);
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
      expression={createLiteralExpressionFromValue(calculationResults?.result)}
    />
  );
  const error =
    keysWithErrors.length > 0 &&
    `Node has errors in the following columns: ${keysWithErrors
      .map((k) => `‘${k}’`)
      .join(", ")}`;
  const icon = error ? (
    <>
      &nbsp;
      <Tooltip2 content={error}>
        <Icon icon="error" intent="danger" title={error} htmlTitle={error} />
      </Tooltip2>
    </>
  ) : null;
  return (
    <ControlGroup>
      {caption}
      {icon}
    </ControlGroup>
  );
}

/** Recursively creates ITreeNode objects from the given survey root. */
export function getNodeTree(
  node: ODKNode,
  context: ODKFormulaEvaluationContext,
  jsonResult: unknown,
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
      getNodeTree(childNode, context, jsonResult, transform)
    ),
    nodeData: node,
  });
}

/** Shows a collapsible JSON tree of the survey result data for debugging. */
export default function ResultCodeTree(props: { xlsForm: XLSForm }) {
  const { xlsForm } = props;
  const context = React.useContext(ODKSurveyContext);
  const evaluationContext = context.evaluationContext;
  const [collapsedKeys, setCollapsedKeys] = React.useState<Set<string>>(
    new Set()
  );
  const isDarkMode = useDarkMode();
  const violetColor = isDarkMode ? Colors.VIOLET5 : Colors.VIOLET3;

  const result = React.useMemo(() => {
    const jsonResult = evaluationContext?.survey
      ? getJSONResult(evaluationContext?.survey, evaluationContext)
      : {};

    return xlsForm && evaluationContext
      ? getNodeTree(
          xlsForm.rootSurveyGroup,
          evaluationContext,
          jsonResult,
          (result) => {
            const node = result.nodeData;
            if (!node) {
              debugger;
              throw new Error(
                "Encountered a tree node that is not associated with a node. Please fix this."
              );
            }

            if (!evaluationContext) {
              throw new Error(
                "No context defined. Please define a context before using this component."
              );
            }

            const label = (
              <FieldPopoverButton
                node={node}
                editable={true}
                hasTypeIcon={true}
                buttonStyle={{ color: violetColor }}
              />
            );

            return {
              ...result,
              label,
              key: node.row.name,
              isExpanded: !collapsedKeys.has(
                getNodeAbsolutePathString(node, evaluationContext)
              ),
              hasCaret: !(result.childNodes?.length === 0),
              secondaryLabel: node && (
                <SecondaryLabel node={node} jsonResult={jsonResult} />
              ),
            } as ITreeNode<ODKNode>;
          }
        )
      : null;
  }, [collapsedKeys, evaluationContext, xlsForm]);

  return result ? (
    <Tree
      onNodeExpand={(node) => {
        if (!node.nodeData || !evaluationContext) {
          return;
        }
        collapsedKeys.delete(
          getNodeAbsolutePathString(node.nodeData, evaluationContext)
        );
        setCollapsedKeys(new Set(collapsedKeys));
      }}
      onNodeCollapse={(node) =>
        node.nodeData &&
        evaluationContext &&
        setCollapsedKeys(
          new Set(
            collapsedKeys.add(
              getNodeAbsolutePathString(node.nodeData, evaluationContext)
            )
          )
        )
      }
      contents={[result]}
    />
  ) : (
    <div></div>
  );
}
