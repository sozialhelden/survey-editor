import { QuestionRow } from "../../types/RowTypes";
import { XLSForm } from "../../types/XLSForm";
import { createLocalizedString } from "./createLocalizedString";

let untitledFieldIndex = 0;

/** Creates an untitled new field in the survey, with an auto-incremented number suffix. */
export function createEmptyFieldRow(xlsForm: XLSForm): QuestionRow {
  return {
    type: "text",
    name: `untitled_field_${untitledFieldIndex++}`,
    label: createLocalizedString("", xlsForm.languages),
  };
}
