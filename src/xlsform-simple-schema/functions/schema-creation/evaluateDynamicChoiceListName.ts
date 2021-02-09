import { EvaluationError } from "../../types/Errors";
import { ChoiceRow } from "../../types/RowTypes";
import evaluateODKFormula from "../odk-formulas/evaluation/evaluateODKFormula";
import { NodeToDefinitionFunctionOptions } from "./createLeafNodeSchemaDefinition";

export function evaluateDynamicChoiceListName(
  choiceListString: string,
  options: NodeToDefinitionFunctionOptions,
  choiceListName: string,
  choicesByName: Record<string, Record<string, ChoiceRow>>
) {
  const evaluationResult = evaluateODKFormula(
    choiceListString,
    options.context,
    options.node
  );
  if (evaluationResult.state === "error") {
    throw new EvaluationError(
      `Error evaluating \`${choiceListString}\` to determine available selection choices.`,
      "invalidDynamicChoices",
      evaluationResult.expression,
      options.node
    );
  }
  if (typeof evaluationResult.result !== "string") {
    throw new EvaluationError(
      `Evaluating \`${choiceListString}\` did not yield a \`string\`. Please ensure the referenced field returns a string.`,
      "invalidDynamicChoices",
      evaluationResult.expression,
      options.node
    );
  }
  choiceListName = evaluationResult.result;
  if (!choicesByName[choiceListName]) {
    throw new EvaluationError(
      `Evaluating \`${choiceListString}\` yielded string \`'${choiceListName}'\`, but the according choices list does not exist. Please ensure that the field calculates an existing list name.`,
      "invalidDynamicChoices",
      evaluationResult.expression,
      options.node
    );
  }
  return choiceListName;
}
