import {
  ODKFormulaError,
  SemanticError,
  SyntaxError,
} from "../../../types/Errors";
import { ODKNode } from "../../../types/ODKNode";
import ODKFormulaLexer from "../odk-formula-parser/ODKFormulaLexer";
import ODKFormulaParser from "../odk-formula-parser/ODKFormulaParser";
import { Expression } from "../pratt-parser-base";
import evaluateExpression from "./evaluateExpression";
import ODKFormulaEvaluationContext from "./ODKFormulaEvaluationContext";
import ODKFormulaEvaluationResult from "./ODKFormulaEvaluationResult";

export function assertExpressionAfterEvaluation(
  expression: unknown
): asserts expression is Expression {
  if (!expression) {
    throw new SemanticError(
      "Formula was not evaluated to an expression, but no error was encountered. This means an error handler is missing for this case."
    );
  }
}

/**
 * Evaluates a formula string.
 *
 * @returns The resulting value, the AST, and detailed error information if the evaluation fails.
 *
 * @param formula the formula string to evaluate, e.g. '1 + 1'
 * @param context the global context in which the formula should be evaluated. This context contains
 *   information about the whole survey - The evaluation needs this to known the values of
 *   references to other survey nodes (e.g. when you use a variable like `${other-field}` in the
 *   formula)
 * @param scope
 *   For resolving XPaths and relative node references correctly, the evaluation process needs to
 *   know the node in which the evaluation should begin. Use this parameter to supply the node that
 *   contained the formula string.
 */
export default function evaluateODKFormula(
  formula: string,
  context: ODKFormulaEvaluationContext,
  scope: ODKNode = context.survey
): ODKFormulaEvaluationResult {
  let error;
  let result;
  let expression;
  const lexer = new ODKFormulaLexer(formula);
  const parser = new ODKFormulaParser({ tokens: lexer });
  try {
    expression = parser.parseExpression();
    if (!expression) {
      throw new SyntaxError(
        `Parsing given formula \`${formula}\` returned an empty expression.`
      );
    }
    result = evaluateExpression(expression, context, scope);
    assertExpressionAfterEvaluation(expression);
    return {
      parser,
      state: "success",
      expression,
      result,
      error: undefined,
    };
  } catch (e) {
    if (e instanceof ODKFormulaError) {
      error = e;
    } else {
      throw e;
    }
  }

  return {
    parser,
    state: "error",
    expression,
    error,
    result: null,
  };
}
