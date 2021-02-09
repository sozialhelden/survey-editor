import { Classes, ControlGroup, FormGroup } from "@blueprintjs/core";
import * as React from "react";
import { FieldProps } from "../FieldProps";
import { internalFields } from "../internalFields";
import { ODKSurveyContext } from "../XLSFormSurvey";
import RadioGroupField from "./RadioGroupField";
import BooleanField from "./BooleanField";
import NumberField from "./NumberField";
import DateField from "./DateField";
import TextField from "./TextField";
import DetailsPopover from "../DetailsPopover";
import CheckboxGroupField from "./CheckboxGroupField";

function Label(props: FieldProps & { debug: boolean }) {
  const { schema, schemaKey, node, debug } = props;
  const label = schema.get(schemaKey, "label");

  const detailsButtonCaption = (
    <code className={Classes.TEXT_MUTED}>{node.row.name}</code>
  );

  return (
    <ControlGroup style={{ alignItems: "baseline" }}>
      {label && label !== "" && <span style={{ flex: 1 }}>{label}</span>}
      {debug && <DetailsPopover {...{ ...props, detailsButtonCaption }} />}
    </ControlGroup>
  );
}

function AutoField(
  props: FieldProps & {
    value: unknown;
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

export default function ValueField(props: FieldProps) {
  const { node } = props;
  const context = React.useContext(ODKSurveyContext);
  const { language, debug } = context;
  const onInputChange = React.useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      props.onChange(event.currentTarget.value, props);
    },
    [props]
  );

  if (internalFields.includes(node.type) && !context.debug) {
    return null;
  }

  const hintString = node.row.hint?.[language];
  const labelElement = <Label {...{ ...props, debug }} />;
  const autoFieldProps = {
    ...props,
    labelElement,
    onInputChange,
    value: node.answer,
  };

  let input = <AutoField {...autoFieldProps} />;

  return (
    <FormGroup
      helperText={hintString}
      label={labelElement}
      labelFor="text-input"
    >
      {input}
    </FormGroup>
  );
}
