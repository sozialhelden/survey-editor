import SimpleSchema from "simpl-schema";
import { ODKNode } from "../xlsform-simple-schema/types/ODKNode";

export type FieldProps = {
    schema: SimpleSchema,
    schemaKey: string,
    quickType: string | undefined,
    node: ODKNode,
    onChange: ((value: unknown, fieldProps: FieldProps) => void)
}
