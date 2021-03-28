import * as React from "react";
import SimpleSchema from "simpl-schema";
import { XLSForm } from "../xlsform-simple-schema";
import ODKFormulaEvaluationContext, {
  getEmptyContext,
} from "../xlsform-simple-schema/functions/odk-formulas/evaluation/ODKFormulaEvaluationContext";
import useChangeHooks from "./useChangeHooks";

/** Provides the current XLSForm survey, its evaluation results, and its metadata. */
export type ODKSurveyContextType = {
  /** A schema that allows to validate answer results for the current survey. */
  schema?: SimpleSchema;
  context?: ODKFormulaEvaluationContext;

  /** The currently selected language used for survey display. */
  language?: string;

  /** Name of the currently selected language used for survey display (e.g. 'Deutsch'). */
  languageName?: string;

  /** Language tag of the currently selected language used for survey display (e.g. 'de-AT'). */
  languageCode?: string;
  debug: boolean;
  xlsForm?: XLSForm;
} & ReturnType<typeof useChangeHooks>;

/**
 * Provides the current XLSForm survey, its evaluation results, its metadata, and functions to edit
 * the survey.
 */
export const ODKSurveyContext = React.createContext<ODKSurveyContextType>({
  schema: new SimpleSchema({}),
  context: getEmptyContext(),
  language: "English (en)",
  languageCode: "en",
  languageName: "English",
  debug: true,
  xlsForm: undefined,
  setContext: () => {},
  onChangeAnswer: () => {},
  onChangeCell: () => {},
  onMoveNode: () => {},
  onSpliceRows: () => {},
  onRemoveRowAndChildren: () => {},
  onRenameNode: () => {},
  onNestNode: () => {},
  onUngroupNode: () => {},
  onAddNode: () => {},
});
