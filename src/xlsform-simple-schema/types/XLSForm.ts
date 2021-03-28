import nestSurvey from "../functions/nestSurvey";
import { ODKNode } from "./ODKNode";
import { ChoiceRow, QuestionRow, SettingsRow } from "./RowTypes";

/** Represents the content and meta information of a single worksheet in an XLSForm document. */
export type XLSFormWorksheet<RowT> = Readonly<{
  rows: readonly RowT[];
  languages: Readonly<Set<string>>;
  columnNames: readonly string[];
  columnNamesNormalized: readonly string[];
}>;

/** Represents the content and meta information of the `survey` worksheet in an XLSForm document. */
export type SurveyWorksheet = XLSFormWorksheet<QuestionRow>;
/** Represents the content and meta information of the `choices` worksheet in an XLSForm document. */
export type ChoicesWorksheet = XLSFormWorksheet<ChoiceRow>;
/** Represents the content and meta information of the `settings` worksheet in an XLSForm document. */
export type SettingsWorksheet = XLSFormWorksheet<SettingsRow>;

export type ChoiceRowByName = Record<string, ChoiceRow>;
export type ChoiceRowsByListNameAndName = Record<string, ChoiceRowByName>;

export type FlatNode = {
  row: Readonly<QuestionRow>;
  node: Readonly<ODKNode>;
};

/** Represents content and meta information of an XLSForm document. */
export type XLSForm = {
  worksheets: {
    survey: SurveyWorksheet;
    choices?: ChoicesWorksheet;
    settings?: SettingsWorksheet;
  };
  // TODO: Rename this to choiceRowsByNameAndListName
  choicesByName: Readonly<ChoiceRowsByListNameAndName>;
  /** The root node of the survey. Contains all groups and fields as descendants. */
  rootSurveyGroup: Readonly<ODKNode>;
  /** A set of all languages that the XLSForm uses in column names. */
  languages: Readonly<Set<string>>;
  /**
   * All nodes by their row index. Rows containing `end_group` and `end_repeat` types are mapped
   * to the same reference as their respective begin marker rows.
   */
  flatNodes: readonly ODKNode[];
};

export type WorksheetName = keyof XLSForm["worksheets"];

export type WorksheetRowsWithMetadata<RowT> = {
  rows: readonly RowT[];
  languages: Readonly<Set<string>>;
  columnNames: readonly string[];
  columnNamesNormalized: readonly string[];
};

/**
 * Creates a map of choice list names -> choice names -> choice rows from the `choices` worksheet
 * of an XLSForm
 */
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

/**
 * @returns an XLSForm model created from raw worksheet rows.
 */
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
