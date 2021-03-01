import { Expression, StringBuilder, Token } from "../types";

/**
 * A simple variable name expression like "a > b > c" or "[foo=~bar]".
 */
export default class SelectorExpression<T> implements Expression {
  kind = "selector";
  children = [];

  constructor(
    readonly tokens: Token[],
    readonly text: string,
    readonly selector: T
  ) {}

  public print(builder: StringBuilder): void {
    builder(this.text);
  }
}
