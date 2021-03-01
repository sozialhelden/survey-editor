import * as React from "react";
import { FileInput } from "@blueprintjs/core";
import * as ExcelJS from "exceljs";

export default function ExcelFileInput(props: {
  onLoadWorkbook: (workbook: ExcelJS.Workbook) => void;
}) {
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
          console.log(workbook, "workbook instance");
          props.onLoadWorkbook(wb);
        });
      };
    },
    [props]
  );

  return <FileInput onInputChange={onFileChange} />;
}
