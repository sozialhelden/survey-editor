import { Tab, Tabs } from "@blueprintjs/core";
import { CSSProperties, useCallback, useState } from "react";
import styled from "styled-components";
import { WorksheetName, XLSForm } from "../xlsform-simple-schema";
import { ODKNode } from "../xlsform-simple-schema/types/ODKNode";
import XLSFormWorksheet from "./XLSFormWorksheet";

type Props = {
  xlsForm: XLSForm;
  language: string;
  debug: boolean;
  style?: CSSProperties;
  onChangeCell: (
    worksheetName: WorksheetName,
    rowIndex: number,
    columnName: string,
    value: unknown,
    node?: ODKNode
  ) => void;
};

const Container = styled.div`
  background-color: #d5e0e7;
  .bp3-tabs {
    display: flex;
    flex-direction: column;
    .bp3-tab-list {
      padding: 16px 16px 0 16px;
    }
    .bp3-tab-panel {
      overflow: auto;
    }
  }
`;

export default function XLSFormWorkbook(props: Props) {
  const [worksheetName, setWorksheetName] = useState<
    keyof XLSForm["worksheets"]
  >("survey");
  const handleTabChange = useCallback((id: keyof XLSForm["worksheets"]) => {
    setWorksheetName(id);
  }, []);

  return (
    <Container style={props.style}>
      <Tabs
        id="TabsExample"
        onChange={handleTabChange}
        selectedTabId={worksheetName}
      >
        <Tab
          id="survey"
          title="Survey"
          panel={
            <XLSFormWorksheet {...{ ...props, worksheetName: "survey" }} />
          }
        />
        <Tab
          id="choices"
          title="Choices"
          panel={
            <XLSFormWorksheet {...{ ...props, worksheetName: "choices" }} />
          }
        />
        <Tab
          id="settings"
          title="Settings"
          panel={
            <XLSFormWorksheet {...{ ...props, worksheetName: "settings" }} />
          }
        />
        {/* <Tabs.Expander /> */}
        {/* <input className="bp3-input" type="text" placeholder="Search..." /> */}
      </Tabs>
    </Container>
  );
}
