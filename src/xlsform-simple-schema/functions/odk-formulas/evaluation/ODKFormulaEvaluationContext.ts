import { NodesToValues, ODKNode } from "../../../types/ODKNode";
import { NameExpression } from "../pratt-parser-base";
import ODKFormulaEvaluationResult from "./ODKFormulaEvaluationResult";

/**
 * Contains global information that can be used in a single formula evaluation. The evaluation
 * process needs this to find values of other nodes, for example, when a formulas uses a relative
 * XPath selector to refer to a NodeSet.
 */

type ODKFormulaEvaluationContext = {
  /** The survey in which the evaluation takes place */
  survey: ODKNode;
  nodesToAnswers: NodesToValues;
  evaluationResults: NodesToValues<Map<string, ODKFormulaEvaluationResult>>;
  /** The current stack depth. Used to to prevent stack overflows in recursive calculations. */
  stackDepth: number;
  knownLiteralsWithoutDollarSign: Record<string, unknown>;
  evaluateNonDollarNameFn?: (options: {
    expression: NameExpression;
    context: ODKFormulaEvaluationContext;
    scope: ODKNode;
  }) => unknown;
};

export default ODKFormulaEvaluationContext;

/** These are literals that appeared (and apparently were supported) in our Kobo forms, and are documented in XLSForms. */
export const knownLiteralsWithoutDollarSign: Record<string, unknown> = {
  yes: true,
  no: false,
  TRUE: true,
  FALSE: false,
  true: true,
  false: false,
};

export const getEmptyContext: (
  survey?: ODKNode
) => ODKFormulaEvaluationContext = (survey?: ODKNode) => ({
  survey: survey || {
    type: "",
    typeParameters: [],
    row: {
      type: "",
      name: "data",
      label: { "English (en)": "[empty survey]" },
    },
    children: [],
    indentationLevel: 0,
    rowIndex: -1,
  },
  nodesToAnswers: new Map(),
  evaluationResults: new Map(),
  stackDepth: 0,
  knownLiteralsWithoutDollarSign,
});
