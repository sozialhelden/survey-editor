import OperatorExpression from "../expressions/OperatorExpression";
import Parser from "../Parser";
import { Expression, Token } from "../types";
import InfixParselet from "./InfixParselet";

/**
 * Generic infix parselet for a binary arithmetic operator. The only
 * difference when parsing, "+", "-", "*", "/", and "^" is precedence and
 * associativity, so we can use a single parselet class for all of those.
 */
export default class BinaryOperatorParselet extends InfixParselet {
  constructor(readonly precedence: number, readonly isRight: boolean) {
    super();
  }

  public parse(
    parser: Parser,
    left: Expression,
    operatorToken: Token
  ): Expression {
    // To handle right-associative operators like "^", we allow a slightly
    // lower precedence when parsing the right-hand side. This will let a
    // parselet with the same precedence appear on the right, which will then
    // take *this* parselet's result as its left-hand argument.
    const right = parser.parseExpression(
      this.precedence - (this.isRight ? 1 : 0)
    );

    return new OperatorExpression(
      [...left.tokens, operatorToken, ...right.tokens],
      left,
      operatorToken,
      right
    );
  }

  public getPrecedence(): number {
    return this.precedence;
  }
}
