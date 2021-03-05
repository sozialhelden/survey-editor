import { Expression, StringBuilder, Token } from "../types";

/**
 * A simple variable name expression like "a > b > c" or "[foo=~bar]".
 */
export default class SelectorExpression<T> extends Expression {
  kind = "selector";
  children = [this.selectorToken];
  tokens = [this.selectorToken];

  constructor(readonly selectorToken: Token, readonly selector: T) {
    super();
  }

  public print(builder: StringBuilder): void {
    builder(this.selectorToken.text);
  }
}
