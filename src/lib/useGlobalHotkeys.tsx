import React from "react";
import { XLSForm } from "../xlsform-simple-schema/index";
import { UndoContextType } from "./undo/createUndoHistoryContext";

export function useGlobalHotkeys(undoContext: UndoContextType<XLSForm>) {
  return React.useMemo(
    () => [
      {
        combo: "mod+z",
        global: true,
        label: "Undo",
        onKeyDown: undoContext.undo,
        allowInInput: false,
        preventDefault: true,
      },
      {
        global: true,
        combo: "mod+shift+z",
        label: "Redo",
        onKeyDown: undoContext.redo,
        allowInInput: false,
        preventDefault: true,
      },
    ],
    [undoContext.redo, undoContext.undo]
  );
}
