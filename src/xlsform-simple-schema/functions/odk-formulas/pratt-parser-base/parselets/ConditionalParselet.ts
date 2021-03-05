import ConditionalExpression from "../expressions/ConditionalExpression";
import Parser from "../Parser";
import { Expression, Token, TokenType } from "../types";
import InfixParselet from "./InfixParselet";

/**
 * Parselet for the condition or "ternary" operator, like "a ? b : c".
 */
export default class ConditionalParselet extends InfixParselet {
  constructor(readonly precedence: number) {
    super();
  }

  public parse(
    parser: Parser,
    left: Expression,
    questionMarkToken: Token
  ): Expression {
    const thenArm = parser.parseExpression();
    const colonToken = parser.consume(TokenType.COLON);
    const elseArm = parser.parseExpression(this.precedence - 1);
    return new ConditionalExpression(
      [
        ...left.tokens,
        questionMarkToken,
        ...thenArm.tokens,
        colonToken,
        ...elseArm.tokens,
      ],
      left,
      questionMarkToken,
      thenArm,
      colonToken,
      elseArm
    );
  }

  public getPrecedence(): number {
    return this.precedence;
  }
}
