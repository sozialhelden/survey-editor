import Parser from '../Parser';
import { Expression, Token, TokenType } from '../types';
import PrefixParselet from './PrefixParselet';

/**
 * Parses parentheses used to group an expression, like "a * (b + c)".
 */
export default class GroupParselet extends PrefixParselet {
  constructor(readonly rightParenTokenType: TokenType) {
    super();
  }

  public parse(parser: Parser, _token: Token): Expression {
    const expression = parser.parseExpression();
    parser.consume(this.rightParenTokenType);
    return expression;
  }
}
