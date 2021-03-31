import { ODKNode } from "./ODKNode";

export function describeNode(node: ODKNode) {
  return node?.row.name || `node in row ${node.rowIndex}`;
}
