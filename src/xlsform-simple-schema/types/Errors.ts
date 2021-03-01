import ODKFormulaEvaluationContext from "../functions/odk-formulas/evaluation/ODKFormulaEvaluationContext";
import { Expression, Token } from "../functions/odk-formulas/pratt-parser-base";
import { ODKNode } from "./ODKNode";

export abstract class ODKFormulaError extends Error {
  token?: Token;
  toMarkdown(): string {
    return this.message;
  }
}

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
    this.nodeStack = [...(context.nodesToAncestors.get(scope) || []), scope];
  }

  toMarkdown(): string {
    return this.message;
  }
}

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

export class LexerError extends ODKFormulaError {
  constructor(readonly token: Token, readonly message: string) {
    super(message);
  }
}

export class SyntaxError extends ODKFormulaError {}

export class SemanticError extends ODKFormulaError {}

export class FunctionNotImplementedError extends ODKFormulaError {
  constructor(functionName: string) {
    super(
      `The \`${functionName}\` function is not supported yet. If you need it, please contact the developers.`
    );
  }
}

export class UnsupportedFeatureError extends ODKFormulaError {
  constructor(feature: string) {
    super(`${feature} is not supported.`);
  }
}
