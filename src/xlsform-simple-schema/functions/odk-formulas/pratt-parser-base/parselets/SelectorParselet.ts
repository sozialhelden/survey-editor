import SelectorExpression from '../expressions/SelectorExpression';
import Parser from '../Parser';
import { Expression, Token } from '../types';
import PrefixParselet from './PrefixParselet';

/**
 * Simple parselet for a selector variable like "x > y > z" or "a/b/c[d='123']".
 */
export default class SelectorParselet<T> extends PrefixParselet {
  constructor(readonly getSelector: (text: string) => T) {
    super();
  }
  public parse(_parser: Parser, token: Token): Expression {
    const selector = this.getSelector(token.text);
    return new SelectorExpression(token.text, selector);
  }
}
