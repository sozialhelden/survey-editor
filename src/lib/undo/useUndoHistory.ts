import { Patch } from "immer/dist/internal";
import * as React from "react";
import { UndoContextType } from "./createUndoHistoryContext";
import { UndoHistory, UndoHistoryItem } from "./types";
export type { Patch } from "immer/dist/internal";

export default function useUndoHistory<T>(): UndoContextType<T> {
  const [undoHistory, setUndoHistory] = React.useState<UndoHistory<T>>({
    commands: [],
    index: -1,
  });

  const setDocumentWithPatches = React.useCallback(
    (
      description: string,
      nextState: T | undefined,
      patches: Patch[],
      inversePatches: Patch[]
    ) => {
      const newCommand: UndoHistoryItem<T> = {
        description,
        document: nextState,
        patches,
        inversePatches,
      };
      setUndoHistory((undoHistory) => {
        const { commands, index } = undoHistory;
        return {
          commands: [...commands.slice(0, index + 1), newCommand],
          index: index + 1,
        };
      });
    },
    []
  );

  const undo = React.useCallback(
    () =>
      setUndoHistory((undoHistory) => ({
        ...undoHistory,
        index: Math.max(undoHistory.index - 1, 0),
      })),
    []
  );

  const redo = React.useCallback(
    () =>
      setUndoHistory((undoHistory) => ({
        ...undoHistory,
        index: Math.min(undoHistory.index + 1, undoHistory.commands.length - 1),
      })),
    []
  );

  const document = React.useMemo(
    () => undoHistory.commands[undoHistory.index]?.document,
    [undoHistory.commands, undoHistory.index]
  );

  const gotoIndex = React.useCallback(
    (index: number) =>
      setUndoHistory((undoHistory) => ({
        ...undoHistory,
        index,
      })),
    []
  );

  return {
    setDocumentWithPatches,
    undoHistory,
    undo,
    redo,
    gotoIndex,
    document,
  };
}
