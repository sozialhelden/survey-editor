import { Classes, ControlGroup, EditableText } from "@blueprintjs/core";
import * as React from "react";
import StyledMarkdown from "../../components/StyledMarkdown";
import { ODKSurveyContext } from "../../lib/ODKSurveyContext";
import { getNodeAbsolutePath } from "../../xlsform-simple-schema/functions/odk-formulas/evaluation/XPath";
import { FieldProps } from "../FieldProps";

export function Label(
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
  const label = node.row.label?.[context.language || "English (en)"];
  const evaluatedLabel = schema.get(schemaKey, "label");
  const { onChangeCell } = React.useContext(ODKSurveyContext);
  const path =
    context.context && getNodeAbsolutePath(node, context.context).join("/");
  const [editedLabel, setEditedLabel] = React.useState(label);

  const onChangeLabel = React.useCallback((text: string) => {
    setEditedLabel(text);
  }, []);

  React.useEffect(() => {
    setEditedLabel(label);
  }, [label]);

  const onConfirmLabel = React.useCallback(
    (text: string) => {
      if (text === label || (label === undefined && text === "")) {
        return;
      }
      onChangeCell("survey", node.rowIndex, "label", text, node);
    },
    [node, onChangeCell, label]
  );

  let labelInput =
    isEditable && debug ? (
      <EditableText
        onChange={onChangeLabel}
        onConfirm={onConfirmLabel}
        placeholder={`Enter a title for \`${node.row.name}\`…`}
        value={editedLabel}
        minWidth={100}
        minLines={1}
        maxLines={5}
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
        {debug ? labelInput : <StyledMarkdown>{evaluatedLabel}</StyledMarkdown>}
      </span>
    );
  }
}
