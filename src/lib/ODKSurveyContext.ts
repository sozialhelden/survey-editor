import * as React from "react";
import SimpleSchema from "simpl-schema";
import { XLSForm } from "../xlsform-simple-schema";
import ODKFormulaEvaluationContext, {
  getEmptyContext,
} from "../xlsform-simple-schema/functions/odk-formulas/evaluation/ODKFormulaEvaluationContext";
import useChangeHooks from "./useChangeHooks";

export interface IODKSurveyContext {
  schema?: SimpleSchema;
  context?: ODKFormulaEvaluationContext;
  language?: string;
  languageName?: string;
  languageCode?: string;
  debug: boolean;
  xlsForm?: XLSForm;
}

export const ODKSurveyContext = React.createContext<
  IODKSurveyContext & ReturnType<typeof useChangeHooks>
>({
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
});
