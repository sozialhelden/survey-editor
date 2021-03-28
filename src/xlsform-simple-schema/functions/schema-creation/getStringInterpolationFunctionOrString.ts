import { ODKFormulaError } from "../../types/Errors";
import { ODKNode } from "../../types/ODKNode";
import evaluateExpression from "../odk-formulas/evaluation/evaluateExpression";
import ODKFormulaEvaluationContext from "../odk-formulas/evaluation/ODKFormulaEvaluationContext";
import { NameExpression, TokenType } from "../odk-formulas/pratt-parser-base";

/**
 * Allows to use `${...}` field references inside labels and texts. Each occurence of such a
 * reference is replaced by the value of the referenced field.
 *
 * @example
 * // Assuming there is a text input field called `user_name` with an answer value of 'Jon'...
 * getStringInterpolationFunctionOrString(
 *   'Hello ${user_name}!',
 *   context,
 *   node
 * ) // returns 'Hello Jon!'
 *
 * @returns The given input string, but with each occurrence of a field reference replaced with the value of its referenced field.
 */
export function getStringInterpolationFunctionOrString(
  /** The string in which the field references should be replaced. */
  inputString: string,
  /** The evaluation context in which the referenced fields can be found. */
  context: ODKFormulaEvaluationContext,
  /** The node to which the string belongs. */
  node: ODKNode
) {
  const hasInterpolation = !!inputString.match(/\${([^}]+)}/);
  if (!hasInterpolation) {
    return inputString;
  }
  return function getInterpolatedString(): string {
    return inputString.replaceAll(
      /\${([^}]+)}/g,
      (match, name, offset): string => {
        try {
          const text = match;
          const result = evaluateExpression(
            new NameExpression(
              [{ type: TokenType.NAME, text, index: offset }],
              name,
              match
            ),
            context,
            node
          );
          return String(result);
        } catch (e) {
          if (e instanceof ODKFormulaError) {
            return e.toMarkdown();
          }
          throw e;
        }
      }
    );
  };
}
