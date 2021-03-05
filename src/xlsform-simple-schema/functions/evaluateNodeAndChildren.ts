import {
  EvaluatableColumnName,
  evaluatableColumnNames,
  ODKNode,
} from "../types/ODKNode";
import { XLSForm } from "../types/XLSForm";
import evaluateNodeColumn from "./odk-formulas/evaluation/evaluateNodeColumn";
import ODKFormulaEvaluationContext from "./odk-formulas/evaluation/ODKFormulaEvaluationContext";
import ODKFormulaEvaluationResult from "./odk-formulas/evaluation/ODKFormulaEvaluationResult";

export function evaluateNodeAndChildren(
  node: ODKNode,
  context: ODKFormulaEvaluationContext,
  onEval: (
    node: ODKNode,
    columnName: EvaluatableColumnName,
    result: ODKFormulaEvaluationResult
  ) => void
): void {
  const fallbacks = {
    relevant: true,
    calculation: context.nodesToAnswers.get(node),
    required: false,
    readonly: false,
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
