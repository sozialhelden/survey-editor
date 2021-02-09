import CallExpression from '../expressions/CallExpression';
import { Expression, Token, TokenType } from '../types';
import InfixParselet from './InfixParselet';
import Parser from '../Parser';

/**
 * Parselet to parse a function call like "a(b, c, d)".
 */
export default class CallParselet extends InfixParselet {
  constructor(
    readonly rightParenTokenType: TokenType,
    readonly argumentDelimiterTokenType: TokenType,
    readonly precedence: number
  ) {
    super();
  }

  public parse(parser: Parser, left: Expression, _token: Token): Expression {
    // Parse the comma-separated arguments until we hit, ")".
    const args: Expression[] = [];

    // There may be no arguments at all.
    if (!parser.match(this.rightParenTokenType)) {
      do {
        args.push(parser.parseExpression());
      } while (parser.match(this.argumentDelimiterTokenType));
      parser.consume(this.rightParenTokenType);
    }

    return new CallExpression(left, args);
  }

  public getPrecedence(): number {
    return this.precedence;
  }
}
