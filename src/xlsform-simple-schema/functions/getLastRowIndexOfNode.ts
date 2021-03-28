import { isEqual } from "lodash";
import { isGroupNode, ODKNode } from "../types/ODKNode";
import { XLSForm } from "../types/XLSForm";

/**
 * Returns the last row index of a given node in the given XLSForm. For normal fields, this is the
 * field's row index, for groups/repeats, this is the `end_group` or `end_repeat` row index.
 */
export default function getLastRowIndexOfNode(xlsForm: XLSForm, node: ODKNode) {
  const isGroup = isGroupNode(node);

  if (!isGroup) {
    return node.rowIndex;
  }
  // The end_group or end_repeat marker is associated to the node, too.
  const indexOfGroupOrRepeatEnd = xlsForm.flatNodes.findIndex(
    (n, i) => i > node.rowIndex && isEqual(n, node)
  );
  return indexOfGroupOrRepeatEnd;
}
