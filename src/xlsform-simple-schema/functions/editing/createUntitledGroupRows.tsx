import {
  BeginMarkerRow,
  IEndGroupMarkerRow,
} from "../../types/BeginOrEndMarkerRow";
import { XLSForm } from "../../types/XLSForm";
import { createLocalizedString } from "./createLocalizedString";

let untitledGroupIndex = 0;

export function resetUntitledGroupCounter() {
  untitledGroupIndex = 0;
}

/** Creates an untitled new field group in the survey, with an auto-incremented number suffix. */
export function createEmptyGroupRows(xlsForm: XLSForm) {
  untitledGroupIndex += 1;
  const beginMarkerRow: BeginMarkerRow = {
    type: "begin_group",
    name: `untitled_group_${untitledGroupIndex}`,
    label: createLocalizedString("", xlsForm.languages),
  };
  const endMarkerRow: IEndGroupMarkerRow = { type: "end_group" };
  return { beginMarkerRow, endMarkerRow };
}
