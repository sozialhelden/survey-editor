import { ParseError, SyntaxError } from "../../../types/Errors";
import InfixParselet from "./parselets/InfixParselet";
import PrefixParselet from "./parselets/PrefixParselet";
import { Expression, punctuator, Token, TokenType } from "./types";

export type TokenCallback = (expression: Token) => void;
export type ExpressionCallback = (expression: Expression) => void;
export interface ITokenizer {
  next: () => { value: Token };
}
export type ParserOptions = {
  tokens: ITokenizer;
  onToken?: TokenCallback;
  onExpression?: ExpressionCallback;
};

export default class Parser {
  private readTokens: Token[] = [];
  private prefixParselets: Map<TokenType, PrefixParselet> = new Map();
  private infixParselets: Map<TokenType, InfixParselet> = new Map();

  constructor(readonly options: ParserOptions) {}

  public register(
    token: TokenType,
    parselet: PrefixParselet | InfixParselet
  ): void {
    if (parselet instanceof PrefixParselet) {
      this.prefixParselets.set(token, parselet);
    } else if (parselet instanceof InfixParselet) {
      this.infixParselets.set(token, parselet);
    } else {
      throw new Error(
        `Found a parselet that was neither an infix nor a prefix parselet: No idea what to do with it…`
      );
    }
  }

  public parseExpression(precedence = 0): Expression {
    const token = this.consumeAnything();
    if (!token) {
      throw new ParseError(
        "prematureEOF",
        "Parser encountered end of tokens. This should not happen."
      );
    }
    const prefix = this.prefixParselets.get(token.type);
    if (!prefix)
      throw new ParseError(
        "undefinedPrefix",
        `Expected start of a new expression, but \`${token.text}\` (${token.type}) is not an allowed prefix.`,
        [token]
      );

    let left: Expression = prefix.parse(this, token);

    while (precedence < this.getPrecedence()) {
      const token = this.consumeAnything();
      if (!token) {
        throw new ParseError(
          "prematureEndOfTokens",
          "Parser encountered end of tokens. This should not happen."
        );
      }
      const infix = this.infixParselets.get(token.type);
      if (!infix)
        throw new ParseError(
          "undefinedInfix",
          `\`${token.text}\` (${token.type}) is not an allowed infix.`,
          [token]
        );
      left = infix.parse(this, left, token);
    }

    this.options.onExpression?.(left);
    return left;
  }

  public match(expected: TokenType): Token | undefined {
    const token = this.lookAhead(0);
    if (token.type !== expected) {
      return undefined;
    }

    return this.consumeAnything();
  }

  public consume(expected: TokenType): Token {
    const token = this.lookAhead(0);
    if (token.type !== expected) {
      if (token.type === TokenType.EOF) {
        throw new SyntaxError(
          "Missing `" +
            punctuator(expected) +
            "` before the end of the formula. Is the formula complete?"
        );
      }

      throw new SyntaxError(
        "Expected token `" +
          TokenType[expected] +
          "` but found `" +
          TokenType[token.type] +
          "`"
      );
    }

    const consumedToken = this.consumeAnything();
    if (!consumedToken) {
      throw new SyntaxError("Could not consume token " + expected);
    }
    return token;
  }

  public consumeAnything(): Token | undefined {
    // Make sure we've read the token.
    this.lookAhead(0);

    return this.readTokens.shift();
  }

  private lookAhead(distance: number): Token {
    // Read in as many as needed.
    while (distance >= this.readTokens.length) {
      const nextToken = this.options.tokens.next();
      if (nextToken.value) this.options.onToken?.(nextToken.value);
      this.readTokens.push(nextToken.value);
    }

    // Get the queued token.
    return this.readTokens[distance];
  }

  private getPrecedence(): number {
    const parser = this.infixParselets.get(this.lookAhead(0).type);
    if (parser) return parser.getPrecedence();
    return 0;
  }
}
