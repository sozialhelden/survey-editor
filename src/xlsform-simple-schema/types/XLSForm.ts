import nestSurvey from "../functions/nestSurvey";
import { ODKNode } from "./ODKNode";
import { ChoiceRow, QuestionRow, SettingsRow } from "./RowTypes";

export type XLSFormWorksheet<RowT> = Readonly<{
  rows: readonly RowT[];
  languages: Readonly<Set<string>>;
  columnNames: readonly string[];
  columnNamesNormalized: readonly string[];
}>;

export type SurveyWorksheet = XLSFormWorksheet<QuestionRow>;
export type ChoicesWorksheet = XLSFormWorksheet<ChoiceRow>;
export type SettingsWorksheet = XLSFormWorksheet<SettingsRow>;

export type ChoiceRowByName = Record<string, ChoiceRow>;
export type ChoiceRowsByListNameAndName = Record<string, ChoiceRowByName>;

export type FlatNode = {
  row: Readonly<QuestionRow>;
  node: Readonly<ODKNode>;
};

export type XLSForm = {
  worksheets: {
    survey: SurveyWorksheet;
    choices?: ChoicesWorksheet;
    settings?: SettingsWorksheet;
  };
  choicesByName: Readonly<ChoiceRowsByListNameAndName>;
  rootSurveyGroup: Readonly<ODKNode>;
  languages: Readonly<Set<string>>;
  flatNodes: readonly ODKNode[];
};

export type WorksheetName = keyof XLSForm["worksheets"];

export type WorksheetRowsWithMetadata<RowT> = {
  rows: readonly RowT[];
  languages: Readonly<Set<string>>;
  columnNames: readonly string[];
  columnNamesNormalized: readonly string[];
};

export function loadChoices(
  worksheet: ChoicesWorksheet
): ChoiceRowsByListNameAndName {
  const map: ChoiceRowsByListNameAndName = {};

  worksheet.rows.forEach((row) => {
    const listName = row["list name"];
    const { name } = row;
    const list = map[listName] || {};
    list[name] = row;
    map[listName] = list;
  });

  return map;
}

export function loadXLSFormFromRows(
  survey: Readonly<WorksheetRowsWithMetadata<QuestionRow>>,
  defaultLanguage: string,
  settings?: WorksheetRowsWithMetadata<SettingsRow>,
  choices?: WorksheetRowsWithMetadata<ChoiceRow>
) {
  const flatNodes: ODKNode[] = [];
  const { node: rootSurveyGroup } = nestSurvey({
    rows: survey.rows,
    defaultLanguage,
    onRow: (row, node) => flatNodes.push(node),
  });

  const xlsForm: XLSForm = {
    worksheets: {
      settings,
      choices,
      survey,
    },
    rootSurveyGroup,
    choicesByName: choices ? loadChoices(choices) : {},
    languages: survey.languages,
    flatNodes,
  };
  return xlsForm;
}
