import { Code, IconName, MenuItem } from "@blueprintjs/core";
import { useCallback, useContext } from "react";
import { ODKSurveyContext } from "../lib/ODKSurveyContext";
import { ODKNode } from "../xlsform-simple-schema/types/ODKNode";

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
    context.onAddNode({ position, node, group });
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
