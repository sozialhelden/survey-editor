import Parser from '../Parser';
import { Expression, Token } from '../types';

/**
 * One of the two interfaces used by the Pratt parser. A PrefixParselet is
 * associated with a token that appears at the beginning of an expression. Its
 * parse() method will be called with the consumed leading token, and the
 * parselet is responsible for parsing anything that comes after that token.
 * This interface is also used for single-token expressions like variables, in
 * which case parse() simply doesn't consume any more tokens.
 * @author rnystrom
 *
 */
export default abstract class PrefixParselet {
  abstract parse(parser: Parser, token: Token): Expression;
}
