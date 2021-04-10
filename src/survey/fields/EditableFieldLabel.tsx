import { Classes, ControlGroup, EditableText } from "@blueprintjs/core";
import * as React from "react";
import StyledMarkdown from "../../components/StyledMarkdown";
import { ODKSurveyContext } from "../../lib/ODKSurveyContext";
import { getNodeAbsolutePath } from "../../xlsform-simple-schema/functions/odk-formulas/evaluation/XPath";
import { FieldProps } from "../FieldProps";

/**
 * Displays an editable field label. Supports Markdown when rendering the result.
 */
export function EditableFieldLabel(
  props: FieldProps & {
    debug: boolean;
    minimal?: boolean;
    children: React.ReactNode;
    isEditable: boolean;
  }
) {
  const {
    schema,
    schemaKey,
    node,
    debug,
    relevant,
    isEditable,
    children,
  } = props;
  const context = React.useContext(ODKSurveyContext);
  const labelString = node.row.label?.[context.language || "English (en)"];
  const evaluatedLabel = schema.get(schemaKey, "label");
  const { onChangeCell } = React.useContext(ODKSurveyContext);
  const path =
    context.evaluationContext &&
    getNodeAbsolutePath(node, context.evaluationContext).join("/");
  const [editedLabelString, setEditedLabelString] = React.useState<string>();

  const onConfirmLabel = React.useCallback(
    (text: string) => {
      if (text === labelString || (labelString === undefined && text === "")) {
        return;
      }
      onChangeCell("survey", node.rowIndex, "label", text, node);
      setEditedLabelString(undefined);
    },
    [labelString, node, onChangeCell]
  );

  let labelInput =
    isEditable && debug ? (
      <EditableText
        onChange={setEditedLabelString}
        onConfirm={onConfirmLabel}
        placeholder={`Enter a title for \`${node.row.name}\` in ${context.languageName}…`}
        value={
          editedLabelString === undefined ? labelString : editedLabelString
        }
        minWidth={100}
        confirmOnEnterKey={true}
        multiline={true}
      />
    ) : (
      evaluatedLabel
    );

  if (children) {
    return (
      <ControlGroup
        style={{ alignItems: "center" }}
        lang={context.languageCode}
      >
        {
          <span
            id={path}
            className={relevant ? "" : Classes.TEXT_DISABLED}
            style={{ flex: 1 }}
          >
            {debug ? (
              labelInput
            ) : (
              <StyledMarkdown>{evaluatedLabel}</StyledMarkdown>
            )}
          </span>
        }
        {children}
      </ControlGroup>
    );
  } else {
    return (
      <span
        id={path}
        className={relevant ? "" : Classes.TEXT_DISABLED}
        style={{ flex: 1 }}
        lang={context.languageCode}
      >
        {debug ? (
          labelInput
        ) : (
          <StyledMarkdown style={{ display: "inline-block" }}>
            {evaluatedLabel}
          </StyledMarkdown>
        )}
      </span>
    );
  }
}
