import { Alignment, Button, ButtonGroup, Navbar } from "@blueprintjs/core";
import React from "react";
import { WorksheetName } from "./xlsform-simple-schema";

export function SheetTabs({
  setWorksheetName,
  worksheetName,
}: {
  setWorksheetName: React.Dispatch<React.SetStateAction<WorksheetName>>;
  worksheetName: string;
}) {
  return (
    <Navbar.Group align={Alignment.LEFT}>
      <ButtonGroup>
        <Button
          onClick={() => setWorksheetName("survey")}
          active={worksheetName === "survey"}
        >
          Survey
        </Button>
        <Button
          onClick={() => setWorksheetName("choices")}
          active={worksheetName === "choices"}
        >
          Choices
        </Button>
        <Button
          onClick={() => setWorksheetName("settings")}
          active={worksheetName === "settings"}
        >
          Settings
        </Button>
      </ButtonGroup>
      <Navbar.Divider />
    </Navbar.Group>
  );
}
