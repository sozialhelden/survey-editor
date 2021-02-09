import Lexer from './ODKFormulaLexer';
import {
  default as PrattParser,
  TokenType,
  // AssignParselet,
  BinaryOperatorParselet,
  CallParselet,
  ConditionalParselet,
  GroupParselet,
  NameParselet,
  PostfixOperatorParselet,
  PrefixOperatorParselet,
} from '../pratt-parser-base/index';
import Precedence from './ODKFormulaPrecedence';
import LiteralParselet from '../pratt-parser-base/parselets/LiteralParselet';
import SelectorParselet from '../pratt-parser-base/parselets/SelectorParselet';

/**
 * Extends the generic Parser class with support for parsing the actual ODK formula grammar.
 * grammar.
 *
 * Example based on a blog post by Bob Nystrom:
 *
 * http://journal.stuffwithstuff.com/2011/03/19/pratt-parsers-expression-parsing-made-easy/
 */
export default class ODKFormulaParser extends PrattParser {
  constructor(lexer: Lexer) {
    super(lexer);

    // Register all of the parselets for the grammar.

    // Register the ones that need special parselets.
    this.register(
      TokenType.NAME,
      new NameParselet((name) => (name.startsWith('$') ? name.slice(2, name.length - 1) : name))
    );
    this.register(TokenType.SELECTOR, new SelectorParselet((text) => text.split('/')));
    this.register(
      TokenType.FLOAT_LITERAL,
      new LiteralParselet(
        (t) => parseFloat(t.text),
        () => 'float'
      )
    );
    this.register(
      TokenType.INT_LITERAL,
      new LiteralParselet(
        (t) => parseInt(t.text, 10),
        () => 'int'
      )
    );
    this.register(
      TokenType.STRING_LITERAL,
      new LiteralParselet(
        (t) => t.text.slice(1, t.text.length - 1),
        () => 'string'
      )
    );
    this.register(TokenType.QUESTION, new ConditionalParselet(Precedence.CONDITIONAL));
    this.register(TokenType.LEFT_PAREN, new GroupParselet(TokenType.RIGHT_PAREN));
    this.register(
      TokenType.LEFT_PAREN,
      new CallParselet(TokenType.RIGHT_PAREN, TokenType.COMMA, Precedence.CALL)
    );

    this.infixRight(TokenType.COMPARISON, Precedence.CONDITIONAL);

    this.infixLeft(TokenType.BOOLEAN_AND, Precedence.BOOLEAN_OP);
    this.infixLeft(TokenType.BOOLEAN_OR, Precedence.BOOLEAN_OP);
    this.infixLeft(TokenType.PLUS, Precedence.SUM);
    this.infixLeft(TokenType.MINUS, Precedence.SUM);
    this.infixLeft(TokenType.ASTERISK, Precedence.PRODUCT);
    this.infixLeft(TokenType.SLASH, Precedence.PRODUCT);
    this.infixLeft(TokenType.MODULO, Precedence.EXPONENT);
  }

  /**
   * Registers a postfix unary operator parselet for the given token and
   * precedence.
   */
  public postfix(token: TokenType, precedence: number): void {
    this.register(token, new PostfixOperatorParselet(precedence));
  }

  /**
   * Registers a prefix unary operator parselet for the given token and
   * precedence.
   */
  public prefix(token: TokenType, precedence: number): void {
    this.register(token, new PrefixOperatorParselet(precedence));
  }

  /**
   * Registers a left-associative binary operator parselet for the given token
   * and precedence.
   */
  public infixLeft(token: TokenType, precedence: number): void {
    this.register(token, new BinaryOperatorParselet(precedence, false));
  }

  /**
   * Registers a right-associative binary operator parselet for the given token
   * and precedence.
   */
  public infixRight(token: TokenType, precedence: number): void {
    this.register(token, new BinaryOperatorParselet(precedence, true));
  }
}
