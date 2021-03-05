import { Patch } from "immer/dist/internal";
import * as React from "react";

type Command = [Patch[], Patch[]];

interface IUndoHistory {
  commands: Command[];
  index: number;
}

export const UndoHistoryContext = React.createContext<IUndoHistory>({
  commands: [],
  index: -1,
});

function useUndo() {
  const [commands, setCommands] = React.useState<Command[]>([]);
  const [index, setIndex] = React.useState<number>(-1);

  const undo = React.useCallback(() => {
    setIndex(Math.min(index - 1, 0));
  }, [index, setIndex]);

  const redo = React.useCallback(() => {
    setIndex(Math.max(index + 1, commands.length - 1));
  }, [commands, index]);

  const addCommand = React.useCallback(
    (command: Command) => {
      setCommands([...commands, command]);
    },
    [commands]
  );

  return {
    undo,
    redo,
    addCommand,
  };
}
