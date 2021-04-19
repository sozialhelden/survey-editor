import { isEqual } from "lodash";
import { ODKNode } from "../../types/ODKNode";
import { XLSForm } from "../../types/XLSForm";
import getLastRowIndexOfNode from "../getLastRowIndexOfNode";
import { getAncestors } from "../odk-formulas/evaluation/XPath";
import spliceRowsInWorksheet, {
  RowSpliceOperation,
} from "./spliceRowsInWorksheet";

/**
 * Moves a node to a new position (before another field).
 *
 * @returns A new `XLSForm` with patches/inverse patches, or `false` if you try to move a group node
 *   into itself.
 */
export function moveNode({
  xlsForm,
  sourceNode,
  destinationNode,
}: {
  xlsForm: XLSForm;
  sourceNode: ODKNode;
  destinationNode: ODKNode;
}) {
  if (
    getAncestors(destinationNode, xlsForm.rootSurveyGroup)?.find((ancestor) =>
      isEqual(ancestor, sourceNode)
    )
  ) {
    return false;
  }

  const lastRowIndexOfSourceNode = getLastRowIndexOfNode(xlsForm, sourceNode);
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

  return spliceRowsInWorksheet(xlsForm, "survey", [
    insertOperation,
    removeOperation,
  ]);
}
