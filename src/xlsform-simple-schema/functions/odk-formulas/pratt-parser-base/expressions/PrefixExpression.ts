import { Expression, punctuator, StringBuilder, Token } from "../types";

/**
 * A prefix unary arithmetic expression like "!a" or "-b".
 */
export default class PrefixExpression extends Expression {
  kind = "prefix";
  children = [this.right];

  constructor(
    readonly tokens: Token[],
    readonly operatorToken: Token,
    readonly right: Expression
  ) {
    super();
  }

  public print(builder: StringBuilder): void {
    builder("(");
    builder(punctuator(this.operatorToken.type));
    this.right.print(builder);
    builder(")");
  }
}
