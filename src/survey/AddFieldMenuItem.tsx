import { Code, IconName, MenuItem } from "@blueprintjs/core";
import { useCallback, useContext } from "react";
import { createLabelInAllLanguages } from "../lib/createLabelInAllLanguages";
import getLastRowIndexOfGroup from "../lib/getLastRowIndexOfGroup";
import { ODKSurveyContext } from "../lib/ODKSurveyContext";
import {
  BeginMarkerRow,
  IEndGroupMarkerRow,
} from "../xlsform-simple-schema/types/BeginOrEndMarkerRow";
import { isGroupNode, ODKNode } from "../xlsform-simple-schema/types/ODKNode";
import { QuestionRow } from "../xlsform-simple-schema/types/RowTypes";

let untitledFieldIndex = 0;
let untitledGroupIndex = 0;

export default function AddFieldOrGroupMenuItem({
  node,
  position,
  icon,
  group,
  omitAction,
}: {
  node: ODKNode;
  position: "before" | "after" | "inside";
  icon?: IconName;
  group: boolean;
  omitAction?: boolean;
}) {
  const context = useContext(ODKSurveyContext);

  const caption = (
    <>
      {omitAction ? null : `Add ${group ? "group" : "field"}`} {position}{" "}
      <Code>{node.row.name}</Code>
    </>
  );

  const onClick = useCallback(() => {
    const { xlsForm } = context;
    if (!xlsForm) {
      return;
    }

    const row: QuestionRow = {
      type: "text",
      name: `untitled_field_${untitledFieldIndex++}`,
      label: createLabelInAllLanguages(``, xlsForm.languages),
    };

    untitledGroupIndex += 1;
    const beginMarkerRow: BeginMarkerRow = {
      type: "begin_group",
      name: `untitled_group_${untitledGroupIndex}`,
      label: createLabelInAllLanguages(
        `Untitled group ${untitledGroupIndex}`,
        xlsForm.languages
      ),
    };
    const endMarkerRow: IEndGroupMarkerRow = { type: "end_group" };
    const rowsToInsert = group ? [beginMarkerRow, row, endMarkerRow] : [row];

    let rowIndex = 0;
    const currentNodeIsGroup = isGroupNode(node);
    if (currentNodeIsGroup) {
      rowIndex = {
        after: getLastRowIndexOfGroup(xlsForm, node) + 1,
        before: node.rowIndex,
        inside: node.rowIndex + 1,
      }[position];
    } else {
      rowIndex = {
        after: node.rowIndex + 1,
        before: node.rowIndex,
        inside: 0,
      }[position];
    }
    context.onSpliceRows("survey", rowIndex, 0, ...rowsToInsert);
  }, [context, group, node, position]);

  return (
    <MenuItem
      icon={icon}
      // intent="primary"
      onClick={onClick}
      text={caption}
    />
  );
}
