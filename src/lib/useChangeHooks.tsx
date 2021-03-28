import * as React from "react";
import { useEffect, useState } from "react";
import HighlightedExpression from "../components/HighlightedExpression/HighlightedODKExpression";
import { FieldProps } from "../survey/FieldProps";
import { AppToaster } from "../toaster";
import { WorksheetName, XLSForm } from "../xlsform-simple-schema";
import { addNodeToXLSForm } from "../xlsform-simple-schema/functions/editing/addNodeToXLSForm";
import { moveNode } from "../xlsform-simple-schema/functions/editing/moveNode";
import { nestNode } from "../xlsform-simple-schema/functions/editing/nestNode";
import patchXLSFormCell from "../xlsform-simple-schema/functions/editing/patchXLSFormCell";
import { removeNodeAndChildren } from "../xlsform-simple-schema/functions/editing/removeNodeAndChildren";
import { renameNode } from "../xlsform-simple-schema/functions/editing/renameNode";
import spliceRowsInWorksheet, {
  RowSpliceOperation,
} from "../xlsform-simple-schema/functions/editing/spliceRowsInWorksheet";
import { ungroupNode } from "../xlsform-simple-schema/functions/editing/ungroupNode";
import createLiteralExpressionFromValue from "../xlsform-simple-schema/functions/odk-formulas/evaluation/createLiteralExpressionFromValue";
import getEvaluatedXLSFormResult from "../xlsform-simple-schema/functions/odk-formulas/evaluation/evaluateNodeAndChildren";
import ODKFormulaEvaluationContext, {
  getEmptyEvaluationContext,
  knownLiteralsWithoutDollarSign,
} from "../xlsform-simple-schema/functions/odk-formulas/evaluation/ODKFormulaEvaluationContext";
import { getNodeIndexPath } from "../xlsform-simple-schema/functions/odk-formulas/evaluation/XPath";
import { ODKNode } from "../xlsform-simple-schema/types/ODKNode";

/** Custom React hooks to change / edit the current survey model. */
export default function useChangeHooks({
  xlsForm,
  setXLSForm,
  language,
}: {
  /** The XLSForm model to edit */
  xlsForm?: XLSForm;
  /** A React setState method to set a new XLSForm model */
  setXLSForm: (value: React.SetStateAction<XLSForm | undefined>) => void;
  /** Currently set XLSForm language */
  language?: string;
}) {
  const [context, setContext] = useState<ODKFormulaEvaluationContext>();

  /** Sets a new evaluation context whenever the underlying XLSForm changes */
  useEffect(() => {
    if (!xlsForm) {
      setContext(undefined);
      return;
    }

    setContext((context: ODKFormulaEvaluationContext | undefined) => {
      if (context && context.survey === xlsForm.rootSurveyGroup) {
        console.log(
          "Context exists already and survey model has the same identity, keeping context."
        );
        return context;
      }

      const newContext = getEmptyEvaluationContext(xlsForm.rootSurveyGroup);
      newContext.nodesToAnswers = new Map();
      newContext.survey = xlsForm.rootSurveyGroup;
      newContext.stackDepth = 0;
      newContext.knownLiteralsWithoutDollarSign = knownLiteralsWithoutDollarSign;
      getEvaluatedXLSFormResult(xlsForm, newContext);
      console.log("Setting up new evaluation context", newContext);
      return newContext;
    });
  }, [xlsForm, xlsForm?.rootSurveyGroup]);

  /** Use this function to change a survey answer value. */
  const onChangeAnswer = React.useCallback(
    (value: unknown, fieldProps: FieldProps) => {
      AppToaster.show(
        {
          message: (
            <>
              {fieldProps.schemaKey} →{" "}
              <HighlightedExpression
                node={fieldProps.node}
                expression={createLiteralExpressionFromValue(value)}
              />
            </>
          ),
        },
        "changeField"
      );
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

  /** Use this function to change XLSForm cell content. */
  const onChangeCell = React.useCallback(
    (
      worksheetName: WorksheetName,
      rowIndex: number,
      columnName: string,
      value: unknown,
      node?: ODKNode,
      overrideLanguage?: string
    ) => {
      if (!xlsForm || !context) {
        return;
      }
      const languageToUse = overrideLanguage || language;
      if (!languageToUse) {
        return;
      }
      setXLSForm(
        patchXLSFormCell({
          worksheetName,
          xlsForm,
          node,
          rowIndex,
          columnName,
          language: languageToUse,
          value,
          context,
        })
      );
    },
    [xlsForm, context, language, setXLSForm]
  );

  const onSpliceRows = React.useCallback(
    (worksheetName: WorksheetName, operations: RowSpliceOperation[]) => {
      if (!xlsForm || !context) {
        return;
      }

      setXLSForm((xlsForm: XLSForm | undefined) => {
        if (!xlsForm) {
          return;
        }
        return spliceRowsInWorksheet(xlsForm, worksheetName, operations);
      });
    },
    [context, setXLSForm, xlsForm]
  );

  const onRemoveRowAndChildren = React.useCallback(
    (node: ODKNode) => {
      if (!xlsForm || !context) {
        return;
      }
      const indexPath = getNodeIndexPath(node, context);
      if (!indexPath) {
        throw new Error(
          "Can’t remove a node that isn’t reachable from survey root. Please ensure the node is actually part of the survey."
        );
      }

      setXLSForm(removeNodeAndChildren(xlsForm, node));
    },
    [context, setXLSForm, xlsForm]
  );

  const onRenameNode = React.useCallback(
    (node: ODKNode, newName: string) => {
      if (!xlsForm) {
        return;
      }

      setXLSForm(renameNode(xlsForm, node, newName));
    },
    [setXLSForm, xlsForm]
  );

  const onNestNode = React.useCallback(
    (node: ODKNode) => {
      if (!xlsForm) {
        return;
      }
      setXLSForm(nestNode(xlsForm, node));
    },
    [setXLSForm, xlsForm]
  );

  const onUngroupNode = React.useCallback(
    (node: ODKNode) => {
      if (!xlsForm) {
        return;
      }
      setXLSForm(ungroupNode({ node, xlsForm }));
    },
    [setXLSForm, xlsForm]
  );

  const onAddNode = React.useCallback(
    ({
      position,
      node,
      group,
    }: {
      position: "before" | "after" | "inside";
      node?: ODKNode;
      group: boolean;
    }) => {
      if (!xlsForm) {
        return;
      }

      setXLSForm(addNodeToXLSForm({ xlsForm, group, node, position }));
    },
    [setXLSForm, xlsForm]
  );

  const onMoveNode = React.useCallback(
    ({
      sourcePath,
      sourceNode,
      destinationNode,
      position,
    }: {
      sourcePath: string;
      sourceNode: ODKNode;
      destinationNode: ODKNode;
      position: "before" | "after" | "inside";
    }) => {
      if (!xlsForm || !context || !language) {
        return;
      }

      const onError = (message: string) =>
        AppToaster.show(
          {
            intent: "warning",
            icon: "error",
            message,
          },
          "cant-drop-node-on-itself"
        );

      setXLSForm(
        moveNode({
          xlsForm,
          evaluationContext: context,
          sourceNode,
          destinationNode,
          onError,
        })
      );
    },
    [context, language, setXLSForm, xlsForm]
  );

  return {
    evaluationContext: context,
    setEvaluationContext: setContext,
    setXLSForm,
    onChangeAnswer,
    onChangeCell,
    onMoveNode,
    onSpliceRows,
    onRemoveRowAndChildren,
    onRenameNode,
    onNestNode,
    onUngroupNode,
    onAddNode,
  };
}
