import ODKFormulaEvaluationResult from "../functions/odk-formulas/evaluation/ODKFormulaEvaluationResult";
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
      stack: ODKNode[];
      answer?: unknown;
      evaluatedResults: Record<string, ODKFormulaEvaluationResult>;
      resultsThatNeedReevaluation: Record<string, boolean>;
    }
  | {
      row: QuestionRow;
      type: string;
      typeParameters: string[];
      children: ODKNode[];
      indentationLevel: number;
      rowIndex: number;
      stack: ODKNode[];
      answer?: unknown;
      evaluatedResults: Record<string, ODKFormulaEvaluationResult>;
      resultsThatNeedReevaluation: Record<string, boolean>;
    };
