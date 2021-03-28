import { SemanticError } from "../../../types/Errors";
import { ODKNode, ODKNodeWithoutRuntimeInfo } from "../../../types/ODKNode";
import LiteralExpression from "../pratt-parser-base/expressions/LiteralExpression";
import evaluateODKFormula from "./evaluateODKFormula";
import ODKFormulaEvaluationContext from "./ODKFormulaEvaluationContext";
import ODKFormulaEvaluationResult from "./ODKFormulaEvaluationResult";

/**
 * Calculates if a field is relevant (\`true\`) or should be skipped (\`false\'). Users can
 * calculate this with a formula in the `relevant` cell.
 *
 * @returns Object with the result of the evaluation and metadata.
 */
export default function isFieldRelevant(
  node: ODKNodeWithoutRuntimeInfo,
  context: ODKFormulaEvaluationContext,
  scope: ODKNode
): ODKFormulaEvaluationResult {
  const formula = node.row?.relevant?.trim();

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
    const row = node.row;
    throw new SemanticError(
      `The \`relevant\` column of the ‘${row?.name}’ question (row #${node.rowIndex}) contains formula \`${row?.relevant}\`. This formula evaluates to \`${result}\`, which is not a boolean value. Please change the formula so it returns a boolean value.`
    );
  }

  return result;
}
