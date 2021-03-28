import { ODKNode } from "../../types/ODKNode";
import { XLSForm } from "../../types/XLSForm";
import findOrReplaceFieldReferences from "./findOrReplaceFieldReferences";
import spliceRowsInWorksheet from "./spliceRowsInWorksheet";

/**
 * Renames a field in the XLSForm model.
 * @returns a new XLSForm reference with the renamed field.
 */

export function renameNode(xlsForm: XLSForm, node: ODKNode, newName: string) {
  let newXLSForm = xlsForm;

  findOrReplaceFieldReferences(xlsForm, node, newName).forEach(
    ({ index: rowIndex, row }) => {
      newXLSForm = spliceRowsInWorksheet(xlsForm, "survey", [
        {
          rowIndex,
          numberOfRowsToRemove: 1,
          rowsToAdd: [{ ...row }],
        },
      ]);
    }
  );

  newXLSForm = spliceRowsInWorksheet(xlsForm, "survey", [
    {
      rowIndex: node.rowIndex,
      numberOfRowsToRemove: 1,
      rowsToAdd: [{ ...node.row, name: newName }],
    },
  ]);

  return newXLSForm;
}
