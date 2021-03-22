import { cloneDeep, get, set, without } from "lodash";
import { XLSForm } from "../xlsform-simple-schema";
import { localizableColumnNames } from "../xlsform-simple-schema/functions/loadSurveyFromXLSX";
import {
  evaluatableColumnNames,
  ODKNode,
} from "../xlsform-simple-schema/types/ODKNode";
import { QuestionRow } from "../xlsform-simple-schema/types/RowTypes";

export type NodeDependency = {
  node: ODKNode;
  index: number;
  row: QuestionRow;
  columnName: string;
};

export default function findOrReplaceFieldReferences(
  xlsForm: XLSForm,
  node: ODKNode,
  replaceName?: string
) {
  const oldName = node.row.name;
  const nodeDependency: NodeDependency[] = [];
  const variableRegexp = new RegExp(`\\\${${oldName}}`);
  xlsForm.flatNodes.forEach((n) => {
    let row: QuestionRow | undefined;
    const localizableKeys = localizableColumnNames.flatMap((lcn) =>
      [...xlsForm.languages.values()].map((lang) => `${lcn}.${lang}`)
    );
    without(evaluatableColumnNames as string[], "choice_filter")
      .concat(...localizableKeys)
      .forEach((columnName) => {
        const value = get(n.row, columnName);
        if (typeof value !== "string" && value !== undefined) {
          throw new Error(
            `Replacing variable names works only with string cells. Please ensure the ${columnName} cell of the ${node.row.name} row has a string value.`
          );
        }
        if (value?.match(variableRegexp)) {
          if (replaceName) {
            const newCellValue = value?.replaceAll(
              `\${${oldName}}`,
              `\${${replaceName}}`
            );
            row = row || cloneDeep(n.row);
            set(row, columnName, newCellValue);
          }
          nodeDependency.push({
            node: n,
            index: n.rowIndex,
            row: row || n.row,
            columnName,
          });
        }
      });
  });
  return nodeDependency;
}
