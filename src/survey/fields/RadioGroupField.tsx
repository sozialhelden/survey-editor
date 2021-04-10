import {
  Callout,
  Code,
  ControlGroup,
  H4,
  Radio,
  RadioGroup,
} from "@blueprintjs/core";
import { FLEX_EXPANDER } from "@blueprintjs/core/lib/esm/common/classes";
import * as React from "react";
import { ODKSurveyContext } from "../../lib/ODKSurveyContext";
import { getNodeAbsolutePathString } from "../../xlsform-simple-schema/functions/odk-formulas/evaluation/XPath";
import getAllowedChoiceValues from "../../xlsform-simple-schema/functions/schema-creation/getAllowedChoiceValues";
import { FieldTypeButtonGroup } from "../FieldPopoverButton/FieldTypeButtonGroup";
import { FieldProps } from "../FieldProps";

type Props = FieldProps & {
  onInputChange: (event: React.FormEvent<HTMLInputElement>) => void;
  value: unknown;
  defaultValue: unknown;
};

export default function RadioGroupField(props: Props) {
  const { value, onInputChange, node, relevant, readonly } = props;
  const context = React.useContext(ODKSurveyContext);
  const { language, xlsForm, evaluationContext: evaluationContext } = context;

  if (
    value !== undefined &&
    typeof value !== "string" &&
    typeof value !== "boolean"
  ) {
    return (
      <Callout intent="warning">
        <h4>
          Value must be a <Code>string</Code> for this field to work
        </h4>
      </Callout>
    );
  }

  if (
    language === undefined ||
    xlsForm === undefined ||
    context === undefined ||
    evaluationContext === undefined
  ) {
    return null;
  }

  if (context.debug && node.typeParameters.length === 0) {
    return (
      <Callout intent="warning">
        <ControlGroup fill={true}>
          <H4>No choice list set.</H4>
          <div className={FLEX_EXPANDER} />
          <FieldTypeButtonGroup node={node} showType={false} />
        </ControlGroup>
      </Callout>
    );
  }

  const choiceLists = node.typeParameters.map(
    (choiceListName) => context.xlsForm?.choicesByName[choiceListName]
  );
  const key = getNodeAbsolutePathString(node, evaluationContext, ".");
  let allowedValues = getAllowedChoiceValues({
    node,
    xlsForm,
    context: evaluationContext,
    key,
  });
  if (!(allowedValues instanceof Array)) {
    allowedValues = allowedValues();
  }
  const allowedValuesSet = new Set(allowedValues);

  return (
    <RadioGroup
      onChange={onInputChange}
      selectedValue={
        value !== undefined && allowedValuesSet.has(String(value))
          ? String(value)
          : undefined
      }
      inline={true}
      disabled={relevant === false || readonly}
    >
      {choiceLists.flatMap(
        (choiceList) =>
          choiceList &&
          Object.keys(choiceList)
            .flatMap((choiceName) => {
              if (!allowedValuesSet.has(choiceName)) {
                return null;
              }
              const choiceRow =
                choiceName === undefined ? undefined : choiceList?.[choiceName];
              const definedLabel = choiceRow?.label?.[language];
              const shownLabel =
                definedLabel === "undefined" ? choiceRow?.name : definedLabel;
              return (
                <Radio
                  key={choiceRow?.name}
                  label={shownLabel}
                  value={choiceRow?.name}
                  inline={true}
                  large={true}
                />
              );
            })
            .filter(Boolean)
      )}
    </RadioGroup>
  );
}
