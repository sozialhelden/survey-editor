import NameExpression from "../expressions/NameExpression";
import Parser from "../Parser";
import { Expression, Token } from "../types";
import PrefixParselet from "./PrefixParselet";

/**
 * Simple parselet for a named variable like "abc".
 */
export default class NameParselet extends PrefixParselet {
  constructor(readonly getName: (text: string) => string = (t) => t) {
    super();
  }
  public parse(_parser: Parser, token: Token): Expression {
    const name = this.getName(token.text);
    return new NameExpression([token], name, token.text);
  }
}
