import { NameExpression } from ".";
import { Expression, StringBuilder, Token } from "../types";

/**
 * An assignment expression like "a = b".
 */
export default class AssignExpression implements Expression {
  kind = "assign";
  children = [this.name, this.right];

  constructor(
    readonly tokens: Token[],
    readonly name: NameExpression,
    readonly right: Expression
  ) {}

  public print(builder: StringBuilder): void {
    builder("(");
    this.name.print(builder);
    builder(" = ");
    this.right.print(builder);
    builder(")");
  }
}
