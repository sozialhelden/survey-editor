import {
  Colors,
  FocusStyleManager,
  HotkeysProvider,
  HotkeysTarget2,
} from "@blueprintjs/core";
import React from "react";
import styled from "styled-components";
import "./App.css";
import ResultCodeTree from "./code/ResultCodeTree";
import { AppEmptyState } from "./components/AppEmptyState";
import { AppNavBar } from "./components/AppNavBar";
import composeContexts, {
  ContextAndValue,
} from "./components/core/composeContexts";
import DarkModeContainer, {
  useDarkMode,
} from "./components/core/DarkModeContainer";
import OverflowScrollContainer from "./components/OverflowScrollContainer";
import useViewOptionsButton from "./components/useViewOptionsButton";
import { alpha } from "./lib/colors";
import { ODKSurveyContext } from "./lib/ODKSurveyContext";
import { UndoContext } from "./lib/undo/UndoContext";
import useUndoHistory from "./lib/undo/useUndoHistory";
import useChangeHooks from "./lib/useChangeHooks";
import { useGlobalHotkeys } from "./lib/useGlobalHotkeys";
import { ODKNodeDragAndDropContext } from "./survey/useNodeDragAndDrop";
import XLSFormSurvey from "./survey/XLSFormSurvey";
import XLSFormWorkbook from "./table/XLSFormWorkbook";
import { createSurveySchemaFromXLSForm } from "./xlsform-simple-schema/functions/schema-creation/createSurveySchemaFromXLSForm";
import { XLSForm } from "./xlsform-simple-schema/index";

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

function App() {
  const [language, setLanguage] = React.useState<string>("English (en)");
  const undoContext = useUndoHistory<XLSForm>();
  const xlsForm = undoContext.document;
  const { viewMenuButton, viewOptions } = useViewOptionsButton();
  const isDarkMode = useDarkMode();
  const hotkeys = useGlobalHotkeys(undoContext);
  const setXLSFormWithPatches = undoContext.setDocumentWithPatches;

  const changeHooks = useChangeHooks({
    language,
    xlsForm,
    setXLSFormWithPatches,
    debug: viewOptions.debug,
  });

  const { evaluationContext } = changeHooks;
  const [, languageName, languageCode] =
    language?.match(/^(.*) \((\w+)\)$/) || [];

  const surveySimpleSchema = React.useMemo(() => {
    if (xlsForm && language && evaluationContext) {
      return createSurveySchemaFromXLSForm(
        xlsForm,
        evaluationContext,
        language
      );
    }
    return undefined;
  }, [xlsForm, language, evaluationContext]);

  const navbar = xlsForm && (
    <AppNavBar
      {...{
        setXLSFormWithPatches,
        setLanguage,
        xlsForm,
        viewMenuButton,
        language,
      }}
    />
  );

  const appEmptyState = !xlsForm && (
    <OverflowScrollContainer>
      <AppEmptyState {...{ setXLSFormWithPatches, setLanguage }} />
    </OverflowScrollContainer>
  );

  const excelPanel = xlsForm && language && viewOptions.table && (
    <XLSFormWorkbook
      xlsForm={xlsForm}
      language={language}
      debug={viewOptions.debug}
      style={{ flex: 1, display: "flex" }}
    />
  );

  const surveyPanel = xlsForm && language && (
    <OverflowScrollContainer
      style={{
        boxShadow: isDarkMode
          ? `0 0px 2px ${alpha(Colors.DARK_GRAY5, 0.8)}, 0 0px 20px ${alpha(
              Colors.DARK_GRAY1,
              0.3
            )}`
          : `0 0px 10px ${alpha(Colors.DARK_GRAY5, 0.3)}`,
        zIndex: 1,
      }}
    >
      <StyledXLSFormSurvey
        xlsForm={xlsForm}
        language={language}
        debug={viewOptions.debug}
      />
    </OverflowScrollContainer>
  );

  const treePanel = xlsForm && language && viewOptions.json && (
    <OverflowScrollContainer
      className={"bp3-code-block"}
      style={{ padding: "1rem", margin: "0", whiteSpace: "pre" }}
    >
      <ResultCodeTree {...{ xlsForm }} />
    </OverflowScrollContainer>
  );

  const contexts: ContextAndValue<any>[] = [
    [UndoContext, undoContext],
    [ODKNodeDragAndDropContext, { onDropNode: changeHooks.onMoveNode }],
    [
      ODKSurveyContext,
      {
        schema: surveySimpleSchema,
        language,
        languageCode,
        languageName,
        debug: viewOptions.debug,
        xlsForm,
        ...changeHooks,
      },
    ],
  ];

  const navbarAndBody = (
    <>
      {navbar}

      <AppBody>
        {appEmptyState}
        {excelPanel}
        {surveyPanel}
        {treePanel}
      </AppBody>
    </>
  );

  return (
    <HotkeysProvider>
      <HotkeysTarget2 hotkeys={hotkeys}>
        {({ handleKeyDown, handleKeyUp }) => (
          <DarkModeContainer
            style={{ height: "100%", display: "flex", flexDirection: "column" }}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
          >
            {composeContexts(contexts, navbarAndBody)}
          </DarkModeContainer>
        )}
      </HotkeysTarget2>
    </HotkeysProvider>
  );
}

export default App;
