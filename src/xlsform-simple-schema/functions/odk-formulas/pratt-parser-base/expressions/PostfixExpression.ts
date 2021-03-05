import { Expression, punctuator, StringBuilder, Token } from "../types";

/**
 * A postfix unary arithmetic expression like "a!".
 */
export default class PostfixExpression extends Expression {
  kind = "postfix";
  children = [this.left, this.operatorToken];

  constructor(
    readonly tokens: Token[],
    readonly left: Expression,
    readonly operatorToken: Token
  ) {
    super();
  }

  public print(builder: StringBuilder): void {
    builder("(");
    this.left.print(builder);
    builder(punctuator(this.operatorToken.type));
    builder(")");
  }
}
