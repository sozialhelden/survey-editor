import produce, { applyPatches, Patch } from "immer";
import { compact, get, set } from "lodash";
import { ODKNode } from "../types/ODKNode";
import XLSForm, { WorksheetName } from "../types/XLSForm";
import { localizableColumnNames } from "./loadSurveyFromXLSX";
import ODKFormulaEvaluationContext from "./odk-formulas/evaluation/ODKFormulaEvaluationContext";
import { getNodeIndexPath } from "./odk-formulas/evaluation/XPath";

export default function patchXLSForm({
  worksheetName,
  xlsForm,
  rowIndex,
  node,
  context,
  language,
  columnName,
  value,
}: {
  worksheetName: WorksheetName;
  xlsForm: XLSForm;
  node?: ODKNode;
  rowIndex: number;
  context: ODKFormulaEvaluationContext;
  language: string;
  columnName: string;
  value: unknown;
}) {
  const indexPath = node && getNodeIndexPath(node, context);
  const valuePathInRow = localizableColumnNames.includes(columnName)
    ? [columnName, language]
    : [columnName];

  const isSurvey = worksheetName === "survey";
  return produce(xlsForm, (draft) => {
    if (isSurvey) {
      set(draft, ["flatNodes", rowIndex, "row", ...valuePathInRow], value);
      set(
        draft,
        ["worksheets", worksheetName, "rows", rowIndex, ...valuePathInRow],
        value
      );
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
  });
}
