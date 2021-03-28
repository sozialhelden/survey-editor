import { ChoiceRow } from "../../types/RowTypes";
import { XLSForm } from "../../types/XLSForm";
import { createLocalizedString } from "./createLocalizedString";
import spliceRowsInWorksheet from "./spliceRowsInWorksheet";

/** Adds example choice list to the XLSForm source. */
export default function addExampleChoices(xlsForm: XLSForm) {
  const languages = xlsForm.languages || new Set(["English (en)"]);
  const choiceRows: ChoiceRow[] = [
    {
      "list name": "yes_no_maybe",
      name: "yes",
      label: createLocalizedString("yes", languages),
    },
    {
      "list name": "yes_no_maybe",
      name: "no",
      label: createLocalizedString("no", languages),
    },
    {
      "list name": "yes_no_maybe",
      name: "maybe",
      label: createLocalizedString("maybe", languages),
    },
  ];
  return spliceRowsInWorksheet(xlsForm, "choices", [
    {
      rowIndex: 0,
      numberOfRowsToRemove: 0,
      rowsToAdd: choiceRows,
    },
  ]);
}
