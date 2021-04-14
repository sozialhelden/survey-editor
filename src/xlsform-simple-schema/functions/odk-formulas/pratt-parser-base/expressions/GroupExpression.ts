import { Expression, StringBuilder, Token } from "../types";

/**
 * A group expression like "( ... )".
 */
export default class GroupExpression extends Expression {
  kind = "group";
  children = [
    this.tokens[0],
    this.expression,
    this.tokens[this.tokens.length - 1],
  ];

  constructor(readonly tokens: Token[], readonly expression: Expression) {
    super();
  }

  public print(builder: StringBuilder): void {
    builder("(");
    this.expression.print(builder);
    builder(")");
  }
}
