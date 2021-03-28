import { ODKNode } from "../../types/ODKNode";
import evaluateODKFormula from "../odk-formulas/evaluation/evaluateODKFormula";
import ODKFormulaEvaluationContext from "../odk-formulas/evaluation/ODKFormulaEvaluationContext";

/**
 * @returns a function that returns `true` if a given node is relevant in a context, or `false` if
 * it’s not.
 */

export function getNodeOptionalFunction(
  node: ODKNode,
  context: ODKFormulaEvaluationContext
) {
  return function isNodeIrrelevantOrNotRequired() {
    const isRelevant =
      node.row.relevant === undefined ||
      node.row.relevant === "" ||
      evaluateODKFormula(node.row.relevant, context, node);
    if (!isRelevant) {
      return true;
    }
    const isRequired =
      node.row.required === undefined ||
      node.row.required === "" ||
      evaluateODKFormula(node.row.required, context, node);
    return !isRequired;
  };
}
