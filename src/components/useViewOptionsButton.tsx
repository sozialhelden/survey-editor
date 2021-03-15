import { Button, Classes, Menu, Switch } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import React, { FormEvent } from "react";

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

  const onDebugChange = React.useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      setViewOptions({ ...viewOptions, debug: !event.currentTarget.checked });
    },
    [viewOptions]
  );

  const onShowTableChange = React.useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      setViewOptions({ ...viewOptions, table: event.currentTarget.checked });
    },
    [viewOptions]
  );

  const onShowResultChange = React.useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      setViewOptions({ ...viewOptions, json: event.currentTarget.checked });
    },
    [viewOptions]
  );

  const viewMenuButton = (
    <Popover2
      content={
        <Menu>
          <li className={Classes.MENU_ITEM}>
            <NavbarSwitch
              checked={viewOptions.table}
              label="Table"
              onChange={onShowTableChange}
            />
          </li>
          <li className={Classes.MENU_ITEM}>
            <NavbarSwitch
              checked={!viewOptions.debug}
              label="Live View"
              onChange={onDebugChange}
            />
          </li>
          <li className={Classes.MENU_ITEM}>
            <NavbarSwitch
              checked={viewOptions.json}
              label="JSON"
              onChange={onShowResultChange}
            />
          </li>
        </Menu>
      }
      lazy={true}
    >
      <Button
        icon="column-layout"
        minimal={true}
        rightIcon={"caret-down"}
        title="View"
      />
    </Popover2>
  );

  return { viewMenuButton, viewOptions };
}
