import { TokenType } from "../pratt-parser-base";
import LiteralExpression from "../pratt-parser-base/expressions/LiteralExpression";

/**
 * @returns an evaluatable formula literal usable in an AST and for syntax highlighting.
 */
export default function createLiteralExpressionFromValue(value: unknown) {
  return new LiteralExpression(
    [{ type: TokenType.LITERAL, text: JSON.stringify(value), index: -1 }],
    value instanceof Array ? "array" : typeof value,
    value
  );
}
