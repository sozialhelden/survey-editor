import * as Excel from "exceljs";
import { loadXLSFormFromRows, XLSForm } from "../types/XLSForm";
import {
  loadChoicesRow,
  loadQuestionRow,
  loadSettingsRow,
  loadWorksheet,
} from "./loadSurveyFromXLSX";

/**
 * Loads a given ExcelJS workbook.
 *
 * @returns an `XLSForm` model.
 */

export async function loadFormFromExcelWorkbook(
  /** The ExcelJS workbook to load as XLSForm model. */
  workbook: Excel.Workbook
): Promise<XLSForm> {
  const settings = loadWorksheet(workbook, "settings", loadSettingsRow);
  const defaultLanguage = settings?.rows[0].default_language || "English (en)";
  const choices = loadWorksheet(
    workbook,
    "choices",
    loadChoicesRow,
    defaultLanguage
  );
  const survey = loadWorksheet(
    workbook,
    "survey",
    loadQuestionRow,
    defaultLanguage
  );

  if (!survey) {
    throw new Error(
      "No `survey` sheet found in workbook. Please define a sheet named `survey` and try again."
    );
  }

  const xlsForm: XLSForm = loadXLSFormFromRows(
    survey,
    defaultLanguage,
    settings,
    choices
  );

  return xlsForm;
}
