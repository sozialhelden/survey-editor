import { EvaluationError } from "../../types/Errors";
import { ODKNode } from "../../types/ODKNode";
import { ChoiceRow } from "../../types/RowTypes";
import evaluateExpression from "../odk-formulas/evaluation/evaluateExpression";
import ODKFormulaEvaluationContext, {
  knownLiteralsWithoutDollarSign,
} from "../odk-formulas/evaluation/ODKFormulaEvaluationContext";
import { parseODKFormula } from "../odk-formulas/evaluation/parseODKFormula";
import { Expression } from "../odk-formulas/pratt-parser-base";

export function evaluateFilteredChoiceNames(
  choiceFilterString: string,
  choiceObject: Record<string, ChoiceRow>,
  node: ODKNode,
  context: ODKFormulaEvaluationContext
) {
  const choiceFilterExpression: Expression = parseODKFormula(
    choiceFilterString
  );
  const result = function filteredChoiceValues() {
    return Object.values(choiceObject)
      .filter((choiceRow) => {
        const evalResult = evaluateExpression(
          choiceFilterExpression,
          {
            ...context,
            evaluateNonDollarNameFn: (options) =>
              choiceRow[options.expression.name] ||
              knownLiteralsWithoutDollarSign[options.expression.name],
          },
          node
        );
        if (typeof evalResult !== "boolean") {
          throw new EvaluationError(
            `\`choice_filter\` formula did not evaluate to a \`boolean\`. Please ensure the formula returns a \`boolean\`.`,
            "invalidDynamicChoices",
            choiceFilterExpression,
            node
          );
        }
        return evalResult;
      })
      .map((choiceRow) => choiceRow.name);
  };
  return result;
}
