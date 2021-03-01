import { ODKFormulaError } from "../../types/Errors";
import { ODKNode } from "../../types/ODKNode";
import evaluateExpression from "../odk-formulas/evaluation/evaluateExpression";
import ODKFormulaEvaluationContext from "../odk-formulas/evaluation/ODKFormulaEvaluationContext";
import { NameExpression, TokenType } from "../odk-formulas/pratt-parser-base";

export function getStringInterpolationFunctionOrString(
  inputString: string,
  context: ODKFormulaEvaluationContext,
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
