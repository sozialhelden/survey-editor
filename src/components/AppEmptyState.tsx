import { Button, ControlGroup, NonIdealState } from "@blueprintjs/core";
import React, { useCallback } from "react";
import { Patch } from "../lib/undo/useUndoHistory";
import createEmptyXLSForm from "../xlsform-simple-schema/functions/editing/createEmptyXLSForm";
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
    setXLSFormWithPatches(
      "Load empty XLSForm document",
      await createEmptyXLSForm(),
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
