import { FileInput } from "@blueprintjs/core";
import * as ExcelJS from "exceljs";
import * as React from "react";
import { XLSForm } from "../xlsform-simple-schema";
import { loadFormFromExcelWorkbook } from "../xlsform-simple-schema/functions/loadSurveyFromXLSX";

export default function ExcelFileInput(props: {
  setXLSForm: (xlsForm: XLSForm | undefined) => void;
  setLanguage: (language: string) => void;
}) {
  const { onFileChange } = useWorkbookFromFile(props);
  return <FileInput onInputChange={onFileChange} large={true} />;
}

export function useWorkbookFromFile({
  setXLSForm,
  setLanguage,
}: {
  setXLSForm: (xlsForm: XLSForm) => void;
  setLanguage: (language: string) => void;
}) {
  const onLoadWorkbook = React.useCallback(
    async (workbook: ExcelJS.Workbook) => {
      const xlsForm = await loadFormFromExcelWorkbook(workbook);
      setXLSForm(xlsForm);
      setLanguage(
        xlsForm.worksheets.settings?.rows[0].default_language ||
          [...xlsForm.languages?.values()][0] ||
          "English (en)"
      );
    },
    [setLanguage, setXLSForm]
  );

  const onFileChange = React.useCallback(
    (e) => {
      const file = e.target.files[0];
      const wb = new ExcelJS.Workbook();
      const reader = new FileReader();

      reader.readAsArrayBuffer(file);
      reader.onload = () => {
        const buffer = reader.result;
        if (!(buffer instanceof ArrayBuffer)) {
          throw new Error(
            "Buffer was not defined as Buffer object after reading."
          );
        }
        wb.xlsx.load(buffer).then((workbook) => {
          onLoadWorkbook(wb);
        });
      };
    },
    [onLoadWorkbook]
  );

  return { onFileChange };
}
