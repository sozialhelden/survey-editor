import * as React from "react";
import ODKFormulaEvaluationResult from "../xlsform-simple-schema/functions/odk-formulas/evaluation/ODKFormulaEvaluationResult";
import { getEmptyNode } from "../xlsform-simple-schema/types/getEmptyNode";
import {
  EvaluatableColumnName,
  ODKNode,
} from "../xlsform-simple-schema/types/ODKNode";

/** Provides the current XLSForm node (= survey field or group/repeat), and its evaluation results. */
export interface IODKNodeContext {
  node: ODKNode;
  nodeEvaluationResults?: Map<
    EvaluatableColumnName,
    ODKFormulaEvaluationResult
  >;
}

/** Provides the current XLSForm node (= survey field or group/repeat), and its evaluation results. */
export const ODKNodeContext = React.createContext<IODKNodeContext>({
  node: getEmptyNode(new Set(["English (en)"])),
});
