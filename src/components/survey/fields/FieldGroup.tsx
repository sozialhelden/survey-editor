import {
  ControlGroup,
  EditableText,
  H1,
  H2,
  H3,
  H4,
  H5,
} from "@blueprintjs/core";
import * as React from "react";
import { ODKSurveyContext } from "../../../lib/ODKSurveyContext";
import { getNodeAbsolutePath } from "../../../xlsform-simple-schema/functions/odk-formulas/evaluation/XPath";
import { isNodeRelevant } from "../../../xlsform-simple-schema/types/ODKNode";
import FieldPopoverButton from "../FieldPopoverButton/FieldPopoverButton";
import { FieldProps } from "../FieldProps";
import { SurveyField } from "../SurveyField";
import { EditableFieldHint } from "./EditableFieldHint";

export default function FieldGroup(props: FieldProps) {
  const { onChangeCell } = React.useContext(ODKSurveyContext);
  const { schema, schemaKey, node } = props;
  const isComplexType = [
    "image",
    "audio",
    "video",
    "geopoint",
    "geotrace",
    "geoshape",
  ].includes(node.type);
  const subKeys = isComplexType ? [] : schema.objectKeys(schemaKey);
  const context = React.useContext(ODKSurveyContext);
  const { debug } = context;

  const labelString = schema.get(schemaKey, "label");
  const path =
    context.evaluationContext &&
    getNodeAbsolutePath(node, context.evaluationContext).join("/");

  const [editedLabelString, setEditedLabelString] = React.useState<string>();

  const onChangeLabel = React.useCallback(
    (text: string) => {
      if (text === labelString || (labelString === undefined && text === "")) {
        return;
      }
      onChangeCell("survey", node.rowIndex, "label", text, node);
      setEditedLabelString(undefined);
    },
    [node, onChangeCell, labelString]
  );

  const labelInput = node !== context.evaluationContext?.survey && (
    <EditableText
      multiline={true}
      onChange={setEditedLabelString}
      onConfirm={onChangeLabel}
      confirmOnEnterKey={true}
      placeholder={`Enter a title for \`${node.row.name}\`in ${context.languageName}…`}
      value={editedLabelString === undefined ? labelString : editedLabelString}
      minWidth={100}
    />
  );

  const HeadingClass = [H1, H2, H3, H4, H5][node.indentationLevel] || H5;

  const isRelevant = isNodeRelevant(node, context.evaluationContext);
  if (!isRelevant && !debug) {
    return null;
  }
  return (
    <ControlGroup
      vertical={true}
      style={{ padding: `${6 / (node.indentationLevel + 1)}rem 0` }}
    >
      <ControlGroup
        fill={false}
        style={{
          alignItems: "baseline",
        }}
      >
        <HeadingClass
          style={{
            flex: 1,
          }}
          id={path}
        >
          {debug ? <>{labelInput}</> : labelString}
        </HeadingClass>
        {debug && node !== context.evaluationContext?.survey && (
          <FieldPopoverButton {...{ ...props }} editable={true} />
        )}
      </ControlGroup>
      <EditableFieldHint {...{ node, debug }} />
      {subKeys.map((subkey) => (
        <SurveyField
          key={subkey}
          schemaKey={[schemaKey, subkey].join(".")}
          relevant={props.relevant}
          readonly={props.readonly}
        />
      ))}
    </ControlGroup>
  );
}
