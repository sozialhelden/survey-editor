import {
  Alignment,
  Button,
  Classes,
  ControlGroup,
  FocusStyleManager,
  Menu,
  Navbar,
  NonIdealState,
  Switch,
} from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import * as ExcelJS from "exceljs";
import React, { FormEvent, useCallback } from "react";
import styled from "styled-components";
import "./App.css";
import ResultCodeTree from "./code/ResultCodeTree";
import ExcelFileInput from "./components/ExcelFileInput";
import LanguageSelector from "./components/LanguageSelector";
import OverflowScrollContainer from "./components/OverflowScrollContainer";
import { ODKSurveyContext } from "./lib/ODKSurveyContext";
import useChangeHooks from "./lib/useChangeHooks";
import { SheetTabs } from "./SheetTabs";
import EditableSurveyTitle from "./survey/fields/EditableSurveyTitle";
import { ODKNodeDragAndDropContext } from "./survey/useNodeDragAndDrop";
import XLSFormSurvey from "./survey/XLSFormSurvey";
import XLSFormWorksheet from "./table/XLSFormWorksheet";
import { loadFormFromExcelWorkbook } from "./xlsform-simple-schema/functions/loadSurveyFromXLSX";
import { createSurveySchemaFromXLSForm } from "./xlsform-simple-schema/functions/schema-creation/createSurveySchemaFromXLSForm";
import { WorksheetName, XLSForm } from "./xlsform-simple-schema/index";

FocusStyleManager.onlyShowFocusOnTabs();

const StyledXLSFormSurvey = styled(XLSFormSurvey)`
  max-width: 800px;
  margin: auto;

  font-size: 20px;
  .bp3-small {
    font-size: 16px;
  }

  .bp3-large {
    font-size: 20px;
  }

  .bp3-form-helper-text {
    font-size: 16px;
  }

  .bp3-form-group {
    margin: 0 0 40px;
  }

  .bp3-control {
    margin-bottom: 10px;
  }
`;

const AppBody = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

function NavbarSwitch(props: {
  checked: boolean;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  label: string;
}) {
  return (
    <Switch
      checked={props.checked}
      label={props.label}
      onChange={props.onChange}
      inline={true}
      style={{ marginBottom: "0" }}
    />
  );
}

function App() {
  const [xlsForm, setXLSForm] = React.useState<XLSForm>();
  const [language, setLanguage] = React.useState<string>();
  const [debug, setDebug] = React.useState<boolean>(true);
  const [showTable, setShowTable] = React.useState<boolean>(false);
  const [showResult, setShowResult] = React.useState<boolean>(false);
  const [worksheetName, setWorksheetName] = React.useState<WorksheetName>(
    "survey"
  );

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
    []
  );

  const onDebugChange = React.useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      setDebug(!event.currentTarget.checked);
    },
    []
  );

  const onShowTableChange = React.useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      setShowTable(event.currentTarget.checked);
    },
    []
  );

  const onShowResultChange = React.useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      setShowResult(event.currentTarget.checked);
    },
    []
  );

  const fileInput = <ExcelFileInput onLoadWorkbook={onLoadWorkbook} />;

  const loadEmptyXLSForm = useCallback(async () => {
    const emptyWorkbook = new ExcelJS.Workbook();
    emptyWorkbook.addWorksheet("survey");
    emptyWorkbook.addWorksheet("choices");
    const settingsWorksheet = emptyWorkbook.addWorksheet("settings");
    settingsWorksheet.addRow(["default_language"]);
    settingsWorksheet.addRow(["English (en)"]);

    setXLSForm(await loadFormFromExcelWorkbook(emptyWorkbook));
  }, []);

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
  const reset = React.useCallback(() => {
    setXLSForm(undefined);
  }, []);

  const resetButton = (
    <Button className="bp3-minimal" icon="reset" text="Reset" onClick={reset} />
  );

  const resultCodeElement = xlsForm && (
    <OverflowScrollContainer
      className={"bp3-code-block"}
      style={{ padding: "1rem", margin: "0", whiteSpace: "pre" }}
    >
      <ResultCodeTree {...{ xlsForm }} />
    </OverflowScrollContainer>
  );

  const changeHooks = useChangeHooks({
    language,
    xlsForm,
    setXLSForm,
  });

  const { context } = changeHooks;
  const [, languageName, languageCode] =
    language?.match(/^(.*) \((\w+)\)$/) || [];

  const schema = React.useMemo(() => {
    if (xlsForm && language && context) {
      return createSurveySchemaFromXLSForm(xlsForm, context, language);
    }
    return undefined;
  }, [xlsForm, language, context]);

  const viewsButton = (
    <Popover2
      content={
        <Menu>
          <li className={Classes.MENU_ITEM}>
            <NavbarSwitch
              checked={showTable === true}
              label="Table"
              onChange={onShowTableChange}
            />
          </li>
          <li className={Classes.MENU_ITEM}>
            <NavbarSwitch
              checked={debug === false}
              label="Live View"
              onChange={onDebugChange}
            />
          </li>
          <li className={Classes.MENU_ITEM}>
            <NavbarSwitch
              checked={showResult === true}
              label="JSON"
              onChange={onShowResultChange}
            />
          </li>
        </Menu>
      }
      lazy={true}
    >
      <Button minimal={true} text="Views" rightIcon={"caret-down"} />
    </Popover2>
  );

  return (
    <ODKNodeDragAndDropContext.Provider
      value={{ onDropNode: changeHooks.onMoveNode }}
    >
      <ODKSurveyContext.Provider
        value={{
          schema,
          language,
          languageCode,
          languageName,
          debug,
          xlsForm,
          ...changeHooks,
        }}
      >
        {xlsForm && (
          <Navbar>
            {showTable && (
              <SheetTabs {...{ setWorksheetName, worksheetName }} />
            )}
            <Navbar.Group>
              <EditableSurveyTitle />
            </Navbar.Group>
            <Navbar.Group align={Alignment.RIGHT}>
              {resetButton}
              <Navbar.Divider />
              {viewsButton}
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
        )}

        <AppBody>
          {!xlsForm && (
            <OverflowScrollContainer>{nonIdealState}</OverflowScrollContainer>
          )}
          {xlsForm && language && showTable && (
            <XLSFormWorksheet
              xlsForm={xlsForm}
              language={language}
              debug={debug}
              style={{ width: "50%" }}
              worksheetName={worksheetName}
            />
          )}
          {xlsForm && language && (
            <OverflowScrollContainer
              style={{ boxShadow: "0 0px 30px #9fb7c2", zIndex: 1 }}
            >
              <StyledXLSFormSurvey
                xlsForm={xlsForm}
                language={language}
                debug={debug}
              />
            </OverflowScrollContainer>
          )}
          {xlsForm && language && showResult && resultCodeElement}
        </AppBody>
      </ODKSurveyContext.Provider>
    </ODKNodeDragAndDropContext.Provider>
  );
}

export default App;
