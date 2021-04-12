import * as React from "react";
import ODKFormulaEvaluationContext from "../../xlsform-simple-schema/functions/odk-formulas/evaluation/ODKFormulaEvaluationContext";
import { getNodeAbsolutePathString } from "../../xlsform-simple-schema/functions/odk-formulas/evaluation/XPath";
import { assertIsODKNode } from "../../xlsform-simple-schema/types/assertIsODKNode";
import { ODKNode } from "../../xlsform-simple-schema/types/ODKNode";

export type DropNodeHandler = (options: {
  sourceNode: ODKNode;
  destinationNode: ODKNode;
  sourcePath: string;
  position: "before" | "after" | "inside";
}) => void;

export const ODKNodeDragAndDropContext = React.createContext<{
  onDropNode: DropNodeHandler;
}>({ onDropNode: () => {} });

/**
 * @returns a set of props that you can add to a React node to add field drag & drop features to
 * it. Makes the element draggable, and allows to drag ODK nodes over and onto the element.
 */

export function useNodeDragAndDrop({
  node,
  evaluationContext,
  setIsDraggedOver,
}: {
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
      if (!evaluationContext) {
        return;
      }
      event.dataTransfer.setData(
        "application/json",
        JSON.stringify({
          sourceNode: node,
          sourcePath: getNodeAbsolutePathString(node, evaluationContext),
        })
      );
    },
    [evaluationContext, node]
  );

  const onDragOver = React.useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      if (!evaluationContext) {
        return;
      }
      setIsDraggedOver(true);
    },
    [evaluationContext, setIsDraggedOver]
  );

  const onDrop = React.useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      if (!evaluationContext) {
        return;
      }
      // const path = getNodeAbsolutePathString(node, evaluationContext);
      const data = JSON.parse(event.dataTransfer.getData("application/json"));
      const { sourcePath, sourceNode } = data;
      assertIsODKNode(sourceNode);
      // console.log("Dropped on path", path);
      setIsDraggedOver(false);
      onDropNode({
        sourceNode,
        sourcePath,
        destinationNode: node,
        position: "before",
      });
    },
    [evaluationContext, node, onDropNode, setIsDraggedOver]
  );

  const onDragLeave = React.useCallback(() => {
    if (!evaluationContext) {
      return;
    }
    // const path = getNodeAbsolutePathString(node, evaluationContext);
    // console.log("Left dragging at path", path);
    setIsDraggedOver(false);
  }, [evaluationContext, setIsDraggedOver]);

  const dragProps = {
    draggable: true,
    onDragStart,
    onDragOver,
    onDragLeave,
    onDrop,
  };

  return dragProps;
}
