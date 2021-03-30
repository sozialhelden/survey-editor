import { XLSForm } from "../../xlsform-simple-schema";
import { createUndoHistoryContext } from "./createUndoHistoryContext";

export const UndoContext = createUndoHistoryContext<XLSForm>();
