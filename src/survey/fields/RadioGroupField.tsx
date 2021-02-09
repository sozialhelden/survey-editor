import { Callout, Code, Radio, RadioGroup } from "@blueprintjs/core";
import * as React from "react";
import { FieldProps } from "../FieldProps";
import { ODKSurveyContext } from "../XLSFormSurvey";

type Props = FieldProps & {
  onInputChange: (event: React.FormEvent<HTMLInputElement>) => void;
  value: unknown;
  allowedValues: string[];
};

export default function RadioGroupField(props: Props) {
  const { value, onInputChange, allowedValues, node } = props;
  const context = React.useContext(ODKSurveyContext);

  if (value !== undefined && typeof value !== "string") {
    return (
      <Callout intent="warning">
        <h4>
          Value must be a <Code>string</Code> for this field to work
        </h4>
      </Callout>
    );
  }

  return (
    <RadioGroup
      // label={labelElement}
      onChange={onInputChange}
      selectedValue={value}
      inline={true}
    >
      {allowedValues.map((value) => {
        const choiceListName = node.typeParameters[0];
        const choiceRow = context.xlsForm?.choicesByName[choiceListName][value];
        const definedLabel = choiceRow?.label?.[context.language];
        const shownLabel =
          definedLabel === "undefined" ? choiceRow?.name : definedLabel;
        return (
          <Radio
            label={shownLabel}
            value={choiceRow?.name}
            inline={true}
            large={true}
          />
        );
      })}
    </RadioGroup>
  );
}
