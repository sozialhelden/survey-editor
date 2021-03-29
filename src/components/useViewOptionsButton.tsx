import { Button, ButtonGroup, Navbar } from "@blueprintjs/core";
import React from "react";

export type ViewOption = "table" | "debug" | "json";
const defaultViewOptions: Record<ViewOption, boolean> = {
  table: false,
  debug: true,
  json: false,
};

/** Custom React hook returning app's main view options and a button to configure these options. */
export default function useViewOptionsButton() {
  const [viewOptions, setViewOptions] = React.useState<
    Record<ViewOption, boolean>
  >(defaultViewOptions);

  const onDebugChange = React.useCallback(() => {
    setViewOptions({ ...viewOptions, debug: !viewOptions.debug });
  }, [viewOptions]);

  const onShowTableChange = React.useCallback(() => {
    setViewOptions({ ...viewOptions, table: !viewOptions.table });
  }, [viewOptions]);

  const onShowResultChange = React.useCallback(() => {
    setViewOptions({ ...viewOptions, json: !viewOptions.json });
  }, [viewOptions]);

  const viewMenuButton = (
    <>
      <ButtonGroup>
        <Button
          icon="join-table"
          text="Excel"
          active={viewOptions.table}
          onClick={onShowTableChange}
        />
        <Button
          icon="diagram-tree"
          text="JSON"
          active={viewOptions.json}
          onClick={onShowResultChange}
        />
      </ButtonGroup>
      <Navbar.Divider />
      <ButtonGroup>
        <Button
          icon="settings"
          text="Develop"
          active={viewOptions.debug}
          onClick={onDebugChange}
        />
        <Button
          icon="presentation"
          text="Preview"
          active={!viewOptions.debug}
          onClick={onDebugChange}
        />
      </ButtonGroup>
    </>
  );

  return { viewMenuButton, viewOptions };
}
