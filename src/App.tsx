import {
  Colors,
  FocusStyleManager,
  HotkeysProvider,
  HotkeysTarget2,
} from "@blueprintjs/core";
import * as mapboxgl from "mapbox-gl";
import * as RDFLib from "rdflib";
import * as React from "react";
import styled from "styled-components";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
import "./App.css";
import { AppEmptyState } from "./components/AppEmptyState";
import { AppNavBar } from "./components/AppNavBar";
import BlueprintDarkModeContainer, {
  useDarkMode,
} from "./components/core/BlueprintDarkModeContainer";
import composeContexts, {
  ContextAndValue,
} from "./components/core/composeContexts";
import useChangeHooks from "./components/hooks/useChangeHooks";
import { useGlobalHotkeys } from "./components/hooks/useGlobalHotkeys";
import OverflowScrollContainer from "./components/OverflowScrollContainer";
import { RDFGraphContext } from "./components/rdf/RDFGraphContext";
import RDFModelTree from "./components/rdf/RDFModelTree";
import ResultCodeTree from "./components/result-code/ResultCodeTree";
import ImageUploadContext from "./components/survey/fields/ImageUploadContext";
import { ODKNodeDragAndDropContext } from "./components/survey/useNodeDragAndDrop";
import XLSFormSurvey from "./components/survey/XLSFormSurvey";
import XLSFormWorkbook from "./components/table/XLSFormWorkbook";
import useViewOptionsButton from "./components/useViewOptionsButton";
import { alpha } from "./lib/colors";
import { createImageObjectFromAccessibilityCloudImage } from "./lib/images/createImageObjectFromAccessibilityCloudImage";
import { createImageObjectFromFile } from "./lib/images/createImageObjectFromFile";
import { uploadPhoto } from "./lib/images/uploadPhoto";
import { ODKSurveyContext } from "./lib/ODKSurveyContext";
import loadSchemaOrgGraph from "./lib/rdf/loadSchemaOrgGraph";
import { UndoContext } from "./lib/undo/UndoContext";
import useUndoHistory from "./lib/undo/useUndoHistory";
import { createSurveySchemaFromXLSForm } from "./xlsform-simple-schema/functions/schema-creation/createSurveySchemaFromXLSForm";
import { XLSForm } from "./xlsform-simple-schema/index";
(mapboxgl as any).workerClass = MapboxWorker;

if (!process.env.REACT_APP_MAPBOX_ACCESS_TOKEN) {
  throw new Error(
    `Please define the REACT_APP_MAPBOX_ACCESS_TOKEN environment variable.`
  );
}
(mapboxgl as any).accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

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

  const rdfStore = React.useMemo(() => {
    const store = RDFLib.graph();
    loadSchemaOrgGraph(store);
    return store;
  }, []);

  const changeHooks = useChangeHooks({
    language,
    xlsForm,
    setXLSFormWithPatches,
    debug: viewOptions.debug,
  });

  // Allow debugging from the console
  (window as any).xlsForm = xlsForm;
  (window as any).setXLSFormWithPatches = setXLSFormWithPatches;

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

  // First visible state when there is no data loaded yet.
  const appEmptyState = !xlsForm && (
    <OverflowScrollContainer>
      <AppEmptyState {...{ setXLSFormWithPatches, setLanguage }} />
    </OverflowScrollContainer>
  );

  // The panel showing an Excel workbook view of the XLSForm data
  const excelPanel = xlsForm && language && viewOptions.table && (
    <XLSFormWorkbook
      xlsForm={xlsForm}
      language={language}
      debug={viewOptions.debug}
      style={{ flex: 1, display: "flex" }}
    />
  );

  // The panel showing the survey itself
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

  // The panel showing the output/result data of the survey
  const treePanel = xlsForm && language && viewOptions.json && (
    <OverflowScrollContainer
      className={"bp3-code-block"}
      style={{ padding: "1rem", margin: "0", whiteSpace: "pre" }}
    >
      <ResultCodeTree {...{ xlsForm }} />
    </OverflowScrollContainer>
  );

  // The panel showing the Linked Data vocabulary graph
  const modelPanel = viewOptions.graph && (
    <OverflowScrollContainer style={{ padding: "1rem", margin: "0" }}>
      <RDFModelTree />
    </OverflowScrollContainer>
  );

  const imageUploadContext = React.useMemo(
    () => ({
      uploadPhoto,
      createImageObjectFromFile,
      createImageObjectFromRemoteImage: createImageObjectFromAccessibilityCloudImage,
    }),
    []
  );

  const contexts: ContextAndValue<any>[] = [
    [RDFGraphContext, rdfStore],
    [UndoContext, undoContext],
    [ImageUploadContext, imageUploadContext],
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
        {modelPanel}
      </AppBody>
    </>
  );

  return (
    <HotkeysProvider>
      <HotkeysTarget2 hotkeys={hotkeys}>
        {({ handleKeyDown, handleKeyUp }) => (
          <BlueprintDarkModeContainer
            style={{ height: "100%", display: "flex", flexDirection: "column" }}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
          >
            {composeContexts(contexts, navbarAndBody)}
          </BlueprintDarkModeContainer>
        )}
      </HotkeysTarget2>
    </HotkeysProvider>
  );
}

export default App;
