import { ODKNode } from "../types/ODKNode";
import {
  BeginMarkerRow,
  BeginOrEndMarkerRow,
} from "../types/BeginOrEndMarkerRow";
import { QuestionRow } from "../types/RowTypes";
import { SemanticError } from "../types/Errors";
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
 * Calculates a nested `Node` survey model for an array of non-nested survey worksheet rows.
 */
export default function nestSurvey({
  rows,
  defaultLanguage,
  formRootNameFromSettings = "data",
  titleFromSettings = "",
  onRow,
}: {
  rows: (QuestionRow | BeginOrEndMarkerRow)[];
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
    const currentGroup = stack[stack.length - 1];

    if (currentGroup.type === "begin_group" && type === "end_group") {
      stack.pop();
      onRow?.(row, currentGroup);
    } else if (
      currentGroup.type === "begin_repeat" &&
      row.type === "end_repeat"
    ) {
      stack.pop();
      onRow?.(row, currentGroup);
    } else if (type.match(/^begin_(?:repeat|group)$/)) {
      // Found the beginning of a nested group or repeat
      const newGroupNode: ODKNode = {
        row: row as BeginMarkerRow,
        type,
        typeParameters,
        children: [],
        indentationLevel: stack.length - 1,
        rowIndex: i,
      };
      currentGroup.children.push(newGroupNode);
      stack.push(newGroupNode);
      onRow?.(row, newGroupNode);
    } else {
      // Found a 'normal' survey question
      assertNoEndMarker(row, i);
      const newChildNode: ODKNode = {
        row,
        type,
        typeParameters,
        indentationLevel: stack.length - 1,
        rowIndex: i,
        children: [],
      };
      currentGroup.children.push(newChildNode);
      onRow?.(row, newChildNode);
    }

    i += 1;
  }

  return { node: root };
}
