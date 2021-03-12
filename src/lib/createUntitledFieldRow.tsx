import { XLSForm } from "../xlsform-simple-schema";
import { QuestionRow } from "../xlsform-simple-schema/types/RowTypes";
import { createLabelInAllLanguages } from "./createLabelInAllLanguages";

let untitledFieldIndex = 0;

export function createEmptyFieldRow(xlsForm: XLSForm): QuestionRow {
  return {
    type: "text",
    name: `untitled_field_${untitledFieldIndex++}`,
    label: createLabelInAllLanguages("", xlsForm.languages),
  };
}
