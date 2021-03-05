import { Expression, StringBuilder, Token } from "../types";

/**
 * A literal expression like `true`, `"some string"`, `1.2345`.
 */
export default class LiteralExpression<T> extends Expression {
  kind = "literal";
  children = this.tokens;

  constructor(
    readonly tokens: Token[],
    readonly type: string,
    readonly value: T
  ) {
    super();
  }

  public print(builder: StringBuilder): void {
    if (this.type === "string") {
      builder(`'${this.value}'`);
      return;
    }
    builder("[");
    builder(this.type);
    builder(" ");
    builder(String(this.value));
    builder("]");
  }
}
