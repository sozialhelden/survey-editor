import {
  Alignment,
  Colors,
  FocusStyleManager,
  HotkeysProvider,
  HotkeysTarget2,
  Navbar,
} from "@blueprintjs/core";
import React from "react";
import styled from "styled-components";
import "./App.css";
import ResultCodeTree from "./code/ResultCodeTree";
import { AppEmptyState } from "./components/AppEmptyState";
import DarkModeContainer, { useDarkMode } from "./components/DarkModeContainer";
import { EditMenuButton } from "./components/EditMenuButton";
import { FileMenuButton } from "./components/FileMenuButton";
import LanguageSelector from "./components/LanguageSelector";
import OverflowScrollContainer from "./components/OverflowScrollContainer";
import useViewOptionsButton from "./components/useViewOptionsButton";
import { alpha } from "./lib/colors";
import { ODKSurveyContext } from "./lib/ODKSurveyContext";
import { UndoContext } from "./lib/undo/UndoContext";
import useUndoHistory from "./lib/undo/useUndoHistory";
import useChangeHooks from "./lib/useChangeHooks";
import { useGlobalHotkeys } from "./lib/useGlobalHotkeys";
import EditableSurveyTitle from "./survey/fields/EditableSurveyTitle";
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

  const resultCodeElement = xlsForm && (
    <OverflowScrollContainer
      className={"bp3-code-block"}
      style={{ padding: "1rem", margin: "0", whiteSpace: "pre" }}
    >
      <ResultCodeTree {...{ xlsForm }} />
    </OverflowScrollContainer>
  );

  const { viewMenuButton, viewOptions } = useViewOptionsButton();
  const isDarkMode = useDarkMode();

  const setXLSFormWithPatches = undoContext.setDocumentWithPatches;

  const changeHooks = useChangeHooks({
    language,
    xlsForm,
    setXLSFormWithPatches,
    debug: viewOptions.debug,
  });

  const { evaluationContext: context } = changeHooks;
  const [, languageName, languageCode] =
    language?.match(/^(.*) \((\w+)\)$/) || [];

  const schema = React.useMemo(() => {
    if (xlsForm && language && context) {
      return createSurveySchemaFromXLSForm(xlsForm, context, language);
    }
    return undefined;
  }, [xlsForm, language, context]);

  const hotkeys = useGlobalHotkeys(undoContext);

  return (
    <HotkeysProvider>
      <HotkeysTarget2 hotkeys={hotkeys}>
        {({ handleKeyDown, handleKeyUp }) => (
          <DarkModeContainer
            style={{ height: "100%", display: "flex", flexDirection: "column" }}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
          >
            <UndoContext.Provider value={undoContext}>
              <ODKNodeDragAndDropContext.Provider
                value={{ onDropNode: changeHooks.onMoveNode }}
              >
                <ODKSurveyContext.Provider
                  value={{
                    schema,
                    language,
                    languageCode,
                    languageName,
                    debug: viewOptions.debug,
                    xlsForm,
                    ...changeHooks,
                  }}
                >
                  {xlsForm && (
                    <Navbar>
                      <Navbar.Group>
                        <FileMenuButton
                          {...{ setXLSFormWithPatches, setLanguage, xlsForm }}
                        />
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
                  )}

                  <AppBody>
                    {!xlsForm && (
                      <OverflowScrollContainer>
                        <AppEmptyState
                          {...{ setXLSFormWithPatches, setLanguage }}
                        />
                      </OverflowScrollContainer>
                    )}
                    {xlsForm && language && viewOptions.table && (
                      <XLSFormWorkbook
                        xlsForm={xlsForm}
                        language={language}
                        debug={viewOptions.debug}
                        style={{ flex: 1, display: "flex" }}
                      />
                    )}
                    {xlsForm && language && (
                      <OverflowScrollContainer
                        style={{
                          boxShadow: isDarkMode
                            ? `0 0px 2px ${alpha(
                                Colors.DARK_GRAY5,
                                0.8
                              )}, 0 0px 20px ${alpha(Colors.DARK_GRAY1, 0.3)}`
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
                    )}
                    {xlsForm &&
                      language &&
                      viewOptions.json &&
                      resultCodeElement}
                  </AppBody>
                </ODKSurveyContext.Provider>
              </ODKNodeDragAndDropContext.Provider>
            </UndoContext.Provider>
          </DarkModeContainer>
        )}
      </HotkeysTarget2>
    </HotkeysProvider>
  );
}

export default App;
