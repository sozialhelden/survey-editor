import { Callout, FormGroup } from "@blueprintjs/core";
import * as React from "react";
import { ODKSurveyContext } from "../../lib/ODKSurveyContext";
import { internalFieldTypes } from "../../xlsform-simple-schema/field-types/internalFieldTypes";
import evaluateNodeColumn from "../../xlsform-simple-schema/functions/odk-formulas/evaluation/evaluateNodeColumn";
import FieldPopoverButton from "../FieldPopoverButton/FieldPopoverButton";
import { FieldProps } from "../FieldProps";
import BooleanField from "./BooleanField";
import CheckboxGroupField from "./CheckboxGroupField";
import DateField from "./DateField";
import { EditableFieldHint } from "./EditableFieldHint";
import { EditableFieldLabel } from "./EditableFieldLabel";
import FileUploadField from "./FileUploadField";
import NumberField from "./NumberField";
import RadioGroupField from "./RadioGroupField";
import TextField from "./TextField";

type AutoFieldProps = FieldProps & {
  value: any;
  defaultValue: unknown;
  onInputChange: (event: React.FormEvent<HTMLInputElement>) => void;
  labelElement: JSX.Element;
};

export function AutoField(props: AutoFieldProps) {
  const { node } = props;

  const FieldComponentMap: Record<
    string,
    React.FunctionComponent<AutoFieldProps>
  > = {
    integer: NumberField,
    decimal: NumberField,
    range: NumberField,
    text: TextField,
    select_one: RadioGroupField,
    select_one_from_file: RadioGroupField,
    select_multiple: CheckboxGroupField,
    select_multiple_from_file: CheckboxGroupField,
    rank: TextField,
    note: TextField,
    geopoint: TextField,
    geotrace: TextField,
    geoshape: TextField,
    date: DateField,
    time: DateField,
    datetime: DateField,
    image: FileUploadField,
    audio: FileUploadField,
    video: FileUploadField,
    file: FileUploadField,
    barcode: TextField,
    calculate: TextField,
    acknowledge: BooleanField,
    hidden: TextField,
    "xml-external": TextField,
    start: DateField,
    end: DateField,
    today: DateField,
    deviceid: TextField,
    simserial: TextField,
    subscriberid: TextField,
    phonenumber: TextField,
    username: TextField,
    email: TextField,
    audit: TextField,
  };

  const FieldComponent = FieldComponentMap[node.type] || TextField;

  return <FieldComponent {...props} />;
}

export default function AnyValueField(props: FieldProps) {
  const { node } = props;
  const isBoolean = props.node.type === "acknowlege";
  const context = React.useContext(ODKSurveyContext);
  const { language, debug, evaluationContext, onChangeAnswer } = context;

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

  const isInternalField = internalFieldTypes.includes(node.type);
  if (isInternalField && !context.debug) {
    return null;
  }
  const detailsButton = (
    <FieldPopoverButton {...{ ...props }} editable={true} />
  );

  const hint = <EditableFieldHint {...{ node, debug }} />;
  const labelElement = (
    <EditableFieldLabel
      {...{ ...props, debug, isEditable: !isBoolean && !isInternalField }}
    >
      {!isBoolean && debug && detailsButton}
    </EditableFieldLabel>
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
      <FormGroup labelFor={node.row.name} style={{ display: "flex" }}>
        {debug && detailsButton}
        {input}
        {hint}
      </FormGroup>
    );
  }

  if (node.type === "note") {
    return <Callout intent="primary">{labelElement}</Callout>;
  }

  return (
    <FormGroup label={labelElement} labelFor={node.row.name}>
      {input}
      <EditableFieldHint {...{ node, debug }} />
    </FormGroup>
  );
}
