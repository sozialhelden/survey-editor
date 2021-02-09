import { Callout, Checkbox, Code } from "@blueprintjs/core";
import * as React from "react";
import { FieldProps } from "../FieldProps";

type Props = FieldProps & {
  onInputChange: (event: React.FormEvent<HTMLInputElement>) => void;
  labelElement: React.ReactNode;
  value: unknown;
};

export default function BooleanField(props: Props) {
  const { value, labelElement } = props;

  //   const context = React.useContext(ODKSurveyContext);
  if (value !== undefined && typeof value !== "boolean") {
    return (
      <Callout intent="warning">
        <h4>
          Value must be a <Code>Date</Code> for this field to work
        </h4>
      </Callout>
    );
  }
  return (
    <Checkbox
      large={true}
      labelElement={labelElement}
      onChange={props.onInputChange}
    />
  );
}
