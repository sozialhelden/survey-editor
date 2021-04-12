import { Callout, Checkbox, Code } from "@blueprintjs/core";
import * as React from "react";
import { ODKSurveyContext } from "../../../lib/ODKSurveyContext";
import { FieldProps } from "../FieldProps";

type Props = FieldProps & {
  onInputChange: (event: React.FormEvent<HTMLInputElement>) => void;
  labelElement: React.ReactNode;
  value: unknown;
  defaultValue: unknown;
};

export default function BooleanField(props: Props) {
  const { value, labelElement, relevant, readonly } = props;
  const { debug } = React.useContext(ODKSurveyContext);

  //   const context = React.useContext(ODKSurveyContext);
  if (value !== undefined && typeof value !== "boolean") {
    return (
      <Callout intent="warning">
        <h4>
          Value must be a <Code>boolean</Code> for this field to work
        </h4>
      </Callout>
    );
  }
  return (
    <Checkbox
      large={true}
      disabled={relevant === false || readonly}
      labelElement={debug ? undefined : labelElement}
      onChange={props.onInputChange}
      defaultChecked={
        typeof props.defaultValue === "boolean" ? props.defaultValue : undefined
      }
    />
  );
}
