import { Icon, ITreeNode, Tree } from "@blueprintjs/core";
import * as React from "react";
import { ODKSurveyContext } from "../lib/ODKSurveyContext";
import DetailsPopover from "../survey/DetailsPopover";
import XLSForm from "../xlsform-simple-schema";
import ODKFormulaEvaluationContext from "../xlsform-simple-schema/functions/odk-formulas/evaluation/ODKFormulaEvaluationContext";
import { getNodeAbsolutePath } from "../xlsform-simple-schema/functions/odk-formulas/evaluation/XPath";
import {
  isNodeRelevant,
  ODKNode,
} from "../xlsform-simple-schema/types/ODKNode";

function SecondaryLabel(props: { node: ODKNode }) {
  const { node } = props;
  const context = React.useContext(ODKSurveyContext);
  const results = context.context?.evaluationResults.get(node);
  if (!results) {
    return <Icon icon="calculator" intent="none" />;
  }
  const keysWithErrors = Object.keys(results).filter(
    (k) => results.get(k)?.error
  );
  const answer = context.context?.nodesToAnswers.get(node);
  const valueString = answer === undefined ? null : JSON.stringify(answer);
  const caption = <span>{valueString}</span>;
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
              "Encountered a tree node that is not assciated with a node. Please fix this."
            );
          }

          const label = (
            <DetailsPopover
              node={node}
              detailsButtonCaption={<span>{result.label}</span>}
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
  }, [evaluationContext, xlsForm]);

  return result ? <Tree contents={[result]} /> : <div></div>;
}
