import { Classes, Text } from "@blueprintjs/core";
import * as React from "react";
import ODKFormulaEvaluationResult from "../../xlsform-simple-schema/functions/odk-formulas/evaluation/ODKFormulaEvaluationResult";
import { EvaluatableColumnName } from "../../xlsform-simple-schema/types/ODKNode";

/**
 * Displays an explanation of a formula result — what effect will it have for end users?
 */
export function FormulaResultMeaning({
  results,
  columnName,
  formulaIsTrivial,
}: {
  results: ODKFormulaEvaluationResult;
  columnName: EvaluatableColumnName;
  formulaIsTrivial: boolean;
}) {
  return (
    <Text className={Classes.TEXT_MUTED}>
      {
        {
          calculation: !formulaIsTrivial && (
            <>This is the result of the formula.</>
          ),
          required: `This means you ${
            results?.result ? "can’t" : "can"
          } complete the survey without entering data in this field.`,
          relevant: `This means the survey field is ${
            results?.result ? "shown" : "hidden"
          }.`,
          readonly: `This means the survey field is ${
            results?.result ? "read-only" : "editable"
          }.`,
          constraint: `This means the survey field contains an input that is ${
            results?.result ? "allowed" : "not allowed"
          } by the constraint formula..`,
        }[columnName]
      }
    </Text>
  );
}
