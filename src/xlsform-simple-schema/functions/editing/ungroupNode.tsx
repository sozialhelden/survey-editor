import { ODKNode } from "../../types/ODKNode";
import { XLSForm } from "../../types/XLSForm";
import getLastRowIndexOfNode from "../getLastRowIndexOfNode";
import spliceRowsInWorksheet from "./spliceRowsInWorksheet";

/**
 * Remove a given group/repeat nesting, causing the nodes to be moved one hierarchy level
 * higher.
 */
export function ungroupNode({
  node,
  xlsForm,
}: {
  node: ODKNode;
  xlsForm: XLSForm;
}) {
  const firstIndex = node.rowIndex;
  const lastIndex = getLastRowIndexOfNode(xlsForm, node);
  return spliceRowsInWorksheet(xlsForm, "survey", [
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
}
