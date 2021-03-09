import { Callout, FormGroup } from "@blueprintjs/core";
import * as React from "react";
import { ODKSurveyContext } from "../../lib/ODKSurveyContext";
import evaluateNodeColumn from "../../xlsform-simple-schema/functions/odk-formulas/evaluation/evaluateNodeColumn";
import DetailsPopover from "../DetailsPopover/DetailsPopover";
import { FieldProps } from "../FieldProps";
import { internalFields } from "../internalFields";
import BooleanField from "./BooleanField";
import CheckboxGroupField from "./CheckboxGroupField";
import DateField from "./DateField";
import { Label } from "./Label";
import NumberField from "./NumberField";
import RadioGroupField from "./RadioGroupField";
import TextField from "./TextField";

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
  const {
    language,
    debug,
    context: evaluationContext,
    onChangeAnswer,
  } = context;

  const onInputChange = React.useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      const target = event.currentTarget;
      const values: Record<string, unknown> = {
        checkbox: target.checked,
        date: target.valueAsDate,
        number: target.valueAsNumber,
        text: target.value,
        radio: target.value,
      };
      const value = values[target.type];
      onChangeAnswer(value, props);
    },
    [onChangeAnswer, props]
  );

  if (!language || !evaluationContext) {
    return null;
  }

  const isInternalField = internalFields.includes(node.type);
  if (isInternalField && !context.debug) {
    return null;
  }

  const detailsButton = <DetailsPopover {...{ ...props }} editable={true} />;
  const hintString = node.row.hint?.[language] && (
    <Callout intent="primary">{node.row.hint?.[language]}</Callout>
  );
  const labelElement = (
    <Label {...{ ...props, debug, isEditable: !isBoolean && !isInternalField }}>
      {props.quickType !== "boolean" && debug && detailsButton}
    </Label>
  );
  const evaluationResult = evaluateNodeColumn(
    node,
    evaluationContext,
    "calculation",
    evaluationContext.nodesToAnswers.get(node)
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
        // helperText={hintString}
        labelFor={node.row.name}
        style={{ display: "flex" }}
      >
        {debug && detailsButton}
        {input}
        {hintString}
      </FormGroup>
    );
  }

  if (node.type === "note") {
    return labelElement;
  }
  return (
    <FormGroup
      // helperText={hintString}
      label={labelElement}
      labelFor={node.row.name}
    >
      {input}
      {hintString}
    </FormGroup>
  );
}
