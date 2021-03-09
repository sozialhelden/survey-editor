import * as React from "react";
import ODKFormulaEvaluationResult from "../xlsform-simple-schema/functions/odk-formulas/evaluation/ODKFormulaEvaluationResult";
import {
  EvaluatableColumnName,
  getEmptyNode,
  ODKNode,
} from "../xlsform-simple-schema/types/ODKNode";

export interface IODKNodeContext {
  node: ODKNode;
  nodeEvaluationResults?: Map<
    EvaluatableColumnName,
    ODKFormulaEvaluationResult
  >;
}

export const ODKNodeContext = React.createContext<IODKNodeContext>({
  node: getEmptyNode(new Set(["English (en)"])),
});
