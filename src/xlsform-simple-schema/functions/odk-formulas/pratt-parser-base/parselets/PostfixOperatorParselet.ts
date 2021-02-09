import PostfixExpression from '../expressions/PostfixExpression';
import Parser from '../Parser';
import { Expression, Token } from '../types';
import InfixParselet from './InfixParselet';

/**
 * Generic infix parselet for an unary arithmetic operator. Parses postfix
 * unary "?" expressions.
 */
export default class PostfixOperatorParselet extends InfixParselet {
  constructor(readonly precedence: number) {
    super();
  }

  public parse(_parser: Parser, left: Expression, token: Token): Expression {
    return new PostfixExpression(left, token.type);
  }

  public getPrecedence(): number {
    return this.precedence;
  }
}
