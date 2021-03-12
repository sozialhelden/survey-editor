import { Code } from "@blueprintjs/core";
import * as React from "react";
import { useEffect, useState } from "react";
import { FieldProps } from "../survey/FieldProps";
import { AppToaster } from "../toaster";
import {
  ChoicesWorksheet,
  loadXLSFormFromRows,
  SettingsWorksheet,
  SurveyWorksheet,
  WorksheetName,
  XLSForm,
} from "../xlsform-simple-schema";
import getEvaluatedXLSFormResult from "../xlsform-simple-schema/functions/evaluateNodeAndChildren";
import ODKFormulaEvaluationContext, {
  getEmptyContext,
  knownLiteralsWithoutDollarSign,
} from "../xlsform-simple-schema/functions/odk-formulas/evaluation/ODKFormulaEvaluationContext";
import { getNodeIndexPath } from "../xlsform-simple-schema/functions/odk-formulas/evaluation/XPath";
import patchXLSFormCell from "../xlsform-simple-schema/functions/patchXLSFormCell";
import { isGroupNode, ODKNode } from "../xlsform-simple-schema/types/ODKNode";
import { QuestionRow } from "../xlsform-simple-schema/types/RowTypes";
import { createEmptyFieldRow } from "./createUntitledFieldRow";
import { createEmptyGroupRows } from "./createUntitledGroupRows";
import findOrReplaceFieldReferences from "./findOrReplaceFieldReferences";
import getLastRowIndexOfNode from "./getLastRowIndexOfNode";

type RowSpliceOperation = {
  rowIndex: number;
  numberOfRowsToRemove: number;
  rowsToAdd: any[];
};

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
      console.log("Setting up new evaluation context", newContext);
      return newContext;
    });
  }, [xlsForm, xlsForm?.rootSurveyGroup]);

  const onChangeAnswer = React.useCallback(
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
        patchXLSFormCell({
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

  const onSpliceRows = React.useCallback(
    (worksheetName: WorksheetName, operations: RowSpliceOperation[]) => {
      if (!xlsForm || !context) {
        return;
      }

      setXLSForm((xlsForm: XLSForm | undefined) => {
        const surveyWorksheet = xlsForm?.worksheets.survey;
        if (!surveyWorksheet) {
          throw new Error("No survey worksheet defined.");
        }
        const worksheet = xlsForm?.worksheets[worksheetName];
        if (!worksheet) {
          return xlsForm;
        }
        const newRows = [...worksheet?.rows];
        operations.forEach(({ rowIndex, numberOfRowsToRemove, rowsToAdd }) =>
          newRows.splice(rowIndex, numberOfRowsToRemove, ...rowsToAdd)
        );
        const newWorksheet = { ...worksheet, rows: newRows };
        return loadXLSFormFromRows(
          worksheetName === "survey"
            ? (newWorksheet as SurveyWorksheet)
            : surveyWorksheet,
          xlsForm?.worksheets.settings?.rows[0]?.default_language ||
            "English (en)",
          worksheetName === "settings"
            ? (newWorksheet as SettingsWorksheet)
            : xlsForm?.worksheets.settings,
          worksheetName === "choices"
            ? (newWorksheet as ChoicesWorksheet)
            : xlsForm?.worksheets.choices
        );
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
      const numberOfRowsToRemove =
        getLastRowIndexOfNode(xlsForm, node) - node.rowIndex + 1;
      const { rowIndex } = node;
      onSpliceRows("survey", [
        {
          rowIndex,
          numberOfRowsToRemove,
          rowsToAdd: [],
        },
      ]);
    },
    [context, onSpliceRows, xlsForm]
  );

  const onRenameNode = React.useCallback(
    (node: ODKNode, newName: string) => {
      if (!xlsForm || !context) {
        return;
      }
      findOrReplaceFieldReferences(xlsForm, node, newName).forEach(
        ({ index: rowIndex, row }) => {
          onSpliceRows("survey", [
            {
              rowIndex,
              numberOfRowsToRemove: 1,
              rowsToAdd: [{ ...row }],
            },
          ]);
        }
      );
      onSpliceRows("survey", [
        {
          rowIndex: node.rowIndex,
          numberOfRowsToRemove: 1,
          rowsToAdd: [{ ...node.row, name: newName }],
        },
      ]);
    },
    [context, onSpliceRows, xlsForm]
  );

  const onNestNode = React.useCallback(
    (node: ODKNode) => {
      if (!xlsForm || !context) {
        return;
      }
      const { beginMarkerRow, endMarkerRow } = createEmptyGroupRows(xlsForm);
      const firstIndex = node.rowIndex;
      const lastIndex = getLastRowIndexOfNode(xlsForm, node);

      onSpliceRows("survey", [
        // Note that splicing changes indexes, so splicing the last row first is important.
        {
          rowIndex: lastIndex + 1,
          numberOfRowsToRemove: 0,
          rowsToAdd: [endMarkerRow],
        },
        {
          rowIndex: firstIndex,
          numberOfRowsToRemove: 0,
          rowsToAdd: [beginMarkerRow],
        },
      ]);
    },
    [context, onSpliceRows, xlsForm]
  );

  const onUngroupNode = React.useCallback(
    (node: ODKNode) => {
      if (!xlsForm || !context) {
        return;
      }
      const firstIndex = node.rowIndex;
      const lastIndex = getLastRowIndexOfNode(xlsForm, node);
      onSpliceRows("survey", [
        // Note that splicing changes indexes, so removing last row first is important.
        {
          rowIndex: lastIndex,
          numberOfRowsToRemove: 1,
          rowsToAdd: [],
        },
        {
          rowIndex: firstIndex,
          numberOfRowsToRemove: 1,
          rowsToAdd: [],
        },
      ]);
    },
    [context, onSpliceRows, xlsForm]
  );

  const onAddNode = React.useCallback(
    ({
      position,
      node,
      group,
    }: {
      position: "before" | "after" | "inside";
      node: ODKNode;
      group: boolean;
    }) => {
      if (!xlsForm || !context) {
        return;
      }
      const row: QuestionRow = createEmptyFieldRow(xlsForm);
      const { beginMarkerRow, endMarkerRow } = createEmptyGroupRows(xlsForm);
      const rowsToInsert = group ? [beginMarkerRow, row, endMarkerRow] : [row];

      let rowIndex = 0;
      const currentNodeIsGroup = isGroupNode(node);
      if (currentNodeIsGroup) {
        rowIndex = {
          after: getLastRowIndexOfNode(xlsForm, node) + 1,
          before: node.rowIndex,
          inside: node.rowIndex + 1,
        }[position];
      } else {
        rowIndex = {
          after: node.rowIndex + 1,
          before: node.rowIndex,
          inside: 0,
        }[position];
      }
      onSpliceRows("survey", [
        {
          rowIndex,
          numberOfRowsToRemove: 0,
          rowsToAdd: rowsToInsert,
        },
      ]);
    },
    [context, onSpliceRows, xlsForm]
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
      const lastRowIndexOfSourceNode = getLastRowIndexOfNode(
        xlsForm,
        sourceNode
      );
      const numberOfSourceNodeRows =
        lastRowIndexOfSourceNode - sourceNode.rowIndex + 1;
      const rowsOfSourceNode = [...xlsForm.worksheets.survey.rows].slice(
        sourceNode.rowIndex,
        sourceNode.rowIndex + numberOfSourceNodeRows
      );
      const destinationIsBeforeSource =
        destinationNode.rowIndex < sourceNode.rowIndex;
      const insertOperation: RowSpliceOperation = {
        rowIndex: destinationNode.rowIndex,
        numberOfRowsToRemove: 0,
        rowsToAdd: rowsOfSourceNode,
      };
      const removeOperation: RowSpliceOperation = {
        rowIndex:
          sourceNode.rowIndex +
          (destinationIsBeforeSource ? numberOfSourceNodeRows : 0),
        numberOfRowsToRemove: numberOfSourceNodeRows,
        rowsToAdd: [],
      };

      onSpliceRows("survey", [insertOperation, removeOperation]);
    },
    [context, language, onSpliceRows, xlsForm]
  );

  return {
    context,
    setContext,
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
