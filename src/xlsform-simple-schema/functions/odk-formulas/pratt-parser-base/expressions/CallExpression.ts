import { Expression, StringBuilder, Token } from "../types";

/**
 * A function call like "a(b, c, d)".
 */
export default class CallExpression extends Expression {
  kind = "call";
  readonly args: Expression[];
  children = [
    this.fn,
    this.leftParenToken,
    ...this.argsAndDelimiters,
    this.rightParenToken,
  ];

  constructor(
    readonly tokens: Token[],
    readonly fn: Expression,
    readonly leftParenToken: Token,
    readonly argsAndDelimiters: (Expression | Token)[],
    readonly rightParenToken: Token
  ) {
    super();
    this.args = argsAndDelimiters.filter(
      (e) => e instanceof Expression
    ) as Expression[];
  }

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
