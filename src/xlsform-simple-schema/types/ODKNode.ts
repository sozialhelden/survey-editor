import { createLabelInAllLanguages } from "../../lib/createLabelInAllLanguages";
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

let i = 0;
export function getEmptyNode(
  languages: Readonly<Set<string>>
): Readonly<ODKNode> {
  i += 1;
  return Object.freeze({
    row: {
      type: "text",
      name: `empty_node_${i}`,
      label: createLabelInAllLanguages(`Empty node ${i}`, languages),
    },
    type: "text",
    typeParameters: [],
    children: [],
    indentationLevel: 0,
    rowIndex: -2,
  });
}

export type NodesToValues<T = unknown> = Readonly<Map<Readonly<ODKNode>, T>>;

export type EvaluatableColumnName =
  | "relevant"
  | "calculation"
  | "required"
  | "readonly"
  | "constraint";
export const evaluatableColumnNames: EvaluatableColumnName[] = [
  "calculation",
  "required",
  "relevant",
  "readonly",
  "constraint",
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

export function isGroupNode(node: ODKNode) {
  return node.type === "begin_group" || node.type === "begin_repeat";
}

export function isGroupRow(row: QuestionRow) {
  return (
    row.type === "begin_group" ||
    row.type === "begin_repeat" ||
    row.type === "end_group" ||
    row.type === "end_repeat"
  );
}
