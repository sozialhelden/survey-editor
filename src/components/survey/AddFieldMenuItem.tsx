import { Code, IconName, MenuItem } from "@blueprintjs/core";
import { useCallback, useContext } from "react";
import { ODKSurveyContext } from "../../lib/ODKSurveyContext";
import { fieldTypeNames } from "../../xlsform-simple-schema/field-types/fieldTypeNames";
import { ODKNode } from "../../xlsform-simple-schema/types/ODKNode";
import { FieldTypeMenu } from "./FieldPopoverButton/FieldTypeMenu";

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

  const addFieldWithType = useCallback(
    (fieldType: keyof typeof fieldTypeNames) => {
      context.onAddNode({ position, node, group, fieldType });
    },
    [context, group, node, position]
  );

  const addGroupedTextField = useCallback(() => {
    context.onAddNode({ position, node, group, fieldType: "text" });
  }, [context, group, node, position]);

  if (group) {
    return (
      <MenuItem
        icon={icon}
        // intent="primary"
        text={caption}
        onClick={addGroupedTextField}
      />
    );
  }

  return (
    <MenuItem
      icon={icon}
      // intent="primary"
      text={caption}
    >
      <FieldTypeMenu
        onSelectType={addFieldWithType}
        header={"Choose a type for the new field."}
      />
    </MenuItem>
  );
}
