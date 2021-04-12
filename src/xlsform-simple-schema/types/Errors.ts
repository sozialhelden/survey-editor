import ODKFormulaEvaluationContext from "../functions/odk-formulas/evaluation/ODKFormulaEvaluationContext";
import { getScopedAncestors } from "../functions/odk-formulas/evaluation/XPath";
import { Expression, Token } from "../functions/odk-formulas/pratt-parser-base";
import { ODKNode } from "./ODKNode";

/**
 * Abstract base class for any errors in ODK formulas.
 */
export abstract class ODKFormulaError extends Error {
  isODKFormulaError: true = true;
  token?: Token;
  toMarkdown(): string {
    return this.message;
  }
}

/**
 * An error that happened while evaluating an ODK formula AST. Can wrap an underlying `Error`
 * that caused the evaluation to fail.
 */

export class EvaluationError extends ODKFormulaError {
  nodeStack: readonly Readonly<ODKNode>[];

  constructor(
    message: string,
    readonly type: string,
    readonly expression: Expression | undefined,
    readonly context: ODKFormulaEvaluationContext,
    readonly scope: ODKNode,
    readonly underlyingEvaluationError: EvaluationError | undefined = undefined
  ) {
    super(message);

    const ancestors = getScopedAncestors(scope, context.survey);

    this.nodeStack = [...(ancestors || []), scope];
  }

  toMarkdown(): string {
    return this.message;
  }
}

/**
 * An error that happened while trying to parse an ODK formula string to turn it into an AST.
 */

export class ParseError extends ODKFormulaError {
  constructor(
    readonly type: string,
    message: string,
    readonly tokens?: Token[]
  ) {
    super(message);
  }

  toMarkdown(): string {
    return this.message;
  }
}

/**
 * An error that happened while trying to tokenize an ODK formula string to turn it into a token
 * list.
 */

export class LexerError extends ODKFormulaError {
  constructor(readonly token: Token, readonly message: string) {
    super(message);
  }
}

/**
 * Describes a syntax error in a XLSForm workbook.
 */
export class SyntaxError extends ODKFormulaError {}

/** Describes an error with the semantics of a XLSForm workbook or a formula. */
export class SemanticError extends ODKFormulaError {}

/** Thrown if an ODK formula function is not implemented yet. */
export class FunctionNotImplementedError extends ODKFormulaError {
  constructor(functionName: string) {
    super(
      `The \`${functionName}\` function is not supported yet. If you need it, please contact the developers.`
    );
  }
}

/** Thrown if a feature is not implemented yet. */
export class UnsupportedFeatureError extends ODKFormulaError {
  constructor(feature: string) {
    super(`${feature} is not supported.`);
  }
}
