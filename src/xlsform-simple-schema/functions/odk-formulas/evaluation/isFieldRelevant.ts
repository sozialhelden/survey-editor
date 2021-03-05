import { SemanticError } from "../../../types/Errors";
import { ODKNode, ODKNodeWithoutRuntimeInfo } from "../../../types/ODKNode";
import LiteralExpression from "../pratt-parser-base/expressions/LiteralExpression";
import evaluateODKFormula from "./evaluateODKFormula";
import ODKFormulaEvaluationContext from "./ODKFormulaEvaluationContext";
import ODKFormulaEvaluationResult from "./ODKFormulaEvaluationResult";

/**
 * Calculates if a field is relevant (\`true\`) or should be skipped (\`false\'). Users can
 * calculate this with a formula.
 *
 * @returns Object with the result of the evaluation and metadata.
 *
 * @param questionGroup
 * @param context
 * @param scope
 */
export default function isFieldRelevant(
  questionGroup: ODKNodeWithoutRuntimeInfo,
  context: ODKFormulaEvaluationContext,
  scope: ODKNode
): ODKFormulaEvaluationResult {
  const formula = questionGroup.row?.relevant?.trim();

  if (formula === "" || formula === undefined) {
    // Nodes are relevant by default.
    return {
      state: "success",
      error: undefined,
      result: true,
      expression: new LiteralExpression([], "boolean", true),
    };
  }

  const result = evaluateODKFormula(formula, context, scope);

  if (typeof result !== "boolean") {
    const row = questionGroup.row;
    throw new SemanticError(
      `The \`relevant\` column of the ‘${row?.name}’ question (row #${questionGroup.rowIndex}) contains formula \`${row?.relevant}\`. This formula evaluates to \`${result}\`, which is not a boolean value. Please change the formula so it returns a boolean value.`
    );
  }

  return result;
}
