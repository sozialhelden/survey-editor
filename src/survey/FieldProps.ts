import SimpleSchema from "simpl-schema";
import { ODKNode } from "../xlsform-simple-schema/types/ODKNode";

export type FieldProps = {
  schema: SimpleSchema;
  quickType: string | undefined;
  schemaKey: string;
  node: ODKNode;
  relevant: boolean;
  readonly: boolean;
};
