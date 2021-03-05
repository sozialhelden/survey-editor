import { ODKNode } from "../../../types/ODKNode";
import ODKFormulaEvaluationContext from "./ODKFormulaEvaluationContext";
import evaluateODKFormula from "./evaluateODKFormula";
import { EvaluationError } from "../../../types/Errors";
import ODKFormulaEvaluationResult from "./ODKFormulaEvaluationResult";
import LiteralExpression from "../pratt-parser-base/expressions/LiteralExpression";

/**
 * Evaluates the JavaScript value of a survey node, returning either a user answer or a calculated
 * formula result.
 *
 * @param node The node containing the survey answer / calculation to evaluate.
 * @param context the global context in which the node's result should be evaluated. This context
 *   contains information about the whole survey - The evaluation needs this to known the values of
 *   references to other survey nodes (e.g. when you use a variable like `${other-field}` in the
 *   formula)
 */
export default function evaluateNodeColumn(
  node: ODKNode,
  context: ODKFormulaEvaluationContext,
  columnName: "calculation" | "relevant" | "required" | "readonly",
  fallback: unknown
): ODKFormulaEvaluationResult {
  const formula = node.row?.[columnName]?.trim();
  if (formula === "" || formula === undefined) {
    const fallbackValue = fallback;
    const isMultiSelectResult = node.type === "select_multiple";
    const value =
      isMultiSelectResult && fallbackValue instanceof Array
        ? fallbackValue.join(" ")
        : fallbackValue;
    return {
      state: "success",
      result: value,
      expression: new LiteralExpression(
        [],
        value instanceof Array ? "array" : typeof value,
        value
      ),
      error: undefined,
    };
  }
  const row = node.row;
  let evaluationResult: ODKFormulaEvaluationResult | undefined = undefined;
  try {
    evaluationResult = evaluateODKFormula(formula, context, node);
  } catch (error) {
    debugger;
    throw new EvaluationError(
      `Error in \`${columnName}\` column of the ‘${row?.name}’ question (row #${node.rowIndex}). It contains the formula \`${row?.[columnName]}\`. Please ensure the formula is valid. The error was: ${error}`,
      "calculationError",
      evaluationResult?.expression,
      context,
      node,
      error
    );
  }
  return evaluationResult;
}
