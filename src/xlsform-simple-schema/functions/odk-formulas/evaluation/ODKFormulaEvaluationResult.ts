import { ODKFormulaError } from '../../../types/Errors';
import { Expression } from '../pratt-parser-base';

/**
 * Contains information about the result of a single evaluation process.
 */
type ODKFormulaEvaluationResult =
  | {
      state: 'success';
      expression: Expression;
      result: unknown;
      error: undefined;
    }
  | {
      state: 'error';
      expression?: Expression;
      result: null;
      error: ODKFormulaError;
    };

export default ODKFormulaEvaluationResult;
