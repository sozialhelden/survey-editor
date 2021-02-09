import { ODKFormulaError } from '../../types/Errors';
import { ODKNode } from '../../types/ODKNode';
import evaluateExpression from '../odk-formulas/evaluation/evaluateExpression';
import ODKFormulaEvaluationContext from '../odk-formulas/evaluation/ODKFormulaEvaluationContext';
import { NameExpression } from '../odk-formulas/pratt-parser-base';


export function getStringInterpolationFunctionOrString(
  interpolatedString: string,
  context: ODKFormulaEvaluationContext,
  node: ODKNode
) {
  const hasInterpolation = !!interpolatedString.match(/\${([^}]+)}/);
  if (!hasInterpolation) {
    return interpolatedString;
  }
  return function getInterpolatedString(): string {
    return interpolatedString.replace(/\${([^}]+)}/g, (match, ...args): string => {
      try {
        const result = evaluateExpression(new NameExpression(args[0], match), context, node);
        return String(result);
      } catch (e) {
        if (e instanceof ODKFormulaError) {
          return e.toMarkdown();
        }
        throw e;
      }
    });
  };
}
