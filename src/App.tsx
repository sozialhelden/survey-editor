import React, { FormEvent } from "react";
import styled from "styled-components";
import * as ExcelJS from "exceljs";
import {
  Alignment,
  Button,
  ButtonGroup,
  Code,
  FocusStyleManager,
  Navbar,
  NonIdealState,
  Switch,
} from "@blueprintjs/core";
import XLSForm from "./xlsform-simple-schema/index";

import "./App.css";
import { loadFormFromExcelWorkbook } from "./xlsform-simple-schema/functions/loadSurveyFromXLSX";
import ExcelFileInput from "./components/ExcelFileInput";
import XLSFormSurvey from "./survey/XLSFormSurvey";
import LanguageSelector from "./components/LanguageSelector";
import OverflowScrollContainer from "./components/OverflowScrollContainer";
import XLSFormWorksheet from "./table/XLSFormWorksheet";
import { FieldProps } from "./survey/FieldProps";
import { AppToaster } from "./toaster";
import ResultCodeTree from "./code/ResultCodeTree";

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

function App() {
  const [xlsForm, setXLSForm] = React.useState<XLSForm>();
  const [lastEvaluationDate, setLastEvaluationDate] = React.useState<Date>(
    new Date()
  );

  const [language, setLanguage] = React.useState<string>();
  const [debug, setDebug] = React.useState<boolean>(true);
  const [showTable, setShowTable] = React.useState<boolean>(false);
  const [showResult, setShowResult] = React.useState<boolean>(false);
  const [worksheetName, setWorksheetName] = React.useState<
    keyof XLSForm["worksheets"]
  >("survey");

  const onLoadWorkbook = React.useCallback(
    async (workbook: ExcelJS.Workbook) => {
      const xlsForm = await loadFormFromExcelWorkbook(workbook);
      setXLSForm(xlsForm);
      setLanguage(xlsForm.worksheets.settings.rows[0].default_language);
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

  const reset = React.useCallback(() => {
    setXLSForm(undefined);
  }, []);

  const resetButton = (
    <Button className="bp3-minimal" icon="reset" text="Reset" onClick={reset} />
  );

  const resultCodeElement = lastEvaluationDate && xlsForm && (
    <OverflowScrollContainer
      className={"bp3-code-block"}
      style={{ padding: "1rem", margin: "0", whiteSpace: "pre" }}
    >
      <ResultCodeTree {...{ lastEvaluationDate, xlsForm }} />
    </OverflowScrollContainer>
  );

  const onChange = React.useCallback(
    (value: unknown, fieldProps: FieldProps) => {
      console.log("Change", value, fieldProps);
      AppToaster.clear();
      AppToaster.show({
        message: (
          <>
            {fieldProps.schemaKey} → <Code>{JSON.stringify(value)}</Code>
          </>
        ),
      });
      if (xlsForm) {
        fieldProps.node.answer = value;
      }
      setLastEvaluationDate(new Date());
    },
    [xlsForm]
  );
  return (
    <>
      {xlsForm && (
        <Navbar>
          {showTable && (
            <Navbar.Group align={Alignment.LEFT}>
              <ButtonGroup>
                <Button
                  onClick={() => setWorksheetName("survey")}
                  active={worksheetName === "survey"}
                >
                  Survey
                </Button>
                <Button
                  onClick={() => setWorksheetName("choices")}
                  active={worksheetName === "choices"}
                >
                  Choices
                </Button>
                <Button
                  onClick={() => setWorksheetName("settings")}
                  active={worksheetName === "settings"}
                >
                  Settings
                </Button>
              </ButtonGroup>
            </Navbar.Group>
          )}

          <Navbar.Group align={Alignment.RIGHT}>
            {resetButton}
            <Navbar.Divider />
            <Switch
              checked={showTable === true}
              label="Table"
              onChange={onShowTableChange}
              inline={true}
              style={{ marginBottom: "0" }}
            />
            <Switch
              checked={debug === false}
              label="Live View"
              onChange={onDebugChange}
              inline={true}
              style={{ marginBottom: "0" }}
            />
            <Switch
              checked={showResult === true}
              label="JSON"
              onChange={onShowResultChange}
              inline={true}
              style={{ marginBottom: "0" }}
            />
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

      <div
        style={{
          flex: 1,
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
        }}
      >
        {!xlsForm && (
          <OverflowScrollContainer>
            <NonIdealState
              icon="document-open"
              title="Open an Excel file to start."
              action={fileInput}
            />
          </OverflowScrollContainer>
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
              onChange={onChange}
            />
          </OverflowScrollContainer>
        )}
        {xlsForm && language && showResult && resultCodeElement}
      </div>
    </>
  );
}

export default App;
