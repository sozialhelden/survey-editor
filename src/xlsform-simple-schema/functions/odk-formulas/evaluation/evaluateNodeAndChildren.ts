import {
  EvaluatableColumnName,
  evaluatableColumnNames,
  ODKNode,
} from "../../../types/ODKNode";
import { XLSForm } from "../../../types/XLSForm";
import evaluateNodeColumn from "./evaluateNodeColumn";
import ODKFormulaEvaluationContext from "./ODKFormulaEvaluationContext";
import ODKFormulaEvaluationResult from "./ODKFormulaEvaluationResult";

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
  const fallbacks: Record<EvaluatableColumnName, unknown> = {
    relevant: true,
    calculation: context.nodesToAnswers.get(node),
    required: false,
    readonly: false,
    constraint: true,
  };

  evaluatableColumnNames.forEach((columnName) => {
    onEval(
      node,
      columnName,
      evaluateNodeColumn(node, context, columnName, fallbacks[columnName])
    );
  });
  node.children?.forEach((child) =>
    evaluateNodeAndChildren(child, context, onEval)
  );
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
