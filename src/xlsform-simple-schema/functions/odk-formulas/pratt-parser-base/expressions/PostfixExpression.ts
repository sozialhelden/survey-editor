import {
  Expression,
  punctuator,
  TokenType,
  StringBuilder,
  Token,
} from "../types";

/**
 * A postfix unary arithmetic expression like "a!".
 */
export default class PostfixExpression implements Expression {
  kind = "postfix";
  children = [this.left];

  constructor(
    readonly tokens: Token[],
    readonly left: Expression,
    readonly operator: TokenType
  ) {}

  public print(builder: StringBuilder): void {
    builder("(");
    this.left.print(builder);
    builder(punctuator(this.operator));
    builder(")");
  }
}
