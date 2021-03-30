import { fieldTypeNames } from "../../field-types/fieldTypeNames";
import { isGroupNode, ODKNode } from "../../types/ODKNode";
import { QuestionRow } from "../../types/RowTypes";
import { XLSForm } from "../../types/XLSForm";
import getLastRowIndexOfNode from "../getLastRowIndexOfNode";
import { createEmptyFieldRow } from "./createUntitledFieldRow";
import { createEmptyGroupRows } from "./createUntitledGroupRows";
import spliceRowsInWorksheet from "./spliceRowsInWorksheet";

/**
 * Add a new unnamed field/group/repeat at given position (next to, or inside of another field)
 */
export function addNodeToXLSForm({
  xlsForm,
  group,
  node,
  position,
  fieldType,
}: {
  xlsForm: XLSForm;
  group: boolean;
  node?: ODKNode;
  position: "after" | "before" | "inside";
  fieldType: keyof typeof fieldTypeNames;
}) {
  const row: QuestionRow = createEmptyFieldRow(xlsForm, fieldType);
  const { beginMarkerRow, endMarkerRow } = createEmptyGroupRows(xlsForm);
  const rowsToInsert = group ? [beginMarkerRow, row, endMarkerRow] : [row];

  let rowIndex = 0;
  const currentNodeIsGroup = node && isGroupNode(node);
  if (node && currentNodeIsGroup) {
    rowIndex = {
      after: getLastRowIndexOfNode(xlsForm, node) + 1,
      before: node.rowIndex,
      inside: node.rowIndex + 1,
    }[position];
  } else {
    rowIndex = {
      after: node ? node.rowIndex + 1 : 0,
      before: node ? node.rowIndex : 0,
      inside: 0,
    }[position];
  }
  return spliceRowsInWorksheet(xlsForm, "survey", [
    {
      rowIndex,
      numberOfRowsToRemove: 0,
      rowsToAdd: rowsToInsert,
    },
  ]);
}
