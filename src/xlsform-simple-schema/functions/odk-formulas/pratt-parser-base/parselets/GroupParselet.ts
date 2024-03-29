import GroupExpression from "../expressions/GroupExpression";
import Parser from "../Parser";
import { Expression, Token, TokenType } from "../types";
import PrefixParselet from "./PrefixParselet";

/**
 * Parses parentheses used to group an expression, like "a * (b + c)".
 */
export default class GroupParselet extends PrefixParselet {
  constructor(readonly rightParenTokenType: TokenType) {
    super();
  }

  public parse(parser: Parser, leftParenToken: Token): Expression {
    const expression = parser.parseExpression();
    const rightParenToken = parser.consume(this.rightParenTokenType);
    return new GroupExpression(
      [leftParenToken, ...expression.tokens, rightParenToken],
      expression
    );
  }
}
