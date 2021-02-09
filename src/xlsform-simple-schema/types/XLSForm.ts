import { ODKNode } from './ODKNode';
import { ChoiceRow, QuestionRow, SettingsRow } from './RowTypes';

export type XLSFormWorksheet<RowT> = {
  rows: RowT[],
  languages: Set<string>,
  columnNames: string[],
  columnNamesNormalized: string[],
}

export type SurveyWorksheet = XLSFormWorksheet<QuestionRow>;
export type ChoicesWorksheet = XLSFormWorksheet<ChoiceRow>;
export type SettingsWorksheet = XLSFormWorksheet<SettingsRow>;

export type ChoiceRowByName = Record<string, ChoiceRow>;
export type ChoiceRowsByListNameAndName = Record<string, ChoiceRowByName>;

type XLSForm = {
  worksheets: {
    survey: SurveyWorksheet;
    choices: ChoicesWorksheet;
    settings: SettingsWorksheet;
  };
  choicesByName: ChoiceRowsByListNameAndName;
  rootSurveyGroup: ODKNode;
  languages: Set<string>;
};

export default XLSForm;
