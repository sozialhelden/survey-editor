import { Expression, punctuator, TokenType, StringBuilder } from "../types";

/**
 * A postfix unary arithmetic expression like "a!".
 */
export default class PostfixExpression implements Expression {
  kind = "postfix";
  constructor(readonly left: Expression, readonly operator: TokenType) {}

  public print(builder: StringBuilder): void {
    builder("(");
    this.left.print(builder);
    builder(punctuator(this.operator));
    builder(")");
  }
}
