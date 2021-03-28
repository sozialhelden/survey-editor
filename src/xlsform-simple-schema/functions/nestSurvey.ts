import {
  BeginMarkerRow,
  BeginOrEndMarkerRow,
} from "../types/BeginOrEndMarkerRow";
import { SemanticError } from "../types/Errors";
import { ODKNode } from "../types/ODKNode";
import { QuestionRow } from "../types/RowTypes";
import { normalizeType } from "./loadSurveyFromXLSX";

function assertNoEndMarker(
  row: QuestionRow | BeginOrEndMarkerRow,
  i: number
): asserts row is QuestionRow | BeginMarkerRow {
  if (row.type.match(/^end[ _](?:group|repeat)$/)) {
    throw new SemanticError(
      `Found '${row.type}' without a matching start marker in row ${
        i + 2
      }. Please check that the group/repeat nesting is correct. The row: ${row}`
    );
  }
}

/**
 * Calculates a nested `Node` survey tree model for an array of non-nested survey worksheet rows.
 *
 * This nests everything between `begin_group`…`end_group` and `begin_repeat`…`end_repeat` row
 * markers.
 */
export default function nestSurvey({
  /** flat array of non-nested rows to tree-ify */
  rows,
  /** Language name to assume if a column is not localized, for example, `"English (en)"` */
  defaultLanguage,
  /**
   * In the XLSForm standard, the root survey node is reachable under the `//data` selector, so we
   * name it `"data"` by default - you can customize this name, if necessary.
   */
  formRootNameFromSettings = "data",
  /**
   * Because it looks intuitive, you can give the root node a title, too. If you supply no title,
   * the survey form's title is used (if it is defined in the `settings` worksheet).
   */
  titleFromSettings = "",
  /**
   * Called back for each row that is found, with the row and its generated `ODKNode` (if
   * applicable).
   */
  onRow,
}: {
  rows: readonly (QuestionRow | BeginOrEndMarkerRow)[];
  defaultLanguage: string;
  formRootNameFromSettings?: string;
  titleFromSettings?: string;
  onRow?: (row: QuestionRow | BeginOrEndMarkerRow, node: ODKNode) => void;
}): {
  node: Readonly<ODKNode>;
} {
  const root: ODKNode = {
    children: [] as ODKNode[],
    type: "",
    typeParameters: [],
    rowIndex: -1,
    indentationLevel: 0,
    row: {
      name: formRootNameFromSettings,
      type: "",
      label: { [defaultLanguage]: titleFromSettings },
    } as QuestionRow,
  };
  const stack: ODKNode[] = [root];
  let i = 0;

  while (i < rows.length) {
    const row = rows[i];
    const [type, ...typeParameters] = normalizeType(row.type).split(" ");
    const lastOpenedGroup = stack[stack.length - 1];

    if (lastOpenedGroup.type === "begin_group" && type === "end_group") {
      // Found an end marker row for the currently open group
      stack.pop();
      onRow?.(row, lastOpenedGroup);
    } else if (
      // Found an end marker row for the currently open repeat
      lastOpenedGroup.type === "begin_repeat" &&
      row.type === "end_repeat"
    ) {
      stack.pop();
      onRow?.(row, lastOpenedGroup);
    } else if (type.match(/^begin_(?:repeat|group)$/)) {
      // Found the beginning of a new nested group or repeat
      const newGroupNode: ODKNode = {
        row: row as BeginMarkerRow,
        type,
        typeParameters,
        children: [],
        indentationLevel: stack.length - 1,
        rowIndex: i,
      };
      lastOpenedGroup.children.push(newGroupNode);
      stack.push(newGroupNode);
      onRow?.(row, newGroupNode);
    } else {
      // Assume we found a 'normal', non-nested row
      assertNoEndMarker(row, i);
      const newChildNode: ODKNode = {
        row,
        type,
        typeParameters,
        indentationLevel: stack.length - 1,
        rowIndex: i,
        children: [],
      };
      lastOpenedGroup.children.push(newChildNode);
      onRow?.(row, newChildNode);
    }

    i += 1;
  }

  return { node: root };
}
