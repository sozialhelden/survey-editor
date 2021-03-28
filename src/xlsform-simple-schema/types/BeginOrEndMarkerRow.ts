import { QuestionRow } from "./RowTypes";

/** A row in the `survey` worksheet that marks the beginning of a repeated group of fields. */
export interface IBeginRepeatMarkerRow {
  type: "begin_repeat";
}

/** A row in the `survey` worksheet that marks the end of a repeated group of fields. */
export interface IEndRepeatMarkerRow {
  type: "end_repeat";
}

/** A row in the `survey` worksheet that marks the beginning of a nested group of fields. */
export interface IBeginGroupMarkerRow {
  type: "begin_group";
}

/** A row in the `survey` worksheet that marks the end of a nested group of fields. */
export interface IEndGroupMarkerRow {
  type: "end_group";
}

/**
 * A row in the `survey` worksheet that marks the beginning of a nested or repeated group of
 * fields.
 */
export type BeginMarkerRow = QuestionRow &
  (IBeginRepeatMarkerRow | IBeginGroupMarkerRow);

/**
 * A row in the `survey` worksheet that marks the beginning or end of a nested or repeated group of
 * fields (which means it is not a field definition)
 */
export type BeginOrEndMarkerRow = QuestionRow &
  (
    | IBeginRepeatMarkerRow
    | IEndRepeatMarkerRow
    | IBeginGroupMarkerRow
    | IEndGroupMarkerRow
  );
