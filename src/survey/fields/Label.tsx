import { Classes, ControlGroup, EditableText } from "@blueprintjs/core";
import * as React from "react";
import { FieldProps } from "../FieldProps";
import { ODKSurveyContext } from "../XLSFormSurvey";
import {
  QuestionRow,
  LocalizedString,
} from "../../xlsform-simple-schema/types/RowTypes";

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
    onChangeRow,
    isEditable,
    children,
  } = props;
  const context = React.useContext(ODKSurveyContext);
  const label = schema.get(schemaKey, "label");

  const onChangeLabel = React.useCallback(
    (text: string) => {
      if (text === label || (label === undefined && text === "")) {
        return;
      }
      const newLabel: LocalizedString = {
        ...node.row.label,
        [context.language]: text,
      };
      const newRow: QuestionRow = { ...node.row };
      newRow.label = newLabel;
      onChangeRow(node, newRow);
    },
    [node, context.language, onChangeRow, label]
  );

  let labelInput =
    isEditable && debug ? (
      <EditableText
        onChange={onChangeLabel}
        onConfirm={onChangeLabel}
        placeholder={`Enter a title for \`${node.row.name}\`…`}
        value={label}
        minWidth={100}
        maxLines={5}
      />
    ) : (
      label
    );

  if (children) {
    return (
      <ControlGroup style={{ alignItems: "center" }}>
        {
          <span
            className={relevant ? "" : Classes.TEXT_DISABLED}
            style={{ flex: 1 }}
          >
            {debug ? labelInput : label}
          </span>
        }
        {children}
      </ControlGroup>
    );
  } else {
    return (
      <span
        className={relevant ? "" : Classes.TEXT_DISABLED}
        style={{ flex: 1 }}
      >
        {debug ? labelInput : label}
      </span>
    );
  }
}
