import * as ExcelJS from "exceljs";

export default async function loadEmptyXLSFormWorkbook() {
  const emptyWorkbook = new ExcelJS.Workbook();

  emptyWorkbook.addWorksheet("survey");
  emptyWorkbook.addWorksheet("choices");

  const settingsWorksheet = emptyWorkbook.addWorksheet("settings");
  settingsWorksheet.addRow(["default_language"]);
  settingsWorksheet.addRow(["English (en)"]);

  return emptyWorkbook;
}
