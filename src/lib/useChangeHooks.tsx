import * as React from "react";
import { Code } from "@blueprintjs/core";
import { useEffect, useState } from "react";
import { FieldProps } from "../survey/FieldProps";
import { AppToaster } from "../toaster";
import XLSForm, { WorksheetName } from "../xlsform-simple-schema";
import getEvaluatedXLSFormResult from "../xlsform-simple-schema/functions/evaluateNodeAndChildren";
import ODKFormulaEvaluationContext, {
  getEmptyContext,
  knownLiteralsWithoutDollarSign,
} from "../xlsform-simple-schema/functions/odk-formulas/evaluation/ODKFormulaEvaluationContext";
import patchXLSForm from "../xlsform-simple-schema/functions/patchXLSForm";
import { ODKNode } from "../xlsform-simple-schema/types/ODKNode";

export default function useChangeHooks({
  xlsForm,
  language,
  setXLSForm,
}: {
  xlsForm?: XLSForm;
  language?: string;
  setXLSForm: (value: React.SetStateAction<XLSForm | undefined>) => void;
}) {
  const [context, setContext] = useState<ODKFormulaEvaluationContext>();

  useEffect(() => {
    if (!xlsForm) {
      setContext(undefined);
      return;
    }

    setContext((context) => {
      if (context && context.survey === xlsForm.rootSurveyGroup) {
        console.log(
          "Context exists already and survey is the same, keeping context."
        );
        return context;
      }

      const newContext = getEmptyContext(xlsForm.rootSurveyGroup);
      newContext.nodesToAnswers = new Map();
      newContext.survey = xlsForm.rootSurveyGroup;
      newContext.stackDepth = 0;
      newContext.knownLiteralsWithoutDollarSign = knownLiteralsWithoutDollarSign;
      getEvaluatedXLSFormResult(xlsForm, newContext);
      console.log("Setting up new context", newContext);
      return newContext;
    });
  }, [xlsForm, xlsForm?.rootSurveyGroup]);

  const onChange = React.useCallback(
    (value: unknown, fieldProps: FieldProps) => {
      AppToaster.clear();
      AppToaster.show({
        message: (
          <>
            {fieldProps.schemaKey} → <Code>{JSON.stringify(value)}</Code>
          </>
        ),
      });
      if (xlsForm && context) {
        setContext((context) => {
          if (!context) {
            return;
          }
          const nodesToAnswers = new Map<ODKNode, unknown>(
            context.nodesToAnswers.entries()
          );
          nodesToAnswers.set(fieldProps.node, value);
          const newContext: ODKFormulaEvaluationContext = {
            ...context,
            nodesToAnswers,
          };
          getEvaluatedXLSFormResult(xlsForm, newContext);
          return newContext;
        });
      }
    },
    [context, xlsForm]
  );

  const onChangeCell = React.useCallback(
    (
      worksheetName: WorksheetName,
      rowIndex: number,
      columnName: string,
      value: unknown,
      node?: ODKNode
    ) => {
      if (!xlsForm || !context || !language) {
        return;
      }
      setXLSForm(
        patchXLSForm({
          worksheetName,
          xlsForm,
          node,
          rowIndex,
          columnName,
          language,
          value,
          context,
        })
      );
    },
    [xlsForm, context, language, setXLSForm]
  );

  return {
    context,
    setContext,
    onChange,
    onChangeCell,
  };
}
