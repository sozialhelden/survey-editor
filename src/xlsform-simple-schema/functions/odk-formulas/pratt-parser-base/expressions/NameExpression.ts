import { Expression, StringBuilder, Token } from "../types";

/**
 * A simple variable name expression like "abc".
 */
export default class NameExpression implements Expression {
  kind = "name";
  children = [];

  constructor(
    readonly tokens: Token[],
    readonly name: string,
    readonly text: string
  ) {}

  public print(builder: StringBuilder): void {
    builder(this.name);
  }
}
