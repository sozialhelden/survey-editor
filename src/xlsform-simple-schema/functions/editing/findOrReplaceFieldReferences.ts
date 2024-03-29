import { cloneDeep, get, set, uniqBy } from "lodash";
import { evaluatableColumnNames, ODKNode } from "../../types/ODKNode";
import { QuestionRow } from "../../types/RowTypes";
import { XLSForm } from "../../types/XLSForm";
import { localizableColumnNames } from "../loadSurveyFromXLSX";

export type NodeDependency = {
  node: ODKNode;
  index: number;
  row: QuestionRow;
  columnName: string;
};

/**
 * Refactoring feature: Finds or replaces all references to a given field in other fields, so the
 * survey developer doesn't have to rename every reference manually.
 */
export default function findOrReplaceFieldReferences(
  xlsForm: XLSForm,
  node: ODKNode,
  replaceName?: string
) {
  const oldName = node.row.name;
  const nodeDependenciesWithDuplicates: NodeDependency[] = [];
  const variableRegexp = new RegExp(`\\\${${oldName}}`);

  const localizableKeys = localizableColumnNames.flatMap((lcn) =>
    [...xlsForm.languages.values()].map((lang) => `${lcn}.${lang}`)
  );

  xlsForm.flatNodes.forEach((n) => {
    let row: QuestionRow | undefined;
    (evaluatableColumnNames as string[])
      .concat(...localizableKeys)
      .forEach((columnName) => {
        const value = get(n.row, columnName);
        if (typeof value !== "string" && value !== undefined) {
          throw new Error(
            `Replacing variable names works only with cells that contain strings. Please ensure the ${columnName} cell of the ${node.row.name} row has a string value.`
          );
        }
        if (value?.match(variableRegexp)) {
          if (replaceName) {
            const regExp = new RegExp(`\${${oldName}}`, "g");
            const newCellValue = value?.replace(regExp, `\${${replaceName}}`);
            row = row || cloneDeep(n.row);
            set(row, columnName, newCellValue);
          }
          nodeDependenciesWithDuplicates.push({
            node: n,
            index: n.rowIndex,
            row: row || n.row,
            columnName,
          });
        }
      });
  });

  const nodeDependencies = uniqBy(
    nodeDependenciesWithDuplicates,
    (d) => `${d.index}/${d.columnName}`
  );

  return nodeDependencies;
}
