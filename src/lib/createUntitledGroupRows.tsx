import { createLabelInAllLanguages } from "../lib/createLabelInAllLanguages";
import { XLSForm } from "../xlsform-simple-schema";
import {
  BeginMarkerRow,
  IEndGroupMarkerRow,
} from "../xlsform-simple-schema/types/BeginOrEndMarkerRow";

let untitledGroupIndex = 0;

export function createEmptyGroupRows(xlsForm: XLSForm) {
  untitledGroupIndex += 1;
  const beginMarkerRow: BeginMarkerRow = {
    type: "begin_group",
    name: `untitled_group_${untitledGroupIndex}`,
    label: createLabelInAllLanguages("", xlsForm.languages),
  };
  const endMarkerRow: IEndGroupMarkerRow = { type: "end_group" };
  return { beginMarkerRow, endMarkerRow };
}
