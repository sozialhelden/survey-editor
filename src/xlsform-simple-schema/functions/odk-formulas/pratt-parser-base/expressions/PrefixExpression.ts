import { Expression, punctuator, TokenType, StringBuilder } from "../types";

/**
 * A prefix unary arithmetic expression like "!a" or "-b".
 */
export default class PrefixExpression implements Expression {
  kind = "prefix";
  constructor(readonly operator: TokenType, readonly right: Expression) {}

  public print(builder: StringBuilder): void {
    builder("(");
    builder(punctuator(this.operator));
    this.right.print(builder);
    builder(")");
  }
}
