import { ODKNode } from "../types/ODKNode";
import XLSForm from "../types/XLSForm";
import evaluateNodeColumn from "./odk-formulas/evaluation/evaluateNodeColumn";
import ODKFormulaEvaluationContext from "./odk-formulas/evaluation/ODKFormulaEvaluationContext";

export type NodeToValueFunctionOptions = {
  key: string;
  node: ODKNode;
  xlsForm: XLSForm;
  context: ODKFormulaEvaluationContext;
  evaluatedAnswer: unknown;
};

export type NodeToValueFunction = (
  options: NodeToValueFunctionOptions
) => Record<string, unknown>;

export function getEvaluatedNodeResult(
  node: ODKNode,
  context: ODKFormulaEvaluationContext
) {
  if (node.children.length === 0) {
    if (node.resultsThatNeedReevaluation.answer !== true) {
      const evaluatedResult = evaluateNodeColumn(
        node,
        context,
        "calculation",
        node.answer
      );
      if (evaluatedResult.state === "success") {
        const result = evaluatedResult.result;
        node.evaluatedResults.answer = evaluatedResult;
        if (
          typeof result === "string" ||
          typeof result === "number" ||
          typeof result === "boolean" ||
          result === undefined ||
          result instanceof Date
        ) {
          node.answer = result;
        }
      }
      node.resultsThatNeedReevaluation.answer = false;
    }
    return node.evaluatedResults;
  }

  const result: Record<string, unknown> = {};
  node.children.forEach((childNode) => {
    result[childNode.row.name] = getEvaluatedNodeResult(childNode, context);
  });
  return result;
}

export default function getEvaluatedXLSFormResult(
  xlsForm: XLSForm,
  context: ODKFormulaEvaluationContext
) {
  return getEvaluatedNodeResult(xlsForm.rootSurveyGroup, context);
}
