import { Expression } from '../functions/odk-formulas/pratt-parser-base';
import { ODKNode } from './ODKNode';

export abstract class ODKFormulaError extends Error {
  toMarkdown(): string {
    return this.message;
  }
}

export class EvaluationError extends ODKFormulaError {
  constructor(
    message: string,
    readonly type: string,
    readonly expression: Expression | undefined,
    readonly scope: ODKNode,
    readonly underlyingEvaluationError: EvaluationError | undefined = undefined
  ) {
    super(message);
  }

  toMarkdown(): string {
    return `${this.message} — Stack: ${this.scope.stack.map((line) => `- \`${line}\``)}
    `;
  }
}

export class ParseError extends ODKFormulaError {
  constructor(readonly type: string, message: string, readonly evaluationStack: string[]) {
    super(message);
  }

  toMarkdown(): string {
    return `${this.message} — Stack: ${this.evaluationStack.map((line) => `- \`${line}\``)}
    `;
  }
}

export class LexerError extends ODKFormulaError {}

export class SyntaxError extends ODKFormulaError {}

export class SemanticError extends ODKFormulaError {}

export class FunctionNotImplementedError extends ODKFormulaError {
  constructor(functionName: string) {
    super(
      `The ‘${functionName}’ function is not supported yet. If you need it, please contact the developers.`
    );
  }
}

export class UnsupportedFeatureError extends ODKFormulaError {
  constructor(feature: string) {
    super(`${feature} is not supported.`);
  }
}
