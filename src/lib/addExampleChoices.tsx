import { ChoiceRow } from "../xlsform-simple-schema/types/RowTypes";
import { createLabelInAllLanguages } from "./createLabelInAllLanguages";
import { ODKSurveyContextType } from "./ODKSurveyContext";

export default function addExampleChoices(context: ODKSurveyContextType) {
  const languages = context.xlsForm?.languages || new Set(["English (en)"]);
  const choiceRows: ChoiceRow[] = [
    {
      "list name": "yes_no_maybe",
      name: "yes",
      label: createLabelInAllLanguages("yes", languages),
    },
    {
      "list name": "yes_no_maybe",
      name: "no",
      label: createLabelInAllLanguages("no", languages),
    },
    {
      "list name": "yes_no_maybe",
      name: "maybe",
      label: createLabelInAllLanguages("maybe", languages),
    },
  ];
  context.onSpliceRows("choices", [
    {
      rowIndex: 0,
      numberOfRowsToRemove: 0,
      rowsToAdd: choiceRows,
    },
  ]);
}
