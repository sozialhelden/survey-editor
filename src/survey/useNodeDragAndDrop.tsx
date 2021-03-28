import * as React from "react";
import ODKFormulaEvaluationContext from "../xlsform-simple-schema/functions/odk-formulas/evaluation/ODKFormulaEvaluationContext";
import { getNodeAbsolutePathString } from "../xlsform-simple-schema/functions/odk-formulas/evaluation/XPath";
import { ODKNode } from "../xlsform-simple-schema/types/ODKNode";
import { assertValidQuestionRow } from "../xlsform-simple-schema/types/RowTypes";

export type DropNodeHandler = (options: {
  sourceNode: ODKNode;
  destinationNode: ODKNode;
  sourcePath: string;
  position: "before" | "after" | "inside";
}) => void;

export const ODKNodeDragAndDropContext = React.createContext<{
  onDropNode: DropNodeHandler;
}>({ onDropNode: () => {} });

function assertIsODKNode(node: any): asserts node is ODKNode {
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
/**
 * @returns a set of props that you can add to a React node to add field drag & drop features to
 * it. Makes the element draggable, and allows to drag ODK nodes over and onto the element.
 */

export function useNodeDragAndDrop({
  context,
  node,
  setIsDraggedOver,
}: {
  context?: ODKFormulaEvaluationContext;
  /** The ODK node model that will be transferred when dragging & dropping */
  node: ODKNode;
  /** The source evaluation context in which to find the source node */
  evaluationContext?: ODKFormulaEvaluationContext;
  /**
   * A React state setter method to allow the UI to show that it is a potential drop target while
   * dragging over it
   */
  setIsDraggedOver: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { onDropNode } = React.useContext(ODKNodeDragAndDropContext);

  const onDragStart = React.useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      if (!context) {
        return;
      }
      event.dataTransfer.setData(
        "application/json",
        JSON.stringify({
          sourceNode: node,
          sourcePath: getNodeAbsolutePathString(node, context),
        })
      );
    },
    [context, node]
  );

  const onDragOver = React.useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      if (!context) {
        return;
      }
      setIsDraggedOver(true);
    },
    [context, setIsDraggedOver]
  );

  const onDrop = React.useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      if (!context) {
        return;
      }
      const path = getNodeAbsolutePathString(node, context);
      const data = JSON.parse(event.dataTransfer.getData("application/json"));
      const { sourcePath, sourceNode } = data;
      assertIsODKNode(sourceNode);
      console.log("Dropped on path", path);
      setIsDraggedOver(false);
      onDropNode({
        sourceNode,
        sourcePath,
        destinationNode: node,
        position: "before",
      });
    },
    [context, node, onDropNode, setIsDraggedOver]
  );

  const onDragLeave = React.useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      if (!context) {
        return;
      }
      const path = getNodeAbsolutePathString(node, context);
      console.log("Left dragging at path", path);
      setIsDraggedOver(false);
    },
    [context, node, setIsDraggedOver]
  );

  const dragProps = {
    draggable: true,
    onDragStart,
    onDragOver,
    onDragLeave,
    onDrop,
  };

  return dragProps;
}
