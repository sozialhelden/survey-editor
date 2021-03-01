import LiteralExpression from "../expressions/LiteralExpression";
import Parser from "../Parser";
import { Expression, Token } from "../types";
import PrefixParselet from "./PrefixParselet";

/**
 * Simple parselet for a literal value, like `-4` or `true`.
 */
export default class LiteralParselet<T> extends PrefixParselet {
  constructor(
    readonly getValue: (token: Token) => T,
    readonly getType: (token: Token) => string
  ) {
    super();
  }

  public parse(_parser: Parser, token: Token): Expression {
    const value = this.getValue(token);
    const type = this.getType(token);
    return new LiteralExpression<T>([token], type, value);
  }
}
