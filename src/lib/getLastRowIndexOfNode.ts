import { isEqual } from "lodash";
import { XLSForm } from "../xlsform-simple-schema";
import { isGroupNode, ODKNode } from "../xlsform-simple-schema/types/ODKNode";

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
