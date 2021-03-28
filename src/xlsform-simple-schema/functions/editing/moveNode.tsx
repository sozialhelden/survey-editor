import { isEqual } from "lodash";
import { ODKNode } from "../../types/ODKNode";
import { XLSForm } from "../../types/XLSForm";
import getLastRowIndexOfNode from "../getLastRowIndexOfNode";
import ODKFormulaEvaluationContext from "../odk-formulas/evaluation/ODKFormulaEvaluationContext";
import { getAncestors } from "../odk-formulas/evaluation/XPath";
import spliceRowsInWorksheet, {
  RowSpliceOperation,
} from "./spliceRowsInWorksheet";

/** Moves a node to a new position (next to, or inside of another field) */
export function moveNode({
  xlsForm,
  evaluationContext,
  sourceNode,
  destinationNode,
  onError,
}: {
  xlsForm: XLSForm;
  evaluationContext: ODKFormulaEvaluationContext;
  sourceNode: ODKNode;
  destinationNode: ODKNode;
  onError: (message: string) => void;
}) {
  if (
    getAncestors(destinationNode, evaluationContext)?.find((ancestor) =>
      isEqual(ancestor, sourceNode)
    )
  ) {
    onError("Can’t move a node into itself.");
    return;
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
