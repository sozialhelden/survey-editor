import { Menu, MenuDivider, MenuItem } from "@blueprintjs/core";
import { useCallback } from "react";
import {
  isGroupNode,
  ODKNode,
} from "../../xlsform-simple-schema/types/ODKNode";
import AddFieldMenuItem from "../AddFieldMenuItem";

export default function NodeActionMenu({
  node,
  onRemove,
}: {
  node: ODKNode;
  onRemove: (node: ODKNode) => void;
}) {
  const removeNode = useCallback(() => {
    onRemove(node);
  }, [node, onRemove]);

  const isGroup = isGroupNode(node);

  return (
    <>
      <Menu>
        <AddFieldMenuItem node={node} position="before" icon="arrow-up" />
        {isGroup && (
          <AddFieldMenuItem node={node} position="inside" icon="add" />
        )}
        <AddFieldMenuItem node={node} position="after" icon="arrow-down" />
        <MenuDivider />
        <MenuItem
          icon="group-objects"
          text="Nest in group"
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
          text="Remove field"
          onClick={removeNode}
        />
      </Menu>
    </>
  );
}
