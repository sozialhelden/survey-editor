import { TokenType } from "../xlsform-simple-schema/functions/odk-formulas/pratt-parser-base";
import LiteralExpression from "../xlsform-simple-schema/functions/odk-formulas/pratt-parser-base/expressions/LiteralExpression";

export default function createLiteralExpressionFromValue(value: unknown) {
  return new LiteralExpression(
    [{ type: TokenType.LITERAL, text: JSON.stringify(value), index: -1 }],
    value instanceof Array ? "array" : typeof value,
    value
  );
}
