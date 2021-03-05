import { Callout, Code, NumericInput } from "@blueprintjs/core";
import * as React from "react";
import { ODKSurveyContext } from "../../lib/ODKSurveyContext";
import { FieldProps } from "../FieldProps";

type Props = FieldProps & {
  onInputChange: (event: React.FormEvent<HTMLInputElement>) => void;
  labelElement: React.ReactNode;
  value: unknown;
  defaultValue: unknown;
};

export default function NumberField(props: Props) {
  const { value, schemaKey, relevant, disabled } = props;
  const { onChangeAnswer } = React.useContext(ODKSurveyContext);
  const onChange = React.useCallback(
    (valueAsNumber: number) => {
      onChangeAnswer(valueAsNumber, props);
    },
    [props, onChangeAnswer]
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
      id={schemaKey}
      disabled={relevant === false || disabled}
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
