import { createLocalizedString } from "../functions/editing/createLocalizedString";
import { ODKNode } from "./ODKNode";

export let i = 0;

export function getEmptyNode(
  languages: Readonly<Set<string>>
): Readonly<ODKNode> {
  i += 1;
  return Object.freeze({
    row: {
      type: "text",
      name: `empty_node_${i}`,
      label: createLocalizedString(`Empty node ${i}`, languages),
    },
    type: "text",
    typeParameters: [],
    children: [],
    indentationLevel: 0,
    rowIndex: -2,
  });
}
