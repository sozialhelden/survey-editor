import { ODKFormulaError } from "../../../types/Errors";
import ODKFormulaParser from "../odk-formula-parser/ODKFormulaParser";
import { Expression } from "../pratt-parser-base";

/**
 * Contains information about the result of a single formula's evaluation.
 */
type ODKFormulaEvaluationResult =
  | {
      state: "success";
      expression: Expression;
      result: unknown;
      error: undefined;
      parser?: ODKFormulaParser;
    }
  | {
      state: "error";
      expression?: Expression;
      result: null;
      error: ODKFormulaError;
      parser?: ODKFormulaParser;
    };

export default ODKFormulaEvaluationResult;
