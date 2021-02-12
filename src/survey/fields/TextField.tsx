import { Callout, Code, InputGroup } from "@blueprintjs/core";
import * as React from "react";
import { FieldProps } from "../FieldProps";

type Props = FieldProps & {
  onInputChange: (event: React.FormEvent<HTMLInputElement>) => void;
  labelElement: React.ReactNode;
  value: unknown;
  defaultValue: unknown;
};

export default function TextField(props: Props) {
  const { value, schemaKey, relevant } = props;

  if (value !== undefined && typeof value !== "string") {
    return (
      <Callout intent="warning">
        <h4>
          Value must be a <Code>string</Code> for this field to work.
        </h4>
      </Callout>
    );
  }

  return (
    <InputGroup
      id={schemaKey}
      disabled={relevant === false}
      name={schemaKey}
      placeholder=""
      large={true}
      onChange={props.onInputChange}
      defaultValue={
        typeof props.defaultValue === "string" ? props.defaultValue : undefined
      }
    />
  );
}
