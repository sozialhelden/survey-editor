import * as React from "react";
import { UndoContextType } from "../../lib/undo/createUndoHistoryContext";
import { XLSForm } from "../../xlsform-simple-schema/types/XLSForm";

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
