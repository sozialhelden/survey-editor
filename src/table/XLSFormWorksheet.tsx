import { Callout, Classes } from "@blueprintjs/core";
import {
  Column,
  ColumnHeaderCell,
  EditableCell,
  IColumnHeaderRenderer,
  Table,
} from "@blueprintjs/table";
import { uniq } from "lodash";
import * as React from "react";
import styled from "styled-components";
import OverflowScrollContainer from "../components/OverflowScrollContainer";
import { ODKSurveyContext } from "../lib/ODKSurveyContext";
import { WorksheetName, XLSForm } from "../xlsform-simple-schema";
import { localizableColumnNames } from "../xlsform-simple-schema/functions/loadSurveyFromXLSX";

type Props = {
  xlsForm: XLSForm;
  language: string;
  debug: boolean;
  worksheetName: WorksheetName;
  style?: React.CSSProperties;
};

const FlexTable = styled(Table)`
  flex: 1;
  width: 33.33333vw;
`;

/**
 * Displays a single XLSForm worksheet as a table - like in Excel.
 */
export default function XLSFormWorksheet(props: Props) {
  const { language, xlsForm, worksheetName } = props;
  const context = React.useContext(ODKSurveyContext);
  const { onChangeCell } = context;
  const worksheet = xlsForm.worksheets[props.worksheetName];

  const numRows = worksheet?.rows.length;
  const columnNames = React.useMemo(
    () =>
      uniq(worksheet?.columnNamesNormalized.map((n) => n.replace(/::.*$/, ""))),
    [worksheet]
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

  const columnNameRenderer = React.useMemo(
    () => (name: string, index?: number) => {
      if (localizableColumnNames.includes(name)) {
        return (
          <>
            {name}
            <span className={Classes.TEXT_MUTED}>::{language}</span>
          </>
        );
      }
      return <>{name}</>;
    },
    [language]
  );

  const columnHeaderCellRenderer: IColumnHeaderRenderer = React.useMemo(() => {
    return (columnIndex: number) => {
      return (
        <ColumnHeaderCell
          nameRenderer={columnNameRenderer}
          name={columnNames[columnIndex]}
        />
      );
    };
  }, [columnNameRenderer, columnNames]);

  const cellRenderer = React.useMemo(() => {
    return (rowIndex: number, columnIndex: number) => {
      const row = worksheet?.rows[rowIndex];
      if (!row) {
        return <></>;
      }
      const columnName = columnNames[columnIndex];
      const value = row[columnName];
      const node =
        worksheetName === "survey" ? xlsForm.flatNodes[rowIndex] : undefined;
      const key = [worksheetName, rowIndex, columnName].join("-");
      if (value !== undefined && typeof value !== "string") {
        if (localizableColumnNames.includes(columnName)) {
          return (
            <EditableCell
              {...{ rowIndex, columnIndex }}
              onConfirm={onConfirmCellEdit}
              value={value[language]}
              key={key}
            />
          );
        } else {
          return (
            <EditableCell
              {...{ rowIndex, columnIndex }}
              onConfirm={onConfirmCellEdit}
              value={JSON.stringify(value)}
              key={key}
            />
          );
        }
      }

      return (
        <EditableCell
          {...{ rowIndex, columnIndex }}
          onConfirm={onConfirmCellEdit}
          value={value}
          key={key}
          style={
            ["type", "name"].includes(columnName)
              ? { paddingLeft: `${4 + (node?.indentationLevel || 0) * 8}px` }
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
    worksheetName,
    xlsForm.flatNodes,
    onConfirmCellEdit,
    language,
  ]);

  if (!worksheet) {
    return (
      <OverflowScrollContainer style={{ ...props.style }}>
        <Callout intent="warning">
          No {props.worksheetName} sheet defined
        </Callout>
      </OverflowScrollContainer>
    );
  }

  return (
    <FlexTable
      numRows={numRows}
      enableRowResizing={false}
      // numFrozenColumns={worksheetName === "survey" ? 2 : 0}
    >
      {columnNames.map((columnName) => (
        <Column
          key={columnName}
          name={columnName}
          cellRenderer={cellRenderer}
          columnHeaderCellRenderer={columnHeaderCellRenderer}
        />
      ))}
    </FlexTable>
  );
}
