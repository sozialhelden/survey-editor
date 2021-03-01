import { Expression, StringBuilder, Token } from "../types";

/**
 * A literal expression like `true`, `"some string"`, `1.2345`.
 */
export default class LiteralExpression<T> implements Expression {
  kind = "literal";
  children = [];

  constructor(
    readonly tokens: Token[],
    readonly type: string,
    readonly value: T
  ) {}

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
