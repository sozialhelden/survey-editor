import { fromPairs, isEmpty } from "lodash";
import {
  EvaluatableColumnName,
  evaluatableColumnNames,
  isGroupNode,
  ODKNode,
} from "../../../types/ODKNode";
import { XLSForm } from "../../../types/XLSForm";
import evaluateNodeColumn from "./evaluateNodeColumn";
import ODKFormulaEvaluationContext from "./ODKFormulaEvaluationContext";
import ODKFormulaEvaluationResult from "./ODKFormulaEvaluationResult";

export function getJSONResult(
  node: ODKNode,
  context: ODKFormulaEvaluationContext
): unknown {
  const evaluationResults = context.evaluationResults.get(node);
  if (isGroupNode(node)) {
    if (evaluationResults?.get("relevant")?.result === false) {
      return undefined;
    }
    return fromPairs(
      node.children
        .map((childNode) => [
          childNode.row.name,
          getJSONResult(childNode, context),
        ])
        .filter(([, result]) => result !== undefined && !isEmpty(result))
    );
  }
  return evaluationResults?.get("calculation")?.result;
}

/**
 * @returns the calculated or answered value of a given branch (incl. children) or leaf in the node
 * tree. Calls a callback function for each found result.
 */
export function evaluateNodeAndChildren(
  node: ODKNode,
  context: ODKFormulaEvaluationContext,
  onEval: (
    node: ODKNode,
    columnName: EvaluatableColumnName,
    result: ODKFormulaEvaluationResult
  ) => void
): void {
  const fallbacks: Record<EvaluatableColumnName, () => unknown> = {
    relevant: () => true,
    calculation: () =>
      isGroupNode(node)
        ? getJSONResult(node, context)
        : context.nodesToAnswers.get(node),
    required: () => false,
    readonly: () => false,
    constraint: () => true,
  };

  node.children?.forEach((child) =>
    evaluateNodeAndChildren(child, context, onEval)
  );

  evaluatableColumnNames.forEach((columnName) => {
    onEval(
      node,
      columnName,
      evaluateNodeColumn(node, context, columnName, fallbacks[columnName]())
    );
  });
}

/**
 * @returns the calculated or answered value of all leaves in the node tree. Saves the calculated
 * results in the given evaluation context as a side effect.
 */

export default function getEvaluatedXLSFormResult(
  xlsForm: XLSForm,
  context: ODKFormulaEvaluationContext
) {
  evaluateNodeAndChildren(
    xlsForm.rootSurveyGroup,
    context,
    (node, columnName, result) => {
      // console.log("Eval", { name: node.row.name, columnName, result });
      let columnNamesToResults = context.evaluationResults.get(node);
      if (!columnNamesToResults) {
        columnNamesToResults = new Map();
        context.evaluationResults.set(node, columnNamesToResults);
      }
      columnNamesToResults?.set(columnName, result);
    }
  );
}
