import { Patch } from "../../../lib/undo/useUndoHistory";
import { ODKNode } from "../../types/ODKNode";
import { XLSForm } from "../../types/XLSForm";
import findOrReplaceFieldReferences from "./findOrReplaceFieldReferences";
import spliceRowsInWorksheet from "./spliceRowsInWorksheet";

/**
 * Renames a field in the XLSForm model.
 * @returns a new XLSForm reference with the renamed field.
 */

export function renameNode(
  previousState: XLSForm,
  node: ODKNode,
  newName: string
): [nextState: XLSForm, patches: Patch[], inversePatches: Patch[]] {
  let finalNextState = previousState;
  const finalPatches = [];
  const finalInversePatches = [];

  findOrReplaceFieldReferences(previousState, node, newName).forEach(
    ({ index: rowIndex, row }) => {
      const [nextState, patches, inversePatches] = spliceRowsInWorksheet(
        finalNextState,
        "survey",
        [
          {
            rowIndex,
            numberOfRowsToRemove: 1,
            rowsToAdd: [{ ...row }],
          },
        ]
      );
      finalPatches.push(...patches);
      finalInversePatches.push(...inversePatches);
      finalNextState = nextState;
    }
  );

  const [nextState, patches, inversePatches] = spliceRowsInWorksheet(
    finalNextState,
    "survey",
    [
      {
        rowIndex: node.rowIndex,
        numberOfRowsToRemove: 1,
        rowsToAdd: [{ ...node.row, name: newName }],
      },
    ]
  );
  finalNextState = nextState;
  finalPatches.push(...patches);
  finalInversePatches.push(...inversePatches);

  return [finalNextState, finalPatches, finalInversePatches];
}
