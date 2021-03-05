import PrefixExpression from "../expressions/PrefixExpression";
import Parser from "../Parser";
import { Expression, Token } from "../types";
import PrefixParselet from "./PrefixParselet";

/**
 * Generic prefix parselet for an unary arithmetic operator. Parses prefixes, for example
 * unary "-", "+", "~", and "!" expressions.
 */
export default class PrefixOperatorParselet extends PrefixParselet {
  constructor(readonly precedence: number) {
    super();
  }

  public parse(parser: Parser, token: Token): Expression {
    // To handle right-associative operators like "^", we allow a slightly
    // lower precedence when parsing the right-hand side. This will let a
    // parselet with the same precedence appear on the right, which will then
    // take *this* parselet's result as its left-hand argument.
    const right = parser.parseExpression(this.precedence);

    return new PrefixExpression([token, ...right.tokens], token, right);
  }

  public getPrecedence(): number {
    return this.precedence;
  }
}
