import ODKFormulaEvaluationContext from "../functions/odk-formulas/evaluation/ODKFormulaEvaluationContext";
import {
  IBeginGroupMarkerRow,
  IBeginRepeatMarkerRow,
} from "./BeginOrEndMarkerRow";
import { QuestionRow } from "./RowTypes";

export type ODKNodeAnswer = {};

export type ODKNodeWithoutRuntimeInfo =
  | {
      row?: QuestionRow & (IBeginRepeatMarkerRow | IBeginGroupMarkerRow);
      children: ODKNodeWithoutRuntimeInfo[];
      indentationLevel: number;
      rowIndex: number;
    }
  | {
      row: QuestionRow;
      children: ODKNodeWithoutRuntimeInfo[];
      indentationLevel: number;
      rowIndex: number;
    };

export type ODKNode =
  | {
      row: QuestionRow & (IBeginRepeatMarkerRow | IBeginGroupMarkerRow);
      type: string;
      typeParameters: string[];
      children: ODKNode[];
      indentationLevel: number;
      rowIndex: number;
    }
  | {
      row: QuestionRow;
      type: string;
      typeParameters: string[];
      children: ODKNode[];
      indentationLevel: number;
      rowIndex: number;
    };

export type NodesToValues<T = unknown> = Readonly<Map<Readonly<ODKNode>, T>>;

export type EvaluatableColumnName =
  | "relevant"
  | "calculation"
  | "required"
  | "readonly";
export const evaluatableColumnNames: EvaluatableColumnName[] = [
  "calculation",
  "required",
  "relevant",
  "readonly",
];

export function isNodeRelevant(
  node: ODKNode,
  context?: ODKFormulaEvaluationContext
) {
  if (!context) {
    return false;
  }
  const isRelevantEvaluationResult = context.evaluationResults
    .get(node)
    ?.get("relevant")?.result;
  return isRelevantEvaluationResult === undefined || isRelevantEvaluationResult;
}

export function isNodeReadonly(
  node: ODKNode,
  context?: ODKFormulaEvaluationContext
) {
  if (!context) {
    return false;
  }
  const isReadonlyEvaluationResult = context.evaluationResults
    .get(node)
    ?.get("readonly")?.result;
  return isReadonlyEvaluationResult === undefined || isReadonlyEvaluationResult;
}
