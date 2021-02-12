import SimpleSchema from "simpl-schema";
import { ODKNode } from "../xlsform-simple-schema/types/ODKNode";
import { QuestionRow } from "../xlsform-simple-schema/types/RowTypes";

export type FieldProps = {
  schema: SimpleSchema;
  quickType: string | undefined;
  schemaKey: string;
  node: ODKNode;
  onChange: (value: unknown, fieldProps: FieldProps) => void;
  onChangeRow: (node: ODKNode, row: QuestionRow) => void;
  relevant: boolean;
};
