import { Tab, Tabs } from "@blueprintjs/core";
import { CSSProperties, useCallback, useState } from "react";
import styled from "styled-components";
import { XLSForm } from "../xlsform-simple-schema";
import XLSFormWorksheet from "./XLSFormWorksheet";

type Props = {
  xlsForm: XLSForm;
  language: string;
  debug: boolean;
  style?: CSSProperties;
};

const Container = styled.div`
  /* background-color: #d5e0e7; */
  .bp3-tabs {
    display: flex;
    flex-direction: column-reverse;
    flex: 1;
    overflow: hidden;
    .bp3-tab-list {
      padding: 0px 16px 0 16px;
      .bp3-tab-indicator-wrapper {
        background: #f6f7f7;
        .bp3-tab-indicator {
          /* bottom: unset; */
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
            0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
        }
      }
      [role="tab"] {
        padding: 4px 16px 4px;
        margin-bottom: 8px;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }
    .bp3-tab-panel {
      margin: 0;
      overflow: auto;
      flex: 1;
      &[aria-hidden="false"] {
        box-shadow: 0 0 0 1px rgba(159, 183, 194, 0.1),
          0 2px 4px rgba(159, 183, 194, 0.2), 0 4px 8px rgba(159, 183, 194, 0.1);
        display: flex;
      }
    }
  }
`;

/**
 * Displays a XLSForm workbook as a table - like in Excel.
 */
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
        renderActiveTabPanelOnly={false}
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
