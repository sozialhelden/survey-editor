import * as React from "react";
import { FieldProps } from "../FieldProps";
import RadioGroupField from "./RadioGroupField";
import BooleanField from "./BooleanField";
import NumberField from "./NumberField";
import DateField from "./DateField";
import TextField from "./TextField";
import CheckboxGroupField from "./CheckboxGroupField";

export function AutoField(
  props: FieldProps & {
    value: unknown;
    defaultValue: unknown;
    onInputChange: (event: React.FormEvent<HTMLInputElement>) => void;
    labelElement: JSX.Element;
  }
) {
  const { quickType, schema, schemaKey } = props;
  if (quickType === "number") {
    return <NumberField {...props} />;
  } else if (quickType === "date") {
    return <DateField {...props} />;
  } else if (quickType === "boolean") {
    return <BooleanField {...props} />;
  }

  if (quickType === "stringArray") {
    const allowedValues = schema.get(schemaKey + ".$", "allowedValues");
    if (allowedValues instanceof Array) {
      return <CheckboxGroupField {...{ ...props, allowedValues }} />;
    }
  }
  const allowedValues = schema.get(schemaKey, "allowedValues");
  if (allowedValues instanceof Array) {
    return <RadioGroupField {...{ ...props, allowedValues }} />;
  }
  return <TextField {...props} />;
}
