import * as React from "react";
import { useEffect, useState } from "react";
import HighlightedExpression from "../components/HighlightedExpression/HighlightedODKExpression";
import { FieldProps } from "../survey/FieldProps";
import { AppToaster } from "../toaster";
import { WorksheetName, XLSForm } from "../xlsform-simple-schema";
import { fieldTypeNames } from "../xlsform-simple-schema/field-types/fieldTypeNames";
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
import { describeNode } from "../xlsform-simple-schema/types/describeNode";
import { ODKNode } from "../xlsform-simple-schema/types/ODKNode";
import { Patch } from "./undo/useUndoHistory";

/** Custom React hooks to change / edit the current survey model. */
export default function useChangeHooks({
  xlsForm,
  setXLSFormWithPatches,
  language,
  debug,
}: {
  /** The XLSForm model to edit */
  xlsForm?: XLSForm;
  /** A React setState method to set a new XLSForm model */
  setXLSFormWithPatches: (
    description: string,
    value: XLSForm | undefined,
    patches: Patch[],
    inversePatches: Patch[]
  ) => void;
  /** Currently set XLSForm language */
  language?: string;
  /** `true` if in development mode, `false` if not. */
  debug: boolean;
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
          "Context exists already and survey model is identical, keeping context."
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
      if (debug) {
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
      }
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
    [context, debug, xlsForm]
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
      setXLSFormWithPatches(
        `Change \`${columnName}\` cell in \`${worksheetName}\` worksheet (Row #${rowIndex})`,
        ...patchXLSFormCell({
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
    [xlsForm, context, language, setXLSFormWithPatches]
  );

  const onSpliceRows = React.useCallback(
    (
      worksheetName: WorksheetName,
      operations: RowSpliceOperation[],
      description: string
    ) => {
      if (!xlsForm || !context) {
        return;
      }

      // const removeCount = sumBy(operations, (op) => op.numberOfRowsToRemove);
      // const addCount = sumBy(operations, (op) => op.rowsToAdd.length);
      // const description: string = `Change rows (${addCount} added / ${removeCount} removed)`;
      setXLSFormWithPatches(
        description,
        ...spliceRowsInWorksheet(xlsForm, worksheetName, operations)
      );
    },
    [context, setXLSFormWithPatches, xlsForm]
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

      setXLSFormWithPatches(
        `Remove \`${describeNode(node)}\` node and its children`,
        ...removeNodeAndChildren(xlsForm, node)
      );
    },
    [context, setXLSFormWithPatches, xlsForm]
  );

  const onRenameNode = React.useCallback(
    (node: ODKNode, newName: string) => {
      if (!xlsForm) {
        return;
      }

      setXLSFormWithPatches(
        `Rename \`${describeNode(node)}\` to \`${newName}\``,
        ...renameNode(xlsForm, node, newName)
      );
    },
    [setXLSFormWithPatches, xlsForm]
  );

  const onNestNode = React.useCallback(
    (node: ODKNode) => {
      if (!xlsForm) {
        return;
      }
      setXLSFormWithPatches(
        `Nest \`${describeNode(node)}\``,
        ...nestNode(xlsForm, node)
      );
    },
    [setXLSFormWithPatches, xlsForm]
  );

  const onUngroupNode = React.useCallback(
    (node: ODKNode) => {
      if (!xlsForm) {
        return;
      }
      setXLSFormWithPatches(
        `Ungroup \`${describeNode(node)}\``,
        ...ungroupNode({ node, xlsForm })
      );
    },
    [setXLSFormWithPatches, xlsForm]
  );

  const onAddNode = React.useCallback(
    ({
      position,
      node,
      group,
      fieldType,
    }: {
      position: "before" | "after" | "inside";
      node?: ODKNode;
      group: boolean;
      fieldType: keyof typeof fieldTypeNames;
    }) => {
      if (!xlsForm) {
        return;
      }

      const typeDescription = group ? "group" : `\`${fieldType}\` field`;
      const description = node
        ? `Add new ${typeDescription} ${position} \`${describeNode(node)}\``
        : `Add new ${typeDescription}`;

      setXLSFormWithPatches(
        description,
        ...addNodeToXLSForm({ xlsForm, group, node, position, fieldType })
      );
    },
    [setXLSFormWithPatches, xlsForm]
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

      const moveResult = moveNode({
        xlsForm,
        evaluationContext: context,
        sourceNode,
        destinationNode,
        onError,
      });
      if (moveResult) {
        setXLSFormWithPatches(
          `Move \`${describeNode(sourceNode)}\` before \`${describeNode(
            destinationNode
          )}\``,
          ...moveResult
        );
      }
    },
    [context, language, setXLSFormWithPatches, xlsForm]
  );

  return {
    evaluationContext: context,
    setEvaluationContext: setContext,
    setXLSFormWithPatches,
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
