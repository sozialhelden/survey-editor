import { Patch } from "immer";
import * as React from "react";
import { UndoHistory } from "./types";

export type UndoContextType<T> = {
  setDocumentWithPatches: (
    description: string,
    nextState: T | undefined,
    patches: Patch[],
    inversePatches: Patch[]
  ) => void;
  document: T | undefined;
  undoHistory: UndoHistory<T>;
  undo: () => void;
  redo: () => void;
  gotoIndex: (index: number) => void;
};

export function createUndoHistoryContext<T>() {
  return React.createContext<UndoContextType<T>>({
    undoHistory: {
      commands: [],
      index: -1,
    },
    setDocumentWithPatches: () => {},
    undo: () => {},
    redo: () => {},
    gotoIndex: () => {},
    document: undefined,
  });
}
