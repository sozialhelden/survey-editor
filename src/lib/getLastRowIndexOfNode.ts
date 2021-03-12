import { XLSForm } from "../xlsform-simple-schema";
import { isGroupNode, ODKNode } from "../xlsform-simple-schema/types/ODKNode";

export default function getLastRowIndexOfNode(xlsForm: XLSForm, node: ODKNode) {
  const isGroup = isGroupNode(node);

  if (!isGroup) {
    return node.rowIndex;
  }

  const hasChildren = node.children.length > 0;
  // The end_group or end_repeat marker is associated to the node, too.
  const indexOfGroupOrRepeatEnd = hasChildren
    ? xlsForm.flatNodes.findIndex((n, i) => i > node.rowIndex && n === node)
    : -1;
  if (hasChildren && indexOfGroupOrRepeatEnd === -1) {
    throw new Error(
      "Node has children, but its end marker row could not be found in the ‘survey’ sheet. Please ensure the node is actually part of the survey."
    );
  }
  return indexOfGroupOrRepeatEnd;
}
