import { Button, Classes, Dialog } from "@blueprintjs/core";
import { useCallback, useState } from "react";
import { ODKNode } from "../xlsform-simple-schema/types/ODKNode";

/**
 * Custom React hook returning a function to show a dialog for managing languages.
 */
export default function useLanguagesDialog(node?: ODKNode) {
  // const context = useContext(ODKSurveyContext);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const closeDialog = useCallback(() => {
    setDialogOpen(false);
  }, []);

  const showLanguagesDialog = useCallback(() => {
    setDialogOpen(true);
  }, []);

  const languagesDialog = (
    <Dialog
      title={<>Manage languages</>}
      icon="globe"
      isOpen={isDialogOpen}
      canOutsideClickClose={true}
      canEscapeKeyClose={true}
      isCloseButtonShown={true}
      onClose={closeDialog}
      lazy={true}
    >
      <div className={Classes.DIALOG_BODY}>TODO: Language editor goes here</div>
      <div className={Classes.DIALOG_FOOTER}>
        <div className={Classes.DIALOG_FOOTER_ACTIONS}>
          <Button onClick={closeDialog} type="button">
            Close
          </Button>
        </div>
      </div>
    </Dialog>
  );

  return {
    showLanguagesDialog,
    languagesDialog,
  };
}
