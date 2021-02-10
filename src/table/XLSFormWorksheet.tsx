import { uniq } from "lodash";
import styled from "styled-components";
import * as React from "react";
import { Cell, Column, Table } from "@blueprintjs/table";
import XLSForm from "../xlsform-simple-schema";
import OverflowScrollContainer from "../components/OverflowScrollContainer";
import { localizableColumnNames } from "../xlsform-simple-schema/functions/loadSurveyFromXLSX";
import { Code } from "@blueprintjs/core";

type Props = {
  xlsForm: XLSForm;
  language: string;
  debug: boolean;
  worksheetName: keyof XLSForm["worksheets"];
  style?: React.CSSProperties;
};

const FlexTable = styled(Table)`
  /* flex: 1; */
`;

export default function XLSFormWorksheet(props: Props) {
  const { language, xlsForm, worksheetName } = props;
  const worksheet = xlsForm.worksheets[props.worksheetName];
  const numRows = worksheet.rows.length;
  const columnNames = React.useMemo(
    () =>
      uniq(worksheet.columnNamesNormalized.map((n) => n.replace(/::.*$/, ""))),
    [worksheet]
  );
  const cellRenderer = React.useMemo(() => {
    return (rowIndex: number, columnIndex: number) => {
      const row = xlsForm.worksheets[worksheetName].rows[rowIndex];
      const key = columnNames[columnIndex];
      const value = row[key];
      if (value !== undefined && typeof value !== "string") {
        if (localizableColumnNames.includes(key)) {
          return <Cell>{value[language]}</Cell>;
        } else {
          return (
            <Cell>
              <Code>{JSON.stringify(value)}</Code>
            </Cell>
          );
        }
      }
      return <Cell>{row[key]}</Cell>;
    };
  }, [xlsForm, worksheetName, columnNames, language]);

  return (
    <OverflowScrollContainer style={{ ...props.style }}>
      <FlexTable
        numRows={numRows}
        enableRowResizing={false}
        numFrozenColumns={worksheetName === "survey" ? 2 : 0}
      >
        {columnNames.map((columnName) => (
          <Column name={columnName} cellRenderer={cellRenderer} />
        ))}
      </FlexTable>
    </OverflowScrollContainer>
  );
}
