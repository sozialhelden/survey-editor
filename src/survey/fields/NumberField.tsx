import { Callout, Code, NumericInput } from "@blueprintjs/core";
import * as React from "react";
import { FieldProps } from "../FieldProps";

type Props = FieldProps & {
  onInputChange: (event: React.FormEvent<HTMLInputElement>) => void;
  labelElement: React.ReactNode;
  value: unknown;
  defaultValue: unknown;
};

export default function NumberField(props: Props) {
  const { value, schemaKey, relevant } = props;
  const onChange = React.useCallback(
    (valueAsNumber: number) => {
      props.onChange(valueAsNumber, props);
    },
    [props]
  );

  if (
    value !== undefined &&
    typeof value !== "string" &&
    typeof value !== "number"
  ) {
    return (
      <Callout intent="warning">
        <h4>
          Value must be a <Code>number</Code> for this field to work.
        </h4>
      </Callout>
    );
  }

  return (
    <NumericInput
      id="text-input"
      disabled={relevant === false}
      name={schemaKey}
      large={true}
      allowNumericCharactersOnly={false}
      placeholder="Enter a number…"
      value={value}
      onValueChange={onChange}
      defaultValue={
        typeof props.defaultValue === "number" ||
        typeof props.defaultValue === "string"
          ? props.defaultValue
          : undefined
      }
    />
  );
}
