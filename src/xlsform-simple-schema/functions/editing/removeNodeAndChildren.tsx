import { ODKNode } from "../../types/ODKNode";
import { XLSForm } from "../../types/XLSForm";
import getLastRowIndexOfNode from "../getLastRowIndexOfNode";
import spliceRowsInWorksheet from "./spliceRowsInWorksheet";

/** Removes a field's row (and all descendent field rows if it is a group or repeat) */

export function removeNodeAndChildren(xlsForm: XLSForm, node: ODKNode) {
  const numberOfRowsToRemove =
    getLastRowIndexOfNode(xlsForm, node) - node.rowIndex + 1;
  const { rowIndex } = node;
  const newXLSForm = spliceRowsInWorksheet(xlsForm, "survey", [
    {
      rowIndex,
      numberOfRowsToRemove,
      rowsToAdd: [],
    },
  ]);
  return newXLSForm;
}
