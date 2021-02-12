import { Callout, Checkbox, Code, ControlGroup } from "@blueprintjs/core";
import * as React from "react";
import { FieldProps } from "../FieldProps";
import { ODKSurveyContext } from "../XLSFormSurvey";

type Props = FieldProps & {
  value: unknown;
  allowedValues: string[];
};

export default function CheckboxGroupField(props: Props) {
  const { value, allowedValues, node, relevant } = props;
  const context = React.useContext(ODKSurveyContext);
  const valueIsInvalid =
    value !== undefined &&
    typeof value !== "string" &&
    (!(value instanceof Array) ||
      value.find((element) => typeof element !== "string"));

  const choices = React.useMemo<Set<string>>(() => {
    if (typeof value === "string") {
      return new Set<string>(value === "" ? [] : value?.split(" "));
    }
    if (value instanceof Array || value instanceof Set) {
      return new Set<string>(value);
    }
    return new Set<string>();
  }, [value]);

  const onChange = React.useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      const choice = event.currentTarget.name;
      const newChoices = new Set(choices);
      if (event.currentTarget.checked) {
        newChoices.add(choice);
      } else {
        newChoices.delete(choice);
      }
      props.onChange(Array.from(newChoices), props);
    },
    [props, choices]
  );

  if (valueIsInvalid) {
    return (
      <Callout intent="warning">
        <h4>
          Value must be a <Code>string</Code> or Array of <Code>string</Code>s
          for this field to work.
        </h4>
      </Callout>
    );
  }

  return (
    <ControlGroup vertical={true}>
      {allowedValues.map((value) => {
        const choiceListName = node.typeParameters[0];
        const choiceRow = context.xlsForm?.choicesByName[choiceListName][value];
        const definedLabel = choiceRow?.label?.[context.language];
        const shownLabel =
          definedLabel === "undefined" ? choiceRow?.name : definedLabel;
        return (
          <Checkbox
            disabled={relevant === false}
            label={shownLabel}
            checked={typeof value === "string" && choices.has(value)}
            name={value}
            inline={true}
            large={true}
            onChange={onChange}
          />
        );
      })}
    </ControlGroup>
  );
}
