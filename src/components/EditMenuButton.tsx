import {
  Button,
  KeyCombo,
  Menu,
  MenuDivider,
  MenuItem,
} from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import React from "react";
import { UndoContext } from "../lib/undo/UndoContext";
import Markdown from "./core/Markdown";

/** Button showing a 'Edit' menu */
export function EditMenuButton() {
  const undoContext = React.useContext(UndoContext);
  const { undoHistory } = undoContext;
  const nextCommand = undoHistory.commands[undoHistory.index + 1];

  const menu = (
    <Menu>
      <MenuItem
        text={<Markdown inline={true}>{`Undo`}</Markdown>}
        labelElement={<KeyCombo combo={"mod+z"} minimal={true}></KeyCombo>}
        onClick={undoContext.undo}
      />
      <MenuItem
        text={
          nextCommand ? <Markdown inline={true}>{`Redo`}</Markdown> : "Redo"
        }
        labelElement={
          <KeyCombo combo={"mod+shift+z"} minimal={true}></KeyCombo>
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
            text={<Markdown inline={true}>{command.description}</Markdown>}
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
