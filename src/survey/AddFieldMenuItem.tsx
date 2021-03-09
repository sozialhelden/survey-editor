import { Code, IconName, MenuItem } from "@blueprintjs/core";
import { useCallback, useContext } from "react";
import { createLabelInAllLanguages } from "../lib/createLabelInAllLanguages";
import getLastRowIndexOfGroup from "../lib/getLastRowIndexOfGroup";
import { ODKSurveyContext } from "../lib/ODKSurveyContext";
import { isGroupNode, ODKNode } from "../xlsform-simple-schema/types/ODKNode";
import { QuestionRow } from "../xlsform-simple-schema/types/RowTypes";

let untitledFieldIndex = 0;

export default function AddFieldMenuItem({
  node,
  position,
  icon,
}: {
  node: ODKNode;
  position: "before" | "after" | "inside";
  icon?: IconName;
}) {
  const context = useContext(ODKSurveyContext);

  const caption = (
    <>
      Add field <strong>{position}</strong> <Code>{node.row.name}</Code>
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

    let rowIndex = 0;
    const isGroup = isGroupNode(node);
    if (isGroup) {
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
    context.onSpliceRows("survey", rowIndex, 0, row);
  }, [context, node, position]);

  return (
    <MenuItem
      icon={icon}
      // intent="primary"
      onClick={onClick}
      text={caption}
    />
  );
}
