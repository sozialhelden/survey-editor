import CallExpression from "../expressions/CallExpression";
import { Expression, Token, TokenType } from "../types";
import InfixParselet from "./InfixParselet";
import Parser from "../Parser";

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

  public parse(
    parser: Parser,
    left: Expression,
    leftParenToken: Token
  ): Expression {
    // Parse the token-separated arguments until we hit the token that marks the argument list end.
    const args: Expression[] = [];
    let rightParenToken: Token | undefined = parser.match(
      this.rightParenTokenType
    );
    const tokens: Token[] = [...left.tokens, leftParenToken];
    const argsAndDelimiters: (Expression | Token)[] = [];
    if (rightParenToken) {
      // There may be no arguments at all.
      tokens.push(rightParenToken);
    } else {
      let delimiterToken;
      do {
        const arg = parser.parseExpression();
        args.push(arg);
        tokens.push(...arg.tokens);
        argsAndDelimiters.push(arg);
        delimiterToken = parser.match(this.argumentDelimiterTokenType);
        if (delimiterToken) {
          tokens.push(delimiterToken);
          argsAndDelimiters.push(delimiterToken);
        }
      } while (delimiterToken);
      rightParenToken = parser.consume(this.rightParenTokenType);
      if (rightParenToken) {
        tokens.push(rightParenToken);
      }
    }

    return new CallExpression(
      tokens,
      left,
      leftParenToken,
      argsAndDelimiters,
      rightParenToken
    );
  }

  public getPrecedence(): number {
    return this.precedence;
  }
}
