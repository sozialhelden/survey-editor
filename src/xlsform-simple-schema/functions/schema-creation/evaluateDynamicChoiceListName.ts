import { EvaluationError } from "../../types/Errors";
import { ChoiceRow } from "../../types/RowTypes";
import evaluateODKFormula from "../odk-formulas/evaluation/evaluateODKFormula";
import { NodeToDefinitionFunctionOptions } from "./createLeafNodeSchemaDefinition";

/**
 * Determine the name of a referenced choice list dynamically at runtime, allowing to calculate the
 * name of the choice list by using a formula.
 */
export function evaluateDynamicChoiceListName(
  /** Choice list name, or a formula that evaluates to a choice list name */
  choiceListString: string,
  /** Context information needed for evaluating a formula, if applicable */
  options: NodeToDefinitionFunctionOptions,
  /** Map of available choice lists */
  choiceListsByName: Record<string, Record<string, ChoiceRow>>
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
      options.context,
      options.node
    );
  }
  if (typeof evaluationResult.result !== "string") {
    throw new EvaluationError(
      `Evaluating \`${choiceListString}\` did not yield a \`string\`. Please ensure the referenced field returns a string.`,
      "invalidDynamicChoices",
      evaluationResult.expression,
      options.context,
      options.node
    );
  }
  const choiceListName = evaluationResult.result;
  if (!choiceListsByName[choiceListName]) {
    throw new EvaluationError(
      `Evaluating \`${choiceListString}\` yielded string \`'${choiceListName}'\`, but the according choices list does not exist. Please ensure that the field calculates an existing list name.`,
      "invalidDynamicChoices",
      evaluationResult.expression,
      options.context,
      options.node
    );
  }
  return choiceListName;
}
