import { Button, Menu, MenuDivider, MenuItem } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import React from "react";
import { UndoContext } from "../lib/undo/UndoContext";
import Markdown from "./Markdown";

/** Button showing a 'Edit' menu */
export function EditMenuButton() {
  const undoContext = React.useContext(UndoContext);
  const { undoHistory } = undoContext;
  const lastCommand = undoHistory.commands[undoHistory.index];
  const lastCommandDescription = lastCommand?.description;
  const nextCommand = undoHistory.commands[undoHistory.index + 1];
  const nextCommandDescription = nextCommand?.description;

  const menu = (
    <Menu>
      <MenuItem
        text={<Markdown>{`Undo ‘${lastCommandDescription}’`}</Markdown>}
        onClick={undoContext.undo}
      />
      <MenuItem
        text={
          nextCommand ? (
            <Markdown>{`Redo ‘${nextCommandDescription}’`}</Markdown>
          ) : (
            "Redo"
          )
        }
        onClick={undoContext.redo}
        disabled={!nextCommand}
      />
      <MenuDivider />
      <MenuItem text="History">
        {undoHistory.commands.map((command, i) => (
          <MenuItem
            key={i}
            active={i === undoHistory.index}
            text={command.description}
            onClick={() => undoContext.gotoIndex(i)}
          />
        ))}
      </MenuItem>
    </Menu>
  );

  const button = (
    <Button className="bp3-minimal" rightIcon="caret-down" text="Edit" />
  );

  return (
    <>
      <Popover2
        content={menu}
        lazy={true}
        placement={"bottom-end"}
        minimal={true}
      >
        {button}
      </Popover2>
    </>
  );
}
