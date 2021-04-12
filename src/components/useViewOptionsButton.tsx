import { Button, ButtonGroup, Navbar } from "@blueprintjs/core";
import React from "react";

export type ViewOption = "table" | "debug" | "json" | "graph";
const defaultViewOptions: Record<ViewOption, boolean> = {
  table: false,
  debug: true,
  json: false,
  graph: false,
};

/** Custom React hook returning app's main view options and a button to configure these options. */
export default function useViewOptionsButton() {
  const [viewOptions, setViewOptions] = React.useState<
    Record<ViewOption, boolean>
  >(defaultViewOptions);

  const toggleDebug = React.useCallback(() => {
    setViewOptions({ ...viewOptions, debug: !viewOptions.debug });
  }, [viewOptions]);

  const toggleTable = React.useCallback(() => {
    setViewOptions({ ...viewOptions, table: !viewOptions.table });
  }, [viewOptions]);

  const toggleTree = React.useCallback(() => {
    setViewOptions({ ...viewOptions, json: !viewOptions.json });
  }, [viewOptions]);

  const toggleGraph = React.useCallback(() => {
    setViewOptions({ ...viewOptions, graph: !viewOptions.graph });
  }, [viewOptions]);

  const viewMenuButton = (
    <>
      <ButtonGroup>
        <Button
          icon="join-table"
          text="Excel"
          active={viewOptions.table}
          onClick={toggleTable}
        />
        <Button
          icon="diagram-tree"
          text="JSON"
          active={viewOptions.json}
          onClick={toggleTree}
        />
      </ButtonGroup>

      <Navbar.Divider />

      <Button
        icon="graph"
        text="Graph"
        active={viewOptions.graph}
        onClick={toggleGraph}
      />

      <Navbar.Divider />

      <ButtonGroup>
        <Button
          icon="settings"
          text="Develop"
          active={viewOptions.debug}
          onClick={toggleDebug}
        />
        <Button
          icon="presentation"
          text="Preview"
          active={!viewOptions.debug}
          onClick={toggleDebug}
        />
      </ButtonGroup>
    </>
  );

  return { viewMenuButton, viewOptions };
}
