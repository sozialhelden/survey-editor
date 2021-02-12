import { BeginOrEndMarkerRow } from "./BeginOrEndMarkerRow";
import { ODKNode } from "./ODKNode";
import { ChoiceRow, QuestionRow, SettingsRow } from "./RowTypes";

export type XLSFormWorksheet<RowT> = {
  rows: RowT[];
  languages: Set<string>;
  columnNames: string[];
  columnNamesNormalized: string[];
};

export type SurveyWorksheet = XLSFormWorksheet<QuestionRow>;
export type ChoicesWorksheet = XLSFormWorksheet<ChoiceRow>;
export type SettingsWorksheet = XLSFormWorksheet<SettingsRow>;

export type ChoiceRowByName = Record<string, ChoiceRow>;
export type ChoiceRowsByListNameAndName = Record<string, ChoiceRowByName>;

export type FlatNode = {
  row: QuestionRow | BeginOrEndMarkerRow;
  node: ODKNode;
};

type XLSForm = {
  worksheets: {
    survey: SurveyWorksheet;
    choices: ChoicesWorksheet;
    settings: SettingsWorksheet;
  };
  choicesByName: ChoiceRowsByListNameAndName;
  rootSurveyGroup: ODKNode;
  languages: Set<string>;
  flatNodes: FlatNode[];
};

export default XLSForm;
