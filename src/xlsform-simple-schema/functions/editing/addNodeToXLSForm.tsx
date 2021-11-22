import { mergeCommands } from "../../../lib/undo/mergeCommands";
import { fieldTypeNames } from "../../field-types/fieldTypeNames";
import { isGroupNode, ODKNode } from "../../types/ODKNode";
import { QuestionRow } from "../../types/RowTypes";
import { XLSForm } from "../../types/XLSForm";
import getLastRowIndexOfNode from "../getLastRowIndexOfNode";
import addExampleChoices from "./addExampleChoices";
import { createEmptyFieldRow } from "./createUntitledFieldRow";
import { createEmptyGroupRows } from "./createUntitledGroupRows";
import spliceRowsInWorksheet from "./spliceRowsInWorksheet";

/**
 * Add a new unnamed field/group/repeat at given position (next to, or inside of another field)
 */
export function addNodeToXLSForm({
  xlsForm,
  group,
  position,
  relativeToNode,
  fieldType,
  name,
  groupName,
}: {
  xlsForm: XLSForm;
  group: boolean;
  relativeToNode?: ODKNode;
  position: "after" | "before" | "inside";
  fieldType: keyof typeof fieldTypeNames;
  name?: string;
  groupName?: string;
}) {
  const row: QuestionRow = createEmptyFieldRow(xlsForm, fieldType);
  if (name) {
    row.name = name;
  }
  const { beginMarkerRow, endMarkerRow } = createEmptyGroupRows(xlsForm);
  if (groupName) {
    beginMarkerRow.name = groupName;
  }
  const rowsToInsert = group ? [beginMarkerRow, row, endMarkerRow] : [row];

  let rowIndex = 0;
  const currentNodeIsGroup = relativeToNode && isGroupNode(relativeToNode);
  if (relativeToNode && currentNodeIsGroup) {
    rowIndex = {
      after: getLastRowIndexOfNode(xlsForm, relativeToNode) + 1,
      before: relativeToNode.rowIndex,
      inside: relativeToNode.rowIndex + 1,
    }[position];
  } else {
    rowIndex = {
      after: relativeToNode ? relativeToNode.rowIndex + 1 : 0,
      before: relativeToNode ? relativeToNode.rowIndex : 0,
      inside: 0,
    }[position];
  }

  const commands = [];
  if (
    fieldType?.match(/^select/) &&
    !xlsForm?.worksheets.choices?.rows.length
  ) {
    commands.push(addExampleChoices(xlsForm));
  }

  commands.push(
    spliceRowsInWorksheet(commands[0]?.[0] || xlsForm, "survey", [
      {
        rowIndex: rowIndex,
        numberOfRowsToRemove: 0,
        rowsToAdd: rowsToInsert,
      },
    ])
  );

  return mergeCommands(commands);
}
