import { punctuator, Token, TokenType, tokenTypes } from "../index";

function isLetter(char: string) {
  return !!char.match(/^[a-zA-Z0-9]$/);
}

/**
 * A very primitive lexer. Takes a string and splits it into a series of
 * Tokens. Operators and punctuation are mapped to unique keywords. Names,
 * which can be any series of letters, are turned into NAME tokens. All other
 * characters are ignored (except to separate names). Numbers and strings are
 * not supported. This is really just the bare minimum to give the parser
 * something to work with.
 */
export default class BantamLexer implements Iterator<Token> {
  private mPunctuators = new Map<string, TokenType>();
  private mIndex = 0;
  private mText: string;

  /**
   * Creates a new Lexer to tokenize the given string.
   * @param text String to tokenize.
   */
  constructor(text: string) {
    this.mIndex = 0;
    this.mText = text;

    // Register all of the TokenTypes that are explicit punctuators.
    for (const type of tokenTypes) {
      const p = punctuator(type);
      if (typeof p !== "undefined") {
        this.mPunctuators.set(p, type);
      }
    }
  }

  next(): { value: Token } {
    while (this.mIndex < this.mText.length) {
      const c = this.mText.charAt(this.mIndex++);

      if (this.mPunctuators.has(c)) {
        // Handle punctuation.
        const type = this.mPunctuators.get(c);
        if (typeof type === "undefined") {
          throw new Error(`Didnt find type ${type} in punctuators. Stopping.`);
        }
        return { value: { type, text: c, index: this.mIndex } };
      } else if (isLetter(c)) {
        // Handle names.
        const start = this.mIndex - 1;
        while (this.mIndex < this.mText.length) {
          if (!isLetter(this.mText.charAt(this.mIndex))) break;
          this.mIndex++;
        }
        return {
          value: {
            type: TokenType.NAME,
            text: this.mText.substring(start, this.mIndex),
            index: this.mIndex,
          },
        };
      } else {
        // Ignore all other characters (whitespace, etc.)
      }
    }

    // Once we've reached the end of the string, just return EOF tokens. We'll
    // just keeping returning them as many times as we're asked so that the
    // parser's lookahead doesn't have to worry about running out of tokens.
    return { value: { type: TokenType.EOF, text: "", index: this.mIndex } };
  }
  public remove(): void {
    throw new Error("Unsupported operation");
  }
}
