import ODKFormulaEvaluationResult from "../xlsform-simple-schema/functions/odk-formulas/evaluation/ODKFormulaEvaluationResult";

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
