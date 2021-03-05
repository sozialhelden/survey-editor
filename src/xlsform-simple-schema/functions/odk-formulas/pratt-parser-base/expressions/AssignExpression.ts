import { NameExpression } from ".";
import { Expression, StringBuilder, Token } from "../types";

/**
 * An assignment expression like "a = b".
 */
export default class AssignExpression extends Expression {
  kind = "assign";
  children = [this.name, this.operatorToken, this.right];

  constructor(
    readonly tokens: Token[],
    readonly name: NameExpression,
    readonly operatorToken: Token,
    readonly right: Expression
  ) {
    super();
  }

  public print(builder: StringBuilder): void {
    builder("(");
    this.name.print(builder);
    builder(" = ");
    this.right.print(builder);
    builder(")");
  }
}
