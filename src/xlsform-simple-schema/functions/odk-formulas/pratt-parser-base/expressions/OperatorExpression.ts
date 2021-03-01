import { Expression, StringBuilder, Token } from "../types";

/**
 * A binary arithmetic expression like "a + b" or "c ^ d".
 */
export default class OperatorExpression implements Expression {
  kind = "operator";
  children = [this.left, this.right];

  constructor(
    readonly tokens: Token[],
    readonly left: Expression,
    readonly operator: string,
    readonly right: Expression
  ) {}

  public print(builder: StringBuilder): void {
    builder("(");
    this.left.print(builder);
    builder(" ");
    builder(this.operator);
    builder(" ");
    this.right.print(builder);
    builder(")");
  }
}
