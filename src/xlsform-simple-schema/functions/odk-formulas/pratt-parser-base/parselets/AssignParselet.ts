import { ParseError } from "../../../../types/Errors";
import AssignExpression from "../expressions/AssignExpression";
import NameExpression from "../expressions/NameExpression";
import Parser from "../Parser";
import { Expression, Token } from "../types";
import InfixParselet from "./InfixParselet";

/**
 * Parses assignment expressions like "a = b". The left side of an assignment
 * expression must be a simple name like "a", and expressions are
 * right-associative. (In other words, "a = b = c" is parsed as "a = (b = c)").
 */
export default class AssignParselet extends InfixParselet {
  constructor(readonly precedence: number) {
    super();
  }

  parse(parser: Parser, left: Expression, operatorToken: Token): Expression {
    const right = parser.parseExpression(this.precedence - 1);

    if (!(left instanceof NameExpression))
      throw new ParseError(
        "leftHandOfAssignmentNotAName",
        "The left-hand side of an assignment must be a name.",
        left.tokens
      );

    return new AssignExpression(
      [...left.tokens, operatorToken, ...right.tokens],
      left,
      operatorToken,
      right
    );
  }

  getPrecedence(): number {
    return this.precedence;
  }
}
