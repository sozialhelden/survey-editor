import * as Excel from "exceljs";
import { XLSForm } from "../types/XLSForm";
import { loadFormFromExcelWorkbook } from "./loadFormFromExcelWorkbook";

/**
 * Loads a given ExcelJS workbook from a local file (works only in NodeJS environment, not in a
 * browser).
 *
 * @returns an `XLSForm` model.
 */

export default async function loadFormFromXLSXFile(
  /** Name of the Excel (.xlsx) file containing the XLSForm definition. */
  filename: string
): Promise<XLSForm> {
  const workbook = new Excel.Workbook();
  await workbook.xlsx.readFile(filename);
  return loadFormFromExcelWorkbook(workbook);
}
