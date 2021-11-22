import * as ExcelJS from "exceljs";
import { get } from "lodash";
import { WorksheetName, XLSForm } from "../../types/XLSForm";
import {
  localizableColumnNames,
  normalizeColumnNames,
} from "../loadSurveyFromXLSX";

export function generateExcelWorkbook(xlsForm: XLSForm) {
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

    const internalColumnNames = internalWorksheet.columnNames.flatMap((cn) => {
      if (localizableColumnNames.includes(cn)) {
        return [...xlsForm.languages.keys()].map((l) => `${cn}::${l}`);
      } else {
        return cn;
      }
    });

    const columnNames = normalizeColumnNames(internalColumnNames).map((cn) =>
      cn.replace(/::/g, ".")
    );

    excelWorksheet.columns = columnNames.map((columnName) => ({
      header: columnName.replace(/\./g, "::").replace(/__DOLLAR_SIGN__/g, "$"),
      key: columnName.replace(/\./g, "::").replace(/__DOLLAR_SIGN__/g, "$"),
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

  return { workbook, title };
}

/** Creates an XLSForm Excel file and starts its download in the browser.  */
export async function saveXLSForm(xlsForm: XLSForm) {
  const { workbook, title } = generateExcelWorkbook(xlsForm);
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  var a = document.createElement("a");
  document.body.appendChild(a);
  const url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = `${title}.xlsx`;
  a.click();

  setTimeout(() => {
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }, 0);
}
