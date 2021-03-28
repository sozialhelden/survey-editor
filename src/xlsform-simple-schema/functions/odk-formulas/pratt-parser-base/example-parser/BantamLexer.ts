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
  private punctuators = new Map<string, TokenType>();
  private index = 0;
  private text: string;

  /**
   * Creates a new Lexer to tokenize the given string.
   * @param text String to tokenize.
   */
  constructor(text: string) {
    this.index = 0;
    this.text = text;

    // Register all of the TokenTypes that are explicit punctuators.
    for (const type of tokenTypes) {
      const p = punctuator(type);
      if (typeof p !== "undefined") {
        this.punctuators.set(p, type);
      }
    }
  }

  next(): { value: Token } {
    while (this.index < this.text.length) {
      const c = this.text.charAt(this.index++);

      if (this.punctuators.has(c)) {
        // Handle punctuation.
        const type = this.punctuators.get(c);
        if (typeof type === "undefined") {
          throw new Error(`Didnt find type ${type} in punctuators. Stopping.`);
        }
        return { value: { type, text: c, index: this.index } };
      } else if (isLetter(c)) {
        // Handle names.
        const start = this.index - 1;
        while (this.index < this.text.length) {
          if (!isLetter(this.text.charAt(this.index))) break;
          this.index++;
        }
        return {
          value: {
            type: TokenType.NAME,
            text: this.text.substring(start, this.index),
            index: this.index,
          },
        };
      } else {
        // Ignore all other characters (whitespace, etc.)
      }
    }

    // Once we've reached the end of the string, just return EOF tokens. We'll
    // just keeping returning them as many times as we're asked so that the
    // parser's lookahead doesn't have to worry about running out of tokens.
    return { value: { type: TokenType.EOF, text: "", index: this.index } };
  }
  public remove(): void {
    throw new Error("Unsupported operation");
  }
}
