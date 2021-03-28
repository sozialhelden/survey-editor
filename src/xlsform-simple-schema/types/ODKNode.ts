import { createLabelInAllLanguages } from "../../lib/createLabelInAllLanguages";
import ODKFormulaEvaluationContext from "../functions/odk-formulas/evaluation/ODKFormulaEvaluationContext";
import {
  IBeginGroupMarkerRow,
  IBeginRepeatMarkerRow,
} from "./BeginOrEndMarkerRow";
import { QuestionRow } from "./RowTypes";

export type ODKNodeAnswer = {};

/**
 * Represents a 'raw' survey variable, input, field group or repeat group, before its content is
 * semantically inspected. An `ODKNode` can have an array of `ODKNode` objects in its `children`
 * property if it is a field group or repeat group.
 */
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

/**
 * Represents a 'raw' survey variable, input, field group or repeat group, after its content is
 * semantically inspected and added. An `ODKNode` can have an array of `ODKNode` objects in its
 * `children` property if it is a field group or repeat group.
 */
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

/** Maps `ODKNode` references to values, for example, answers, or formula evaluation results. */
export type NodesToValues<T = unknown> = Readonly<Map<Readonly<ODKNode>, T>>;

/** A name of a column in the `survey` worksheet that can contain formulas. */
export type EvaluatableColumnName =
  | "relevant"
  | "calculation"
  | "required"
  | "readonly"
  | "constraint";

/** Names of columns in the `survey` worksheet that can contain formulas. */
export const evaluatableColumnNames: EvaluatableColumnName[] = [
  "calculation",
  "required",
  "relevant",
  "readonly",
  "constraint",
];

/**
 * Evaluates a node's `relevant` formula condition. If there is no formula in the node’s `relevant`
 * cell, the function returns `true` and the node is visible in the survey.
 */
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

/**
 * Evaluates a node's `readonly` formula condition amd returns the result. If there is no formula in
 * the node’s `readonly` cell, the function returns `false` and the node is not read-only in the
 * survey.
 */
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

/**
 * @returns `true` if the given node’s type is `begin_group` or `begin_repeat`, `false` otherwise.
 */
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
