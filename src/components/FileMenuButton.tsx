import { Button, Menu, MenuDivider, MenuItem } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import * as React from "react";
import { Patch } from "../lib/undo/useUndoHistory";
import createEmptyXLSForm from "../xlsform-simple-schema/functions/editing/createEmptyXLSForm";
import { saveXLSForm } from "../xlsform-simple-schema/functions/editing/saveXLSForm";
import { XLSForm } from "../xlsform-simple-schema/index";
import { useWorkbookFromFile } from "./ExcelFileInput";
import useSettingsDialog from "./hooks/useSettingsDialog";

/** Button showing a 'File' menu */
export function FileMenuButton({
  xlsForm,
  setXLSFormWithPatches,
  setLanguage,
}: {
  xlsForm: XLSForm | undefined;
  setXLSFormWithPatches: (
    description: string,
    value: XLSForm | undefined,
    patches: Patch[],
    inversePatches: Patch[]
  ) => void;
  setLanguage: (language: string) => void;
}) {
  const inputFieldRef = React.createRef<HTMLInputElement>();
  const { showSettingsDialog, settingsDialog } = useSettingsDialog();
  const { onFileChange } = useWorkbookFromFile({
    setXLSFormWithPatches,
    setLanguage,
  });

  const loadEmptyXLSForm = React.useCallback(async () => {
    setXLSFormWithPatches(
      "Create new, empty XLSForm document",
      await createEmptyXLSForm(),
      [],
      []
    );
  }, [setXLSFormWithPatches]);

  const closeFile = React.useCallback(() => {
    setXLSFormWithPatches("Close current workbook", undefined, [], []);
  }, [setXLSFormWithPatches]);

  const saveFileAs = React.useCallback(async () => {
    if (xlsForm) {
      await saveXLSForm(xlsForm);
    }
  }, [xlsForm]);

  const menu = (
    <Menu>
      <MenuItem text="New File" icon="plus" onClick={loadEmptyXLSForm} />
      <MenuDivider />
      <label htmlFor="open-file-input">
        <MenuItem icon="import" text="Import File…" />
      </label>
      <MenuItem text="Export" icon="export">
        <MenuItem
          text="Microsoft Excel (.xlsx)"
          onClick={saveFileAs}
          disabled={!xlsForm}
        />
      </MenuItem>
      <MenuDivider />
      <MenuItem text="Settings" icon="cog" onClick={showSettingsDialog} />
      <MenuDivider />
      <MenuItem text="Close File" onClick={closeFile} />
    </Menu>
  );

  const button = (
    <Button className="bp3-minimal" rightIcon="caret-down" text="File" />
  );

  return (
    <>
      <input
        id="open-file-input"
        type="file"
        onChange={onFileChange}
        ref={inputFieldRef}
        style={{ display: "none" }}
      />
      {settingsDialog}
      <Popover2 content={menu} placement={"bottom-end"} minimal={true}>
        {button}
      </Popover2>
    </>
  );
}
