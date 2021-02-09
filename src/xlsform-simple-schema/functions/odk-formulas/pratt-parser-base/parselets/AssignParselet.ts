import AssignExpression from '../expressions/AssignExpression';
import NameExpression from '../expressions/NameExpression';
import ParseError from '../ParseError';
import Parser from '../Parser';
import { Expression, Token } from '../types';
import InfixParselet from './InfixParselet';

/**
 * Parses assignment expressions like "a = b". The left side of an assignment
 * expression must be a simple name like "a", and expressions are
 * right-associative. (In other words, "a = b = c" is parsed as "a = (b = c)").
 */
export default class AssignParselet extends InfixParselet {
  constructor(readonly precedence: number) {
    super();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  parse(parser: Parser, left: Expression, _token: Token): Expression {
    const right = parser.parseExpression(this.precedence - 1);

    if (!(left instanceof NameExpression))
      throw new ParseError('The left-hand side of an assignment must be a name.');

    const name = left.name;
    return new AssignExpression(name, right);
  }

  getPrecedence(): number {
    return this.precedence;
  }
}
