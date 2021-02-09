import { Expression, StringBuilder } from "../types";

/**
 * A simple variable name expression like "a > b > c" or "[foo=~bar]".
 */
export default class SelectorExpression<T> implements Expression {
  kind = "selector";

  constructor(readonly text: string, readonly selector: T) {}

  public print(builder: StringBuilder): void {
    builder(this.text);
  }
}
