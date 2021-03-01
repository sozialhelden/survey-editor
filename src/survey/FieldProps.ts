import SimpleSchema from "simpl-schema";
import { WorksheetName } from "../xlsform-simple-schema";
import { ODKNode } from "../xlsform-simple-schema/types/ODKNode";

export type FieldProps = {
  schema: SimpleSchema;
  quickType: string | undefined;
  schemaKey: string;
  node: ODKNode;
  onChange: (value: unknown, fieldProps: FieldProps) => void;
  onChangeCell: (
    worksheetName: WorksheetName,
    rowIndex: number,
    columnName: string,
    value: unknown,
    node?: ODKNode
  ) => void;
  relevant: boolean;
  disabled: boolean;
};
