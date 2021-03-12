import { MenuDivider, MenuItem } from "@blueprintjs/core";
import { useCallback } from "react";
import {
  isGroupNode,
  ODKNode,
} from "../../xlsform-simple-schema/types/ODKNode";
import AddFieldOrGroupMenuItem from "../AddFieldMenuItem";

export default function NodeActionMenuItems({
  node,
  onRemove,
  onRename,
}: {
  node: ODKNode;
  onRemove: (node: ODKNode) => void;
  onRename: (node: ODKNode) => void;
}) {
  const removeNode = useCallback(() => {
    onRemove(node);
  }, [node, onRemove]);

  const renameNode = useCallback(() => {
    onRename(node);
  }, [node, onRename]);

  const isGroup = isGroupNode(node);
  const renameText = isGroup ? "Rename group…" : "Rename field…";
  const items = (
    <>
      <MenuItem icon="edit" text={renameText} onClick={renameNode} />
      <MenuDivider />
      <MenuItem icon="group-objects" text="Add group">
        <AddFieldOrGroupMenuItem
          node={node}
          position="before"
          icon="arrow-up"
          group={true}
          omitAction={true}
        />
        {isGroup && (
          <AddFieldOrGroupMenuItem
            node={node}
            position="inside"
            icon="key-enter"
            group={true}
            omitAction={true}
          />
        )}
        <AddFieldOrGroupMenuItem
          node={node}
          position="after"
          icon="arrow-down"
          group={true}
          omitAction={true}
        />
      </MenuItem>
      <MenuItem icon="manually-entered-data" text="Add field">
        <AddFieldOrGroupMenuItem
          node={node}
          position="before"
          icon="arrow-up"
          group={false}
          omitAction={true}
        />
        {isGroup && (
          <AddFieldOrGroupMenuItem
            node={node}
            position="inside"
            icon="key-enter"
            group={false}
            omitAction={true}
          />
        )}
        <AddFieldOrGroupMenuItem
          node={node}
          position="after"
          icon="arrow-down"
          group={false}
          omitAction={true}
        />
      </MenuItem>
      <MenuDivider />
      <MenuItem
        icon="group-objects"
        text="Nest in new group"
        onClick={removeNode}
        disabled={true}
      />
      <MenuItem
        icon="ungroup-objects"
        text="Ungroup"
        onClick={removeNode}
        disabled={true}
      />
      <MenuDivider />
      <MenuItem
        intent="danger"
        icon="trash"
        text={`Remove ${isGroup ? "group" : "field"}…`}
        onClick={removeNode}
      />
    </>
  );

  return items;
}
