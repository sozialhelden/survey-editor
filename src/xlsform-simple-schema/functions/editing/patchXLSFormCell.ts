import { produceWithPatches } from "immer";
import { set } from "lodash";
import { ODKNode } from "../../types/ODKNode";
import { WorksheetName, XLSForm } from "../../types/XLSForm";
import {
  localizableColumnNames,
  normalizeColumnNames,
} from "../loadSurveyFromXLSX";
import ODKFormulaEvaluationContext from "../odk-formulas/evaluation/ODKFormulaEvaluationContext";
import { getNodeIndexPath } from "../odk-formulas/evaluation/XPath";

/**
 * Changes the content of a single XLSForm cell.
 *
 * @returns a new XLSForm reference with the applied patch.
 */
export default function patchXLSFormCell({
  worksheetName,
  xlsForm,
  rowIndex,
  node,
  context,
  language,
  columnName,
  value,
}: {
  xlsForm: XLSForm;
  worksheetName: WorksheetName;
  node?: ODKNode;
  rowIndex: number;
  context: ODKFormulaEvaluationContext;
  language: string;
  columnName: string;
  value: unknown;
}) {
  const changeIsInSurveyWorksheet = worksheetName === "survey";
  if (changeIsInSurveyWorksheet && !node) {
    throw new Error(
      "This is a bug: Tried to change the `survey` worksheet, but no node was supplied."
    );
  }

  const valuePathInRow = localizableColumnNames.includes(columnName)
    ? [columnName, language]
    : [columnName];

  // This creates a new object for each parent of a changed property inside the whole object tree
  // of the given XLSForm.

  // https://immerjs.github.io/immer/docs/introduction

  return produceWithPatches(xlsForm, (draft) => {
    set(
      draft,
      ["worksheets", worksheetName, "rows", rowIndex, ...valuePathInRow],
      value
    );

    if (changeIsInSurveyWorksheet) {
      set(draft, ["flatNodes", rowIndex, "row", ...valuePathInRow], value);
      const indexPath = node && getNodeIndexPath(node, context);
      if (indexPath) {
        set(
          draft,
          [
            "rootSurveyGroup",
            ...indexPath.map((i) => ["children", i]).flat(),
            "row",
            ...valuePathInRow,
          ],
          value
        );
      }
    }

    // Update cached column names if necessary
    if (language !== undefined && !draft.languages.has(language)) {
      draft.languages.add(language);
    }

    const worksheet = draft.worksheets[worksheetName];
    if (worksheet) {
      if (language !== undefined && !worksheet.languages.has(language)) {
        worksheet.languages.add(language);
      }
      if (!worksheet.columnNames.includes(columnName)) {
        worksheet.columnNames.push(columnName);
      }
      const normalizedColumnName = normalizeColumnNames([columnName])[0];
      if (!worksheet.columnNamesNormalized.includes(normalizedColumnName)) {
        worksheet.columnNamesNormalized.push(normalizedColumnName);
      }
    }
  });
}
