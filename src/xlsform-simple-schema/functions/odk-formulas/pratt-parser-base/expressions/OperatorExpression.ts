import { Expression, StringBuilder, Token } from "../types";

/**
 * A binary arithmetic expression like "a + b" or "c ^ d".
 */
export default class OperatorExpression extends Expression {
  kind = "operator";
  children = [this.left, this.operatorToken, this.right];

  constructor(
    readonly tokens: Token[],
    readonly left: Expression,
    readonly operatorToken: Token,
    readonly right: Expression
  ) {
    super();
  }

  public print(builder: StringBuilder): void {
    builder("(");
    this.left.print(builder);
    builder(" ");
    builder(this.operatorToken.text);
    builder(" ");
    this.right.print(builder);
    builder(")");
  }
}
