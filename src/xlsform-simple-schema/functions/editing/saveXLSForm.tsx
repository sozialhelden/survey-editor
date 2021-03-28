import * as ExcelJS from "exceljs";
import { get } from "lodash";
import { WorksheetName, XLSForm } from "../../types/XLSForm";
import {
  localizableColumnNames,
  normalizeColumnNames,
} from "../loadSurveyFromXLSX";

/** Creates an XLSForm Excel file and starts its download in the browser.  */
export async function saveXLSForm(xlsForm: XLSForm) {
  const workbook = new ExcelJS.Workbook();
  workbook.modified = workbook.created = new Date();
  workbook.creator = "Sozialheld*innen Survey Editor";

  const worksheetNames: WorksheetName[] = ["survey", "choices", "settings"];
  worksheetNames.forEach((worksheetName) => {
    const internalWorksheet = xlsForm?.worksheets[worksheetName];
    if (!internalWorksheet) {
      return;
    }

    const excelWorksheet = workbook.addWorksheet(worksheetName);
    const rows = [...(internalWorksheet?.rows || [])];

    const columnNames = normalizeColumnNames(
      internalWorksheet.columnNames
    ).map((cn) => cn.replace(/::/, "."));

    excelWorksheet.columns = columnNames.map((columnName) => ({
      header: columnName,
      key: columnName,
      width: 10,
    })) as ExcelJS.Column[];

    excelWorksheet.addRows(
      rows.map((row) =>
        columnNames.map((cn) => {
          if (localizableColumnNames.includes(cn)) {
            cn = `${cn}.English (en)`;
          }
          return get(row, cn);
        })
      )
    );
  });

  const title =
    xlsForm?.worksheets.settings?.rows[0].form_title ||
    "Untitled XLSForm survey";
  workbook.model.title = title;

  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  var a = document.createElement("a");
  document.body.appendChild(a);
  const url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = title;
  a.click();

  setTimeout(() => {
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }, 0);
}
