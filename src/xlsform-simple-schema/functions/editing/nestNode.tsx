import { ODKNode } from "../../types/ODKNode";
import { XLSForm } from "../../types/XLSForm";
import getLastRowIndexOfNode from "../getLastRowIndexOfNode";
import { createEmptyGroupRows } from "./createUntitledGroupRows";
import spliceRowsInWorksheet from "./spliceRowsInWorksheet";

/** Nests a given node in a new, untitled group. */

export function nestNode(xlsForm: XLSForm, node: ODKNode) {
  const { beginMarkerRow, endMarkerRow } = createEmptyGroupRows(xlsForm);
  const firstIndex = node.rowIndex;
  const lastIndex = getLastRowIndexOfNode(xlsForm, node);
  const newXLSForm = spliceRowsInWorksheet(xlsForm, "survey", [
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
  return newXLSForm;
}
