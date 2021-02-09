import { Expression, StringBuilder } from "../types";

/**
 * An assignment expression like "a = b".
 */
export default class AssignExpression implements Expression {
  kind = "assign";

  constructor(readonly name: string, readonly right: Expression) {}

  public print(builder: StringBuilder): void {
    builder("(");
    builder(this.name);
    builder(" = ");
    this.right.print(builder);
    builder(")");
  }
}
