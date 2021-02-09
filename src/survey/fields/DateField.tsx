import { Callout, Code } from "@blueprintjs/core";
import { DateInput, IDateFormatProps } from "@blueprintjs/datetime";
import * as React from "react";
import { FieldProps } from "../FieldProps";

type Props = FieldProps & {
  labelElement: React.ReactNode;
  value: unknown;
};

const jsDateFormatter: IDateFormatProps = {
  // note that the native implementation of Date functions differs between browsers
  formatDate: (date: Date) => date.toLocaleDateString(),
  parseDate: (str: string) => new Date(str),
  placeholder: "YYYY-MM-DD",
};

export default function DateField(props: Props) {
  const { value } = props;

  const onChange = React.useCallback(
    (selectedDate: Date, isUserChange: boolean) => {
      if (isUserChange) {
        props.onChange(selectedDate, props);
      }
    },
    [props]
  );

  if (value !== undefined && !(value instanceof Date)) {
    return (
      <Callout intent="warning">
        <h4>
          Value must be a <Code>Date</Code> for this field to work
        </h4>
      </Callout>
    );
  }

  return <DateInput {...jsDateFormatter} onChange={onChange} />;
}
