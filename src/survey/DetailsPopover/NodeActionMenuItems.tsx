import { MenuDivider, MenuItem } from "@blueprintjs/core";
import { useCallback, useContext } from "react";
import { ODKSurveyContext } from "../../lib/ODKSurveyContext";
import useNodeDeletionDialog from "../../lib/useNodeDeletionDialog";
import useRenameNodeDialog from "../../lib/useRenameNodeDialog";
import {
  isGroupNode,
  ODKNode,
} from "../../xlsform-simple-schema/types/ODKNode";
import AddFieldOrGroupMenuItem from "../AddFieldMenuItem";

export default function NodeActionMenuItems(props: {
  node?: ODKNode;
  removeNode: () => void;
  renameNode: () => void;
  nestNode: () => void;
  ungroupNode: () => void;
  addHintToNode: () => void;
  removeHintFromNode: () => void;
}) {
  const context = useContext(ODKSurveyContext);
  const { node } = props;
  if (!node) {
    return null;
  }

  const isGroup = isGroupNode(node);
  const renameText = isGroup ? "Rename group…" : "Rename field…";
  const nodeHasHint = context.language && node.row.hint?.[context.language];

  const items = (
    <>
      <MenuItem icon="edit" text={renameText} onClick={props.renameNode} />
      {!nodeHasHint && (
        <MenuItem
          icon="lightbulb"
          text="Add hint"
          onClick={props.addHintToNode}
        />
      )}
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
        onClick={props.nestNode}
      />
      {isGroup && (
        <MenuItem
          icon="ungroup-objects"
          text="Ungroup"
          onClick={props.ungroupNode}
        />
      )}

      <MenuDivider />

      <MenuItem
        intent="danger"
        icon="trash"
        text={`Remove ${isGroup ? "group" : "field"}…`}
        onClick={props.removeNode}
      />
    </>
  );

  return items;
}

export function useNodeActionMenuItems(node?: ODKNode) {
  const context = useContext(ODKSurveyContext);
  const {
    alert: nodeDeletionAlert,
    showRemoveConfirmationDialog,
  } = useNodeDeletionDialog(node);
  const { dialog: renameDialog, showRenameDialog } = useRenameNodeDialog(node);
  const nodeActionDialogs = (
    <>
      {nodeDeletionAlert}
      {renameDialog}
    </>
  );

  const addHintToNode = useCallback(() => {
    if (!node) {
      return;
    }
    context.onChangeCell("survey", node?.rowIndex, "hint", " ", node);
  }, [context, node]);

  const removeHintFromNode = useCallback(() => {
    if (!node) {
      return;
    }
    context.xlsForm?.languages.forEach((language) => {
      context.onChangeCell(
        "survey",
        node?.rowIndex,
        "hint",
        "",
        node,
        language
      );
    });
  }, [context, node]);

  const nodeActionMenuItems = node && (
    <NodeActionMenuItems
      node={node}
      removeNode={showRemoveConfirmationDialog}
      renameNode={showRenameDialog}
      nestNode={context.onNestNode.bind(undefined, node)}
      ungroupNode={context.onUngroupNode.bind(undefined, node)}
      addHintToNode={addHintToNode}
      removeHintFromNode={removeHintFromNode}
    />
  );

  return { nodeActionDialogs, nodeActionMenuItems };
}
