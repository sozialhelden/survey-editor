import { FormGroup } from "@blueprintjs/core";
import * as React from "react";
import { FieldProps } from "../FieldProps";
import { internalFields } from "../internalFields";
import { ODKSurveyContext } from "../XLSFormSurvey";
import evaluateNodeColumn from "../../xlsform-simple-schema/functions/odk-formulas/evaluation/evaluateNodeColumn";
import { Label } from "./Label";
import { AutoField } from "./AutoField";

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
