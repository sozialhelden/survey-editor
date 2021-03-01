import { Callout, Code, H4 } from "@blueprintjs/core";
import * as React from "react";
import { ODKSurveyContext } from "../lib/ODKSurveyContext";
import { WorksheetName } from "../xlsform-simple-schema";
import { findNodeByPathRelativeToScope } from "../xlsform-simple-schema/functions/odk-formulas/evaluation/XPath";
import { ODKNode } from "../xlsform-simple-schema/types/ODKNode";
import { FieldProps } from "./FieldProps";
import ObjectArrayField from "./fields/ObjectArrayField";
import ObjectField from "./fields/ObjectField";
import ValueField from "./fields/ValueField";

export function FieldSetForKey(props: {
  onChange: (value: unknown, fieldProps: FieldProps) => void;
  onChangeCell: (
    worksheetName: WorksheetName,
    rowIndex: number,
    columnName: string,
    value: unknown,
    node?: ODKNode
  ) => void;
  schemaKey: string;
  relevant?: boolean;
  disabled?: boolean;
}) {
  const { schemaKey, onChange, onChangeCell } = props;
  const { schema, context, debug } = React.useContext(ODKSurveyContext);
  if (!context || !schema) {
    return null;
  }
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

  let relevant = props.relevant;
  if (typeof relevant !== "boolean" || relevant === true) {
    const evaluationResult = context.evaluationResults
      .get(node)
      ?.get("relevant");
    relevant =
      typeof evaluationResult?.result === "boolean"
        ? evaluationResult.result
        : true;
  }

  let disabled = props.disabled;
  if (typeof disabled !== "boolean" || disabled === true) {
    const evaluationResult = context.evaluationResults
      .get(node)
      ?.get("disabled");
    disabled =
      typeof evaluationResult?.result === "boolean"
        ? evaluationResult.result
        : false;
  }
  // TODO: Add warning for evaluation failure

  const fieldProps: FieldProps = {
    schema,
    node,
    schemaKey,
    quickType,
    onChange,
    onChangeCell,
    relevant,
    disabled,
  };

  if (!debug && !relevant) {
    return null;
  }

  switch (quickType) {
    case "object":
      return <ObjectField {...fieldProps} />;
    case "objectArray":
      return <ObjectArrayField {...fieldProps} />;
    default:
      return <ValueField {...fieldProps} />;
  }
}
