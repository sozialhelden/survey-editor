import { Callout, Checkbox, Code, ControlGroup } from "@blueprintjs/core";
import { compact } from "lodash";
import * as React from "react";
import { ODKSurveyContext } from "../../../lib/ODKSurveyContext";
import { getNodeAbsolutePathString } from "../../../xlsform-simple-schema/functions/odk-formulas/evaluation/XPath";
import getAllowedChoiceValues from "../../../xlsform-simple-schema/functions/schema-creation/getAllowedChoiceValues";
import { FieldTypeButtonGroup } from "../FieldPopoverButton/FieldTypeButtonGroup";
import { FieldProps } from "../FieldProps";

type Props = FieldProps & {
  value: unknown;
};

export default function CheckboxGroupField(props: Props) {
  const { value, node, relevant, readonly } = props;
  const context = React.useContext(ODKSurveyContext);
  const { language, onChangeAnswer, xlsForm } = context;

  const valueIsInvalid =
    value !== undefined &&
    typeof value !== "string" &&
    typeof value !== "boolean" &&
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
      onChangeAnswer(Array.from(newChoices), props);
    },
    [props, onChangeAnswer, choices]
  );

  if (
    typeof language !== "string" ||
    context.evaluationContext === undefined ||
    xlsForm === undefined
  ) {
    return null;
  }

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

  if (context.debug && node.typeParameters.length === 0) {
    return (
      <Callout intent="warning" title="No choice list set.">
        <FieldTypeButtonGroup node={node} showType={false} />
      </Callout>
    );
  }

  const choiceLists = compact(
    node.typeParameters.map(
      (choiceListName) => context.xlsForm?.choicesByName[choiceListName]
    )
  );
  const key = getNodeAbsolutePathString(node, context.evaluationContext, ".");
  let allowedValues = getAllowedChoiceValues({
    node,
    xlsForm,
    context: context.evaluationContext,
    key,
  });
  if (!(allowedValues instanceof Array)) {
    allowedValues = allowedValues();
  }
  const allowedValuesSet = new Set(allowedValues);

  return (
    <ControlGroup vertical={true}>
      {choiceLists.flatMap((choiceList) => {
        return Object.keys(choiceList).map((value) => {
          if (!allowedValuesSet.has(value)) {
            return null;
          }
          const choiceRow = choiceList[value];

          const definedLabel = choiceRow?.label?.[language];
          const shownLabel =
            definedLabel === "undefined" ? choiceRow?.name : definedLabel;
          return (
            <Checkbox
              disabled={relevant === false || readonly}
              label={shownLabel}
              checked={typeof value === "string" && choices.has(value)}
              name={value}
              inline={true}
              large={true}
              onChange={onChange}
            />
          );
        });
      })}
    </ControlGroup>
  );
}
