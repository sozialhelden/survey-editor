import * as React from "react";
import SimpleSchema from "simpl-schema";
import { XLSForm } from "../xlsform-simple-schema";
import ODKFormulaEvaluationContext, {
  getEmptyEvaluationContext,
} from "../xlsform-simple-schema/functions/odk-formulas/evaluation/ODKFormulaEvaluationContext";
import useChangeHooks from "./useChangeHooks";

/** Provides the current XLSForm survey, its evaluation results, and its metadata. */
export type ODKSurveyContextType = {
  /** `true` if the survey should show editing/debugging UI features, `false` otherwise. */
  debug: boolean;

  /** The current survey’s XLSForm model. */
  xlsForm?: XLSForm;

  /** A schema that allows to validate answer results for the current survey. */
  schema?: SimpleSchema;

  /** The ODK/XLSForm evaluation context for the survey. Contains evaluated answers and formulas. */
  evaluationContext?: ODKFormulaEvaluationContext;

  /** The currently selected language used for survey display. */
  language?: string;

  /** Name of the currently selected language used for survey display (e.g. 'Deutsch'). */
  languageName?: string;

  /** Language tag of the currently selected language used for survey display (e.g. 'de-AT'). */
  languageCode?: string;
} & ReturnType<typeof useChangeHooks>;

/**
 * Provides the current XLSForm survey, its evaluation results, its metadata, and functions to edit
 * the survey.
 */
export const ODKSurveyContext = React.createContext<ODKSurveyContextType>({
  schema: new SimpleSchema({}),
  debug: true,
  xlsForm: undefined,

  evaluationContext: getEmptyEvaluationContext(),

  language: "English (en)",
  languageCode: "en",
  languageName: "English",

  setEvaluationContext: () => {},
  setXLSFormWithPatches: () => {},
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
