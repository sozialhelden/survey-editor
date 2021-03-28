import { ODKNode } from "./ODKNode";
import { assertValidQuestionRow } from "./RowTypes";

/** Throws an error of the given untyped object is not a valid ODK Node. */
export function assertIsODKNode(node: any): asserts node is ODKNode {
  const error = () => {
    throw new Error("Given data is not a valid ODK node.");
  };
  if (typeof node !== "object") {
    error();
  }

  assertValidQuestionRow(node.row);
  if (
    typeof node.type !== "string" ||
    !(node.typeParameters instanceof Array) ||
    !node.typeParameters.every((p: unknown) => typeof p === "string") ||
    typeof node.indentationLevel !== "number" ||
    typeof node.rowIndex !== "number" ||
    (node.resultIsInvalid !== undefined &&
      typeof node.resultIsInvalid !== "boolean")
  ) {
    error();
  }
  node.children.forEach(assertIsODKNode);
}
