import { Expression, StringBuilder, Token } from "../types";

/**
 * A simple variable name expression like "abc".
 */
export default class NameExpression extends Expression {
  kind = "name";
  children = this.tokens;

  constructor(
    readonly tokens: Token[],
    readonly name: string,
    readonly text: string
  ) {
    super();
  }

  public print(builder: StringBuilder): void {
    builder(this.name);
  }
}
