import { Alert, Intent } from "@blueprintjs/core";
import { useCallback, useContext, useState } from "react";
import { AppToaster } from "../toaster";
import { isGroupNode, ODKNode } from "../xlsform-simple-schema/types/ODKNode";
import { ODKSurveyContext } from "./ODKSurveyContext";

export default function useNodeDeletionDialog() {
  const context = useContext(ODKSurveyContext);
  const [isAlertOpen, setAlertOpen] = useState(false);
  const [node, setNode] = useState<ODKNode>();
  const isGroup = node && isGroupNode(node);

  const closeAlert = useCallback(() => {
    setAlertOpen(false);
  }, []);

  const removeNode = useCallback(() => {
    if (!node) {
      return;
    }
    AppToaster.show({
      intent: "none",
      message: (
        <>
          <code>{node.row.name}</code> field removed.
        </>
      ),
    });
    context.onRemoveRowAndChildren(node);
    setAlertOpen(false);
  }, [context, node]);

  const showRemoveConfirmationDialog = useCallback((node: ODKNode) => {
    setNode(node);
    setAlertOpen(true);
  }, []);

  const alert = (
    <Alert
      cancelButtonText="Cancel"
      confirmButtonText="Delete"
      icon="trash"
      intent={Intent.DANGER}
      isOpen={isAlertOpen}
      onCancel={closeAlert}
      onConfirm={removeNode}
      canOutsideClickCancel={true}
      canEscapeKeyCancel={true}
    >
      <p>
        Are you sure you want to remove the <code>{node?.row.name}</code>{" "}
        {isGroup ? "group" : "field"}?
      </p>
      {isGroup && node?.children.length && (
        <p>This will also remove the group’s nested fields.</p>
      )}
    </Alert>
  );

  return {
    showRemoveConfirmationDialog,
    alert,
  };
}