import { Button, ButtonGroup, Navbar, Switch } from "@blueprintjs/core";
import React from "react";

export type ViewOption = "table" | "debug" | "json";
const defaultViewOptions: Record<ViewOption, boolean> = {
  table: false,
  debug: true,
  json: false,
};

function NavbarSwitch(props: {
  checked: boolean;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  label: string;
}) {
  return (
    <Switch
      checked={props.checked}
      label={props.label}
      onChange={props.onChange}
      inline={true}
      style={{ marginBottom: "0" }}
    />
  );
}

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
      <NavbarSwitch
        label="Live view"
        checked={!viewOptions.debug}
        onChange={onDebugChange}
      />
    </>
  );

  return { viewMenuButton, viewOptions };
}
