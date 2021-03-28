import { EvaluationError } from "../../types/Errors";
import { ODKNode } from "../../types/ODKNode";
import { ChoiceRow } from "../../types/RowTypes";
import evaluateExpression from "../odk-formulas/evaluation/evaluateExpression";
import ODKFormulaEvaluationContext, {
  knownLiteralsWithoutDollarSign,
} from "../odk-formulas/evaluation/ODKFormulaEvaluationContext";
import ODKFormulaLexer from "../odk-formulas/odk-formula-parser/ODKFormulaLexer";
import ODKFormulaParser from "../odk-formulas/odk-formula-parser/ODKFormulaParser";
import { Expression } from "../odk-formulas/pratt-parser-base";

/**
 * @returns dynamically filtered choices available for a given `select_one` or `select_multiple`
 * node.
 *
 * Choices from a choice list can be filtered using a formula to make only a subset of the available
 * choices visible to the user. For this, the `choice_filter` column can contain a formula.
 *
 * The survey component checks all available choices in a list against this formula, which has to
 * return a boolean indicating if the choice should be included or not.
 *
 * The formula functions has access to extra columns defined in the `choices` worksheet to allow
 * tagging choices with meta information. To access a value in such a cell, you can refer to its
 * column name like a variable, but without the wrapping `${...}` construct.
 */

export function evaluateFilteredChoiceNames(
  choiceFilterString: string,
  /** The condition formula specifying which choices to include in the list. */
  choiceFilterFormula: string,
  /** Applicable array of rows from the `choices` worksheet. */
  choiceObjects: Record<string, ChoiceRow>[],
  /** Node in which the choices are to be shown. */
  node: ODKNode,
  /** Context in which the formula should be evaluated. */
  context: ODKFormulaEvaluationContext
) {
  const lexer = new ODKFormulaLexer(choiceFilterString);
  const parser = new ODKFormulaParser({ tokens: lexer });
  const choiceFilterExpression: Expression = parser.parseExpression();
  const result = function filteredChoiceValues() {
    return choiceObjects
      .flatMap((choiceObject) => Object.values(choiceObject))
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
            context,
            node
          );
        }
        return evalResult;
      })
      .map((choiceRow) => choiceRow.name);
  };
  return result;
}
