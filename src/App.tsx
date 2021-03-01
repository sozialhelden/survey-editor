import {
  Alignment,
  Button,
  FocusStyleManager,
  Navbar,
  NonIdealState,
  Switch,
} from "@blueprintjs/core";
import * as ExcelJS from "exceljs";
import React, { FormEvent } from "react";
import styled from "styled-components";
import "./App.css";
import ResultCodeTree from "./code/ResultCodeTree";
import ExcelFileInput from "./components/ExcelFileInput";
import LanguageSelector from "./components/LanguageSelector";
import OverflowScrollContainer from "./components/OverflowScrollContainer";
import { ODKSurveyContext } from "./lib/ODKSurveyContext";
import useChangeHooks from "./lib/useChangeHooks";
import { SheetTabs } from "./SheetTabs";
import XLSFormSurvey from "./survey/XLSFormSurvey";
import XLSFormWorksheet from "./table/XLSFormWorksheet";
import { loadFormFromExcelWorkbook } from "./xlsform-simple-schema/functions/loadSurveyFromXLSX";
import { createSurveySchemaFromXLSForm } from "./xlsform-simple-schema/functions/schema-creation/createSurveySchemaFromXLSForm";
import XLSForm, { WorksheetName } from "./xlsform-simple-schema/index";

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

  const { context, onChange, onChangeCell } = useChangeHooks({
    xlsForm,
    language,
    setXLSForm,
  });

  const [, languageName, languageCode] = language?.match(/\w+ \((\w+)\)/) || [];

  const schema = React.useMemo(() => {
    if (xlsForm && language && context) {
      return createSurveySchemaFromXLSForm(xlsForm, context, language);
    }
    return undefined;
  }, [xlsForm, language, context]);

  return (
    <ODKSurveyContext.Provider
      value={{
        schema,
        context,
        language,
        languageCode,
        languageName,
        debug,
        xlsForm,
      }}
    >
      {xlsForm && (
        <Navbar>
          {showTable && <SheetTabs {...{ setWorksheetName, worksheetName }} />}

          <Navbar.Group align={Alignment.RIGHT}>
            {resetButton}
            <Navbar.Divider />
            <NavbarSwitch
              checked={showTable === true}
              label="Table"
              onChange={onShowTableChange}
            />
            <NavbarSwitch
              checked={debug === false}
              label="Live View"
              onChange={onDebugChange}
            />
            <NavbarSwitch
              checked={showResult === true}
              label="JSON"
              onChange={onShowResultChange}
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

      <AppBody>
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
            onChangeCell={onChangeCell}
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
              onChangeCell={onChangeCell}
            />
          </OverflowScrollContainer>
        )}
        {xlsForm && language && showResult && resultCodeElement}
      </AppBody>
    </ODKSurveyContext.Provider>
  );
}

export default App;
