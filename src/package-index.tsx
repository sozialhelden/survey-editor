import { enableAllPlugins, enablePatches } from "immer";
import { AppEmptyState } from "./components/AppEmptyState";
import { AppNavBar } from "./components/AppNavBar";
import BlueprintDarkModeContainer, {
  useDarkMode,
} from "./components/core/BlueprintDarkModeContainer";
import composeContexts from "./components/core/composeContexts";
import useChangeHooks from "./components/hooks/useChangeHooks";
import { useGlobalHotkeys } from "./components/hooks/useGlobalHotkeys";
import OverflowScrollContainer from "./components/OverflowScrollContainer";
import { RDFGraphContext } from "./components/rdf/RDFGraphContext";
import RDFModelTree from "./components/rdf/RDFModelTree";
import ResultCodeTree from "./components/result-code/ResultCodeTree";
import { ODKNodeDragAndDropContext } from "./components/survey/useNodeDragAndDrop";
import XLSFormSurvey from "./components/survey/XLSFormSurvey";
import XLSFormWorkbook from "./components/table/XLSFormWorkbook";
import useViewOptionsButton from "./components/useViewOptionsButton";
import { ODKSurveyContext } from "./lib/ODKSurveyContext";
import { UndoContext } from "./lib/undo/UndoContext";
import useUndoHistory from "./lib/undo/useUndoHistory";
import { createSurveySchemaFromXLSForm } from "./xlsform-simple-schema/functions/schema-creation/createSurveySchemaFromXLSForm";

enableAllPlugins();
enablePatches();

const SurveyEditor = {
  ODKSurveyContext,
  UndoContext,
  RDFGraphContext,
  ODKNodeDragAndDropContext,
  createSurveySchemaFromXLSForm,
  useUndoHistory,
  useDarkMode,
  composeContexts,
  useChangeHooks,
  useGlobalHotkeys,
  useViewOptionsButton,
  AppEmptyState,
  AppNavBar,
  BlueprintDarkModeContainer,
  OverflowScrollContainer,
  RDFModelTree,
  ResultCodeTree,
  XLSFormSurvey,
  XLSFormWorkbook,
};

export * from "./xlsform-simple-schema/index";

export default SurveyEditor;
