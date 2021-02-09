import ParseError from './ParseError';
import InfixParselet from './parselets/InfixParselet';
import PrefixParselet from './parselets/PrefixParselet';
import { Expression, Token, TokenType } from './types';

export default class Parser {
  private mTokens: { next: () => { value: Token } };
  private mRead: Token[] = [];
  private mPrefixParselets: Map<TokenType, PrefixParselet> = new Map();
  private mInfixParselets: Map<TokenType, InfixParselet> = new Map();

  constructor(tokens: { next: () => { value: Token } }) {
    this.mTokens = tokens;
  }

  public register(token: TokenType, parselet: PrefixParselet | InfixParselet): void {
    if (parselet instanceof PrefixParselet) {
      this.mPrefixParselets.set(token, parselet);
    } else if (parselet instanceof InfixParselet) {
      this.mInfixParselets.set(token, parselet);
    } else {
      throw new Error(
        `Found a parselet that was neither an infix nor a prefix parselet: No idea what to do with it...`
      );
    }
  }

  public parseExpression(precedence = 0): Expression {
    const token = this.consumeAnything();
    if (!token) {
      throw new ParseError('Parser encountered end of tokens before EOF. This should not happen.');
    }
    const prefix = this.mPrefixParselets.get(token.type);
    if (!prefix)
      throw new ParseError(
        `Could not parse "${token.text}", no method found to parse token type ${token.type} as prefix.`
      );

    let left: Expression = prefix.parse(this, token);

    while (precedence < this.getPrecedence()) {
      const token = this.consumeAnything();
      if (!token) {
        throw new ParseError(
          'Parser encountered end of tokens before EOF. This should not happen.'
        );
      }
      const infix = this.mInfixParselets.get(token.type);
      if (!infix)
        throw new ParseError(
          `Could not parse "${token.text}", no method found to parse token type ${token.type} as infix.`
        );
      left = infix.parse(this, left, token);
    }

    return left;
  }

  public match(expected: TokenType): boolean {
    const token = this.lookAhead(0);
    if (token.type != expected) {
      return false;
    }

    this.consumeAnything();
    return true;
  }

  public consume(expected: TokenType): Token | undefined {
    const token = this.lookAhead(0);
    if (token.type != expected) {
      throw new Error('Expected token ' + expected + ' and found ' + token.type);
    }

    return this.consumeAnything();
  }

  public consumeAnything(): Token | undefined {
    // Make sure we've read the token.
    this.lookAhead(0);

    return this.mRead.shift();
  }

  private lookAhead(distance: number): Token {
    // Read in as many as needed.
    while (distance >= this.mRead.length) {
      const nextToken = this.mTokens.next();
      this.mRead.push(nextToken.value);
    }

    // Get the queued token.
    return this.mRead[distance];
  }

  private getPrecedence(): number {
    const parser = this.mInfixParselets.get(this.lookAhead(0).type);
    if (parser) return parser.getPrecedence();
    return 0;
  }
}
