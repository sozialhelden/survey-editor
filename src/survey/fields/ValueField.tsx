import { Classes, FormGroup } from "@blueprintjs/core";
import * as React from "react";
import { FieldProps } from "../FieldProps";
import { internalFields } from "../internalFields";
import { ODKSurveyContext } from "../XLSFormSurvey";
import evaluateNodeColumn from "../../xlsform-simple-schema/functions/odk-formulas/evaluation/evaluateNodeColumn";
import { Label } from "./Label";
import RadioGroupField from "./RadioGroupField";
import BooleanField from "./BooleanField";
import NumberField from "./NumberField";
import DateField from "./DateField";
import TextField from "./TextField";
import CheckboxGroupField from "./CheckboxGroupField";
import DetailsPopover from "../DetailsPopover";

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

export default function ValueField(props: FieldProps) {
  const { node } = props;
  const isBoolean = props.quickType === "boolean";
  const context = React.useContext(ODKSurveyContext);
  const { language, debug } = context;
  const onInputChange = React.useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      const target = event.currentTarget;
      const values: Record<string, unknown> = {
        checkbox: target.checked,
        date: target.valueAsDate,
        number: target.valueAsNumber,
      };
      const value = values[target.type];
      props.onChange(value, props);
    },
    [props]
  );

  if (internalFields.includes(node.type) && !context.debug) {
    return null;
  }

  const detailsButtonCaption = (
    <code className={Classes.TEXT_MUTED}>{node.row.name}</code>
  );
  const detailsButton = (
    <DetailsPopover {...{ ...props, detailsButtonCaption }} />
  );
  const hintString = node.row.hint?.[language];
  const labelElement = (
    <Label {...{ ...props, debug, isEditable: !isBoolean }}>
      {props.quickType !== "boolean" && debug && detailsButton}
    </Label>
  );
  const evaluationResult = evaluateNodeColumn(
    node,
    context.context,
    "calculation",
    node.answer
  );
  const autoFieldProps = {
    ...props,
    labelElement,
    onInputChange,
    value: evaluationResult.result,
    defaultValue: node.row.default,
  };

  let input = <AutoField {...autoFieldProps} />;
  if (isBoolean) {
    return (
      <FormGroup
        helperText={hintString}
        labelFor={node.row.name}
        style={{ display: "flex" }}
      >
        {debug && detailsButton}
        {input}
      </FormGroup>
    );
  }
  return (
    <FormGroup
      helperText={hintString}
      label={labelElement}
      labelFor={node.row.name}
    >
      {input}
    </FormGroup>
  );
}
