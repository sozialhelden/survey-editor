import { Button, ControlGroup, NonIdealState } from "@blueprintjs/core";
import * as ExcelJS from "exceljs";
import React, { useCallback } from "react";
import { Patch } from "../lib/undo/useUndoHistory";
import { loadFormFromExcelWorkbook } from "../xlsform-simple-schema/functions/loadSurveyFromXLSX";
import { XLSForm } from "../xlsform-simple-schema/index";
import ExcelFileInput from "./ExcelFileInput";

/** Shows a load button and a 'create empty survey' button after the app just loaded. */
export function AppEmptyState({
  setXLSFormWithPatches,
  setLanguage,
}: {
  setXLSFormWithPatches: (
    description: string,
    value: XLSForm | undefined,
    patches: Patch[],
    inversePatches: Patch[]
  ) => void;
  setLanguage: (language: string) => void;
}) {
  const fileInput = (
    <ExcelFileInput {...{ setXLSFormWithPatches, setLanguage }} />
  );

  const loadEmptyXLSForm = useCallback(async () => {
    const emptyWorkbook = new ExcelJS.Workbook();
    emptyWorkbook.addWorksheet("survey");
    emptyWorkbook.addWorksheet("choices");
    const settingsWorksheet = emptyWorkbook.addWorksheet("settings");
    settingsWorksheet.addRow(["default_language"]);
    settingsWorksheet.addRow(["English (en)"]);

    setXLSFormWithPatches(
      "Load empty XLSForm document",
      await loadFormFromExcelWorkbook(emptyWorkbook),
      [],
      []
    );
  }, [setXLSFormWithPatches]);

  const nonIdealStateActions = (
    <ControlGroup vertical={true}>
      <p>{fileInput}</p>
      <p>or</p>
      <p>
        <Button large={true} onClick={loadEmptyXLSForm}>
          Start from scratch
        </Button>
      </p>
    </ControlGroup>
  );

  const nonIdealState = (
    <NonIdealState
      icon="document-open"
      title="Open an XLSForm Excel file to start."
      action={nonIdealStateActions}
    />
  );
  return nonIdealState;
}
