import { uniq } from "lodash";
import styled from "styled-components";
import * as React from "react";
import { Column, EditableCell, Table } from "@blueprintjs/table";
import XLSForm, { WorksheetName } from "../xlsform-simple-schema";
import OverflowScrollContainer from "../components/OverflowScrollContainer";
import { localizableColumnNames } from "../xlsform-simple-schema/functions/loadSurveyFromXLSX";
import { Callout, Code } from "@blueprintjs/core";
import { ODKNode } from "../xlsform-simple-schema/types/ODKNode";

type Props = {
  xlsForm: XLSForm;
  language: string;
  debug: boolean;
  worksheetName: WorksheetName;
  style?: React.CSSProperties;
  onChangeCell: (
    worksheetName: WorksheetName,
    rowIndex: number,
    columnName: string,
    value: unknown,
    node?: ODKNode
  ) => void;
};

const FlexTable = styled(Table)`
  /* flex: 1; */
`;

export default function XLSFormWorksheet(props: Props) {
  const { language, xlsForm, worksheetName, onChangeCell } = props;
  // const context = React.useContext(ODKSurveyContext);
  const worksheet = xlsForm.worksheets[props.worksheetName];

  const numRows = worksheet?.rows.length;
  const columnNames = React.useMemo(
    () =>
      uniq(worksheet?.columnNamesNormalized.map((n) => n.replace(/::.*$/, ""))),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [xlsForm, worksheet]
  );

  const onConfirmCellEdit = React.useCallback(
    (
      value: string,
      rowIndex?: number | undefined,
      columnIndex?: number | undefined
    ) => {
      if (columnIndex === undefined || rowIndex === undefined) {
        return;
      }

      const row = worksheet?.rows[rowIndex];
      if (!row) {
        throw new Error("Tried to change a row that doesn’t exist");
      }
      const columnName = columnNames[columnIndex];
      const oldValue = row[columnName];
      if (oldValue === value) {
        return;
      }
      onChangeCell(
        worksheetName,
        rowIndex,
        columnName,
        value,
        xlsForm.flatNodes[rowIndex]
      );
    },
    [
      columnNames,
      onChangeCell,
      worksheet?.rows,
      worksheetName,
      xlsForm.flatNodes,
    ]
  );

  const cellRenderer = React.useMemo(() => {
    return (rowIndex: number, columnIndex: number) => {
      const row = worksheet?.rows[rowIndex];
      if (!row) {
        return <></>;
      }
      const key = columnNames[columnIndex];
      const value = row[key];
      const node = xlsForm.flatNodes[rowIndex];

      if (value !== undefined && typeof value !== "string") {
        if (localizableColumnNames.includes(key)) {
          return (
            <EditableCell
              {...{ rowIndex, columnIndex }}
              onConfirm={onConfirmCellEdit}
              value={value[language]}
            />
          );
        } else {
          return (
            <EditableCell
              {...{ rowIndex, columnIndex }}
              onConfirm={onConfirmCellEdit}
              value={JSON.stringify(value)}
            />
          );
        }
      }

      return (
        <EditableCell
          {...{ rowIndex, columnIndex }}
          onConfirm={onConfirmCellEdit}
          value={value}
          style={
            ["type", "name"].includes(key)
              ? { paddingLeft: `${4 + node.indentationLevel * 8}px` }
              : {}
          }
        >
          {value}
        </EditableCell>
      );
    };
  }, [
    worksheet?.rows,
    columnNames,
    xlsForm.flatNodes,
    onConfirmCellEdit,
    language,
  ]);

  if (!worksheet) {
    return (
      <Callout intent="warning">No {props.worksheetName} sheet defined</Callout>
    );
  }

  return (
    <OverflowScrollContainer style={{ ...props.style }}>
      <FlexTable
        numRows={numRows}
        enableRowResizing={false}
        // numFrozenColumns={worksheetName === "survey" ? 2 : 0}
      >
        {columnNames.map((columnName) => (
          <Column name={columnName} cellRenderer={cellRenderer} />
        ))}
      </FlexTable>
    </OverflowScrollContainer>
  );
}
