import { castDraft, enablePatches, produceWithPatches } from "immer";
import { uniq } from "lodash";
import { Patch } from "../../../lib/undo/useUndoHistory";
import {
  ChoicesWorksheet,
  loadXLSFormFromRows,
  SettingsWorksheet,
  SurveyWorksheet,
  WorksheetName,
  XLSForm,
} from "../../types/XLSForm";
import { normalizeColumnNames } from "../loadSurveyFromXLSX";

enablePatches();

/**
 * Defines a splice operation on the XLSForm’s rows. A 'Splice' operation is generic and allows to
 * add, remove, and edit rows at once.
 */
export type RowSpliceOperation = {
  rowIndex: number;
  numberOfRowsToRemove: number;
  rowsToAdd: any[];
};

/**
 * Adds and removes one or more set(s) of rows in a single operation.
 *
 * If possible, use this method for all operations that change the XLSForm model. Splicing allows
 * adding, editing, and removing rows in one go. The function recreates the whole underlying XLSForm
 * model and evaluation context so you don't have to think about how the survey model looks
 * internally.
 */
export default function spliceRowsInWorksheet(
  xlsForm: XLSForm,
  worksheetName: WorksheetName,
  operations: RowSpliceOperation[]
): [value: XLSForm, patches: Patch[], inversePatches: Patch[]] {
  const surveyWorksheet = xlsForm.worksheets.survey;
  if (!surveyWorksheet) {
    throw new Error("No survey worksheet defined.");
  }

  const worksheet = xlsForm.worksheets[worksheetName];
  if (!worksheet) {
    return [xlsForm, [], []];
  }

  // Create a copy of the rows array to give the array a new identity, causing a re-render op
  const newRows = [...worksheet?.rows];
  operations.forEach(({ rowIndex, numberOfRowsToRemove, rowsToAdd }) =>
    newRows.splice(rowIndex, numberOfRowsToRemove, ...rowsToAdd)
  );
  const columnNames = uniq(newRows.flatMap((row) => Object.keys(row)));
  const newWorksheet = {
    ...worksheet,
    rows: newRows,
    columnNames,
    columnNamesNormalized: normalizeColumnNames(columnNames),
  };

  // Reload the whole XLSForm from the new row array
  return castDraft(
    produceWithPatches(xlsForm, (_draft) =>
      loadXLSFormFromRows(
        worksheetName === "survey"
          ? (newWorksheet as SurveyWorksheet)
          : surveyWorksheet,
        xlsForm?.worksheets.settings?.rows[0]?.default_language ||
          "English (en)",
        worksheetName === "settings"
          ? (newWorksheet as SettingsWorksheet)
          : xlsForm?.worksheets.settings,
        worksheetName === "choices"
          ? (newWorksheet as ChoicesWorksheet)
          : xlsForm?.worksheets.choices
      )
    )
  );
}
