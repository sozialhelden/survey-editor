import { QuestionRow } from './RowTypes';

export interface IBeginRepeatMarkerRow {
  type: 'begin_repeat';
}

export interface IEndRepeatMarkerRow {
  type: 'end_repeat';
}

export interface IBeginGroupMarkerRow {
  type: 'begin_group';
}

export interface IEndGroupMarkerRow {
  type: 'end_group';
}

export type BeginMarkerRow = QuestionRow & (IBeginRepeatMarkerRow | IBeginGroupMarkerRow);

export type BeginOrEndMarkerRow = QuestionRow &
  (IBeginRepeatMarkerRow | IEndRepeatMarkerRow | IBeginGroupMarkerRow | IEndGroupMarkerRow);
