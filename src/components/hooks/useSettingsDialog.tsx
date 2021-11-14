import { Button, Classes, Dialog } from "@blueprintjs/core";
import { useCallback, useState } from "react";

/**
 * Custom React hook returning a function to show a dialog for managing settings.
 */
export default function useSettingsDialog() {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const closeDialog = useCallback(() => {
    setDialogOpen(false);
  }, []);

  const showSettingsDialog = useCallback(() => {
    setDialogOpen(true);
  }, []);

  const settingsDialog = (
    <Dialog
      title={<>Settings</>}
      icon="cog"
      isOpen={isDialogOpen}
      canOutsideClickClose={true}
      canEscapeKeyClose={true}
      isCloseButtonShown={true}
      onClose={closeDialog}
      lazy={true}
    >
      <div className={Classes.DIALOG_BODY}>TODO: Settings go here</div>
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
    showSettingsDialog,
    settingsDialog,
  };
}
