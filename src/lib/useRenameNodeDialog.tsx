import {
  Button,
  Classes,
  Dialog,
  FormGroup,
  InputGroup,
  Intent,
} from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import { useCallback, useContext, useEffect, useState } from "react";
import { NodeReferencesMenu } from "../survey/DetailsPopover/NodeReferencesMenu";
import { AppToaster } from "../toaster";
import { isGroupNode, ODKNode } from "../xlsform-simple-schema/types/ODKNode";
import findOrReplaceFieldReferences, {
  DependentNodeWithReplacedRow,
} from "./findOrReplaceFieldReferences";
import { ODKSurveyContext } from "./ODKSurveyContext";

export default function useRenameNodeDialog() {
  const context = useContext(ODKSurveyContext);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [node, setNode] = useState<ODKNode>();
  const [newName, setNewName] = useState<string>("");
  const [references, setChangedRows] = useState<DependentNodeWithReplacedRow[]>(
    []
  );

  useEffect(() => {
    setNewName("");
  }, [node?.row.name, node]);

  useEffect(() => {
    if (context.xlsForm && node) {
      setChangedRows(
        findOrReplaceFieldReferences(context.xlsForm, node, newName)
      );
    }
  }, [node?.row.name, node, context.xlsForm, newName]);

  const changeName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setNewName(event.currentTarget.value);
    },
    []
  );

  const closeDialog = useCallback(() => {
    setDialogOpen(false);
  }, []);

  const renameNode = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!node) {
        return;
      }
      context.onRenameNode(node, newName);
      AppToaster.show({
        intent: "none",
        message: (
          <>
            The field has been renamed to ‘<code>{newName}</code>’.
          </>
        ),
      });
      setDialogOpen(false);
    },
    [context, newName, node]
  );

  const showRenameDialog = useCallback((node: ODKNode) => {
    setNode(node);
    setDialogOpen(true);
  }, []);

  const dependenciesInfo =
    references.length > 0 ? (
      <Popover2
        content={<NodeReferencesMenu references={references} />}
        lazy={true}
      >
        <Button minimal={true} intent="primary">
          See {references.length} updates…
        </Button>
      </Popover2>
    ) : undefined;

  const isGroup = node && isGroupNode(node);

  const dialog = (
    <Dialog
      title={
        <>
          Rename ‘<code>{node?.row.name}</code>’ {isGroup ? "group" : "field"}…
        </>
      }
      icon="edit"
      isOpen={isDialogOpen}
      canOutsideClickClose={true}
      canEscapeKeyClose={true}
      isCloseButtonShown={true}
      onClose={closeDialog}
      lazy={true}
    >
      <form onSubmit={renameNode}>
        <div className={Classes.DIALOG_BODY}>
          <FormGroup
            label={`Please enter a new name for this ${
              isGroup ? "group" : "field"
            }:`}
            labelFor={"newName"}
            style={{ display: "flex" }}
          >
            <InputGroup
              id={"newName"}
              placeholder="Enter a field name…"
              defaultValue={node?.row.name}
              large={true}
              onChange={changeName}
              pattern="[\w\d_-]+"
            />
          </FormGroup>
        </div>
        <div className={Classes.DIALOG_FOOTER}>
          <div className={Classes.DIALOG_FOOTER_ACTIONS}>
            <div>{dependenciesInfo}</div>
            <Button onClick={closeDialog} type="button">
              Close
            </Button>
            <Button
              intent={Intent.PRIMARY}
              type="submit"
              disabled={newName === ""}
            >
              Rename
            </Button>
          </div>
        </div>
      </form>
    </Dialog>
  );

  return {
    showRenameDialog,
    dialog,
  };
}