import { LexerError } from '../../../types/Errors';
import { Token, TokenType } from '../pratt-parser-base/types';

export const xPathPrefixRegExp = /^\/(\/?[\w*]+(?:\[[^]+?]\B)?)/;

const tokenPatterns: [TokenType, RegExp][] = [
  [TokenType.STRING_LITERAL, /^'(\\\\|\\'|[^'])*'/],
  [TokenType.SLASH, /^div/],
  [TokenType.MODULO, /^mod/],
  [TokenType.BOOLEAN_AND, /^and/],
  [TokenType.BOOLEAN_OR, /^or/],
  [TokenType.FLOAT_LITERAL, /^-?\d+\.\d+/],
  [TokenType.INT_LITERAL, /^-?\d+/],
  [TokenType.NAME, /^\$?{[^}]+}/],
  [TokenType.NAME, /^[a-zA-Z_\w_][a-zA-Z_\w_-]*/],
  [TokenType.SELECTOR, xPathPrefixRegExp], // Match XPaths
  [TokenType.LEFT_PAREN, /^\(/],
  [TokenType.RIGHT_PAREN, /^\)/],
  [TokenType.COMMA, /^,/],
  [TokenType.PLUS, /^\+/],
  [TokenType.MINUS, /^-/],
  [TokenType.ASTERISK, /^\*/],
  [TokenType.COMPARISON, /^(>=|>|<=|<|=|!=)/],
  // [undefined, /^[\s\S]/],
];

export default class ODKFormulaLexer implements Iterator<Token> {
  index = 0;
  constructor(readonly text: string) {}
  next(): { value: Token } {
    if (this.index >= this.text.length) {
      // Once we've reached the end of the string, just return EOF tokens. We'll
      // just keeping returning them as many times as we're asked so that the
      // parser's lookahead doesn't have to worry about running out of tokens.
      return { value: { type: TokenType.EOF, text: '' } };
    }

    // Consume and ignore whitespace
    while (this.text[this.index] === ' ') {
      this.index += 1;
    }

    for (let i = 0; i < tokenPatterns.length; i += 1) {
      const tokenPattern = tokenPatterns[i];
      const [type, regex] = tokenPattern;
      const result = this.text.slice(this.index).match(regex);
      if (result === null) {
        continue;
      }
      const text = result[0];
      const token: Token = {
        type,
        text: this.text.substr(this.index, text.length),
      };
      this.index += text.length;
      // console.log('Found token', type, 'in', token.text);
      return { value: token };
    }
    throw new LexerError(
      `Don’t know how to interpret \`${this.text.slice(
        this.index,
        this.index + 10
      )}…\` (starting at character ${this.index} in \`${this.text}\`)`
    );
  }
}
