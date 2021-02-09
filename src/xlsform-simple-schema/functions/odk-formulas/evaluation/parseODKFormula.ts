import ODKFormulaLexer from '../odk-formula-parser/ODKFormulaLexer';
import ODKFormulaParser from '../odk-formula-parser/ODKFormulaParser';
import { Expression } from '../pratt-parser-base';

/**
 * Parses a formula string, and returns the resulting abstract syntax tree (AST) as Expression.
 * If the lexing or parsing fails, the function throws with a subclass of ODKFormulaError.
 *
 * You can use these errors to get metadata about what happened.
 *
 * @param input the formula, as string.
 */
export function parseODKFormula(input: string): Expression {
  const lexer = new ODKFormulaLexer(input);
  const parser = new ODKFormulaParser(lexer);

  return parser.parseExpression();
}
