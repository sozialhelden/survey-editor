import { Callout, Code, H4 } from "@blueprintjs/core";
import * as React from "react";

import { ODKSurveyContext } from "./XLSFormSurvey";
import { findNodeByPathRelativeToScope } from "../xlsform-simple-schema/functions/odk-formulas/evaluation/XPath";
import { FieldProps } from "./FieldProps";
import ObjectArrayField from "./fields/ObjectArrayField";
import ObjectField from "./fields/ObjectField";
import ValueField from "./fields/ValueField";
import CheckboxGroupField from "./fields/CheckboxGroupField";

export function FieldSetForKey(props: {
  onChange: (value: unknown, fieldProps: FieldProps) => void;
  schemaKey: string;
}) {
  const { schemaKey, onChange } = props;
  const { schema, context, debug } = React.useContext(ODKSurveyContext);
  const quickType = schema.getQuickTypeForKey(schemaKey);
  const schemaKeyPath = [".", ...schemaKey.replace(/\.\$/g, "").split(".")];
  const node = findNodeByPathRelativeToScope(
    schemaKeyPath,
    context,
    context.survey
  );

  if (node instanceof Array) {
    if (!debug) {
      return null;
    }
    return (
      <Callout intent="warning">
        <H4>
          Found multiple nodes with path <Code>{schemaKeyPath.join("/")}</Code>.
          This should not happen.
        </H4>
        {/* <p></p> */}
      </Callout>
    );
  }
  if (!node) {
    if (!debug) {
      return null;
    }
    return (
      <Callout intent="warning">
        <H4>
          No node found for{" "}
          <Code>{schemaKeyPath[schemaKeyPath.length - 1]}</Code>
        </H4>
        {/* <p></p> */}
      </Callout>
    );
  }

  const fieldProps: FieldProps = {
    schema,
    node,
    schemaKey,
    quickType,
    onChange,
  };

  switch (quickType) {
    case "object":
      return <ObjectField {...fieldProps} />;
    case "objectArray":
      return <ObjectArrayField {...fieldProps} />;
    default:
      return <ValueField {...fieldProps} />;
  }
}
