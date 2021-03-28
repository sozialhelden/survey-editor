import { EvaluationError } from "../../../types/Errors";
import { EvaluatableColumnName, ODKNode } from "../../../types/ODKNode";
import createLiteralExpressionFromValue from "./createLiteralExpressionFromValue";
import evaluateODKFormula from "./evaluateODKFormula";
import ODKFormulaEvaluationContext from "./ODKFormulaEvaluationContext";
import ODKFormulaEvaluationResult from "./ODKFormulaEvaluationResult";

/**
 * @returns the JavaScript value of a survey node, returning either a user answer or a calculated
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
  columnName: EvaluatableColumnName,
  fallback: unknown
): ODKFormulaEvaluationResult {
  const originalFormula = node.row?.[columnName];
  if (originalFormula !== undefined && typeof originalFormula !== "string") {
    debugger;
    throw new Error("Sorry, multilingual formulas are not supported yet.");
  }
  const formula = originalFormula?.trim();
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
      expression: createLiteralExpressionFromValue(value),
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
