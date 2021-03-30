import { Patch } from "immer/dist/internal";

export type UndoHistoryItem<T> = {
  description: string;
  document?: T;
  patches: Patch[];
  inversePatches: Patch[];
};

export type UndoHistory<T> = {
  commands: UndoHistoryItem<T>[];
  index: number;
};
