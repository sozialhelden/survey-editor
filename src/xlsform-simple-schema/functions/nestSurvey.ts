import { ODKNode as ODKNode } from "../types/ODKNode";
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
 * Calculates a nested `QuestionGroupWithRuntimeInfo` survey model for an array of non-nested survey worksheet rows.
 *
 * `QuestionGroup` represents the root 'group' of the survey.
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
}): ODKNode {
  const root: ODKNode = {
    children: [] as ODKNode[],
    type: "",
    typeParameters: [],
    rowIndex: 0,
    indentationLevel: 0,
    stack: [] as ODKNode[],
    row: {
      name: formRootNameFromSettings,
      type: "",
      label: { [defaultLanguage]: titleFromSettings },
    } as QuestionRow,
    evaluatedResults: {},
    resultsThatNeedReevaluation: {},
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
      const newGroup: ODKNode = {
        row: row as BeginMarkerRow,
        type,
        typeParameters,
        children: [],
        indentationLevel: stack.length - 1,
        rowIndex: i,
        stack: [...stack],
        evaluatedResults: {},
        resultsThatNeedReevaluation: {},
      };
      currentGroup.children.push(newGroup);
      stack.push(newGroup);
      onRow?.(row, newGroup);
    } else {
      // Found a 'normal' survey question
      assertNoEndMarker(row, i);
      const newChild: ODKNode = {
        row,
        type,
        typeParameters,
        indentationLevel: stack.length - 1,
        rowIndex: i,
        children: [],
        stack: [...stack],
        evaluatedResults: {},
        resultsThatNeedReevaluation: {},
      };
      currentGroup.children.push(newChild);
      onRow?.(row, newChild);
    }

    i += 1;
  }

  return root;
}
