import { Callout, Code, H4 } from "@blueprintjs/core";
import * as React from "react";
import { ODKSurveyContext } from "../lib/ODKSurveyContext";
import { findNodeByPathRelativeToScope } from "../xlsform-simple-schema/functions/odk-formulas/evaluation/XPath";
import { FieldProps } from "./FieldProps";
import ObjectArrayField from "./fields/ObjectArrayField";
import ObjectField from "./fields/ObjectField";
import ValueField from "./fields/ValueField";

export function FieldSetForKey(props: {
  schemaKey: string;
  relevant?: boolean;
  readonly?: boolean;
}) {
  const { schemaKey } = props;
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

    if (typeof evaluationResult?.result === "boolean") {
      relevant = evaluationResult.result;
    } else if (evaluationResult?.result === null) {
      relevant = false;
    } else {
      relevant = true;
    }
  }

  let readonly = false;
  if (typeof props.readonly !== "undefined" || props.readonly === true) {
    const evaluationResult = context.evaluationResults
      .get(node)
      ?.get("readonly");
    readonly =
      typeof evaluationResult?.result === "boolean"
        ? evaluationResult.result
        : props.readonly;
  }
  // TODO: Add warning for evaluation failure

  const fieldProps: FieldProps = {
    schema,
    node,
    schemaKey,
    quickType,
    relevant,
    readonly,
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
