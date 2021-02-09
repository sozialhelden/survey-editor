import { Expression, StringBuilder } from "../types";

/**
 * A literal expression like `true`, `"some string"`, `1.2345`.
 */
export default class LiteralExpression<T> implements Expression {
  kind = "literal";
  constructor(readonly type: string, readonly value: T) {}

  public print(builder: StringBuilder): void {
    builder("[literal ");
    builder(this.type);
    builder(" ");
    builder(String(this.value));
    builder("]");
  }
}
