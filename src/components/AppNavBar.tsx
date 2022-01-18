import { Alignment, Navbar } from "@blueprintjs/core";
import * as React from "react";
import { Patch } from "../lib/undo/useUndoHistory";
import { XLSForm } from "../xlsform-simple-schema/index";
import { EditMenuButton } from "./EditMenuButton";
import { FileMenuButton } from "./FileMenuButton";
import LanguageSelector from "./LanguageSelector";
import EditableSurveyTitle from "./survey/fields/EditableSurveyTitle";

export function AppNavBar({
  setXLSFormWithPatches,
  setLanguage,
  xlsForm,
  viewMenuButton,
  language,
}: {
  setXLSFormWithPatches: (
    description: string,
    nextState: XLSForm | undefined,
    patches: Patch[],
    inversePatches: Patch[]
  ) => void;
  setLanguage: (language: string) => void;
  xlsForm: XLSForm | undefined;
  viewMenuButton: JSX.Element;
  language: string;
}) {
  return (
    <Navbar>
      <Navbar.Group>
        <FileMenuButton {...{ setXLSFormWithPatches, setLanguage, xlsForm }} />
        <EditMenuButton />
      </Navbar.Group>
      <Navbar.Group>
        <Navbar.Divider />
        <EditableSurveyTitle />
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        {viewMenuButton}
        <Navbar.Divider />
        {xlsForm && language && (
          <LanguageSelector
            languages={Array.from(xlsForm.languages.values())}
            language={language}
            onChange={setLanguage}
          />
        )}
      </Navbar.Group>
    </Navbar>
  );
}
