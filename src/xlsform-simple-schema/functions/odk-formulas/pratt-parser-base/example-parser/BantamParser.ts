import BantamLexer from "./BantamLexer";
import {
  AssignParselet,
  BinaryOperatorParselet,
  CallParselet,
  ConditionalParselet,
  GroupParselet,
  NameParselet,
  PostfixOperatorParselet,
  PrefixOperatorParselet,
} from "..";
import Parser, { TokenType } from "../index";
import BantamPrecedence from "./BantamPrecedence";

/**
 * Extends the generic Parser class with support for parsing the actual Bantam
 * grammar.
 *
 * Example based on a blog post by Bob Nystrom:
 *
 * http://journal.stuffwithstuff.com/2011/03/19/pratt-parsers-expression-parsing-made-easy/
 */
export class BantamParser extends Parser {
  constructor(lexer: BantamLexer) {
    super({ tokens: lexer });

    // Register all of the parselets for the grammar.

    // Register the ones that need special parselets.
    this.register(TokenType.NAME, new NameParselet());
    this.register(
      TokenType.ASSIGN,
      new AssignParselet(BantamPrecedence.ASSIGNMENT)
    );
    this.register(
      TokenType.QUESTION,
      new ConditionalParselet(BantamPrecedence.CONDITIONAL)
    );
    this.register(
      TokenType.LEFT_PAREN,
      new GroupParselet(TokenType.RIGHT_PAREN)
    );
    this.register(
      TokenType.LEFT_PAREN,
      new CallParselet(
        TokenType.RIGHT_PAREN,
        TokenType.COMMA,
        BantamPrecedence.CALL
      )
    );

    // Register the simple operator parselets.
    this.prefix(TokenType.PLUS, BantamPrecedence.PREFIX);
    this.prefix(TokenType.MINUS, BantamPrecedence.PREFIX);
    this.prefix(TokenType.TILDE, BantamPrecedence.PREFIX);
    this.prefix(TokenType.BANG, BantamPrecedence.PREFIX);

    // For kicks, we'll make "!" both prefix and postfix, kind of like ++.
    this.postfix(TokenType.BANG, BantamPrecedence.POSTFIX);

    this.infixLeft(TokenType.PLUS, BantamPrecedence.SUM);
    this.infixLeft(TokenType.MINUS, BantamPrecedence.SUM);
    this.infixLeft(TokenType.ASTERISK, BantamPrecedence.PRODUCT);
    this.infixLeft(TokenType.SLASH, BantamPrecedence.PRODUCT);
    this.infixRight(TokenType.CARET, BantamPrecedence.EXPONENT);
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
