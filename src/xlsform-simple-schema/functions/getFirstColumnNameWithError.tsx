import ODKFormulaEvaluationResult from "./odk-formulas/evaluation/ODKFormulaEvaluationResult";

/**
 * @returns name of the first found column with a formula parsing/evaluation error.
 */
export function getFirstColumnNameWithError(
  nodeEvaluationResults: Map<string, ODKFormulaEvaluationResult> | undefined
) {
  return (
    nodeEvaluationResults &&
    [...nodeEvaluationResults.keys()].find(
      (k) => nodeEvaluationResults?.get(k)?.error
    )
  );
}
