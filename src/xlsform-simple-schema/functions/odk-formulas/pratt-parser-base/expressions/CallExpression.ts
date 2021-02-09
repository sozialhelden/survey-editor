import { Expression, StringBuilder } from "../types";

/**
 * A function call like "a(b, c, d)".
 */
export default class CallExpression implements Expression {
  kind = "call";
  constructor(readonly fn: Expression, readonly args: Expression[]) {}

  public print(builder: StringBuilder): void {
    this.fn.print(builder);
    builder("(");
    for (let i = 0; i < this.args.length; i++) {
      this.args[i].print(builder);
      if (i < this.args.length - 1) builder(", ");
    }
    builder(")");
  }
}
