import {
  Callout,
  ControlGroup,
  EditableText,
  H1,
  H2,
  H3,
  H4,
  H5,
} from "@blueprintjs/core";
import * as React from "react";
import { ODKSurveyContext } from "../../lib/ODKSurveyContext";
import { getNodeAbsolutePath } from "../../xlsform-simple-schema/functions/odk-formulas/evaluation/XPath";
import { isNodeRelevant } from "../../xlsform-simple-schema/types/ODKNode";
import DetailsPopover from "../DetailsPopover/DetailsPopover";
import { FieldProps } from "../FieldProps";
import { FieldSetForKey } from "../FieldSetForKey";

export default function ObjectField(props: FieldProps) {
  const { onChangeCell } = React.useContext(ODKSurveyContext);
  const { schema, schemaKey, node } = props;
  const subKeys = schema.objectKeys(schemaKey);
  const context = React.useContext(ODKSurveyContext);
  const { debug } = context;

  const label =
    node === context.context?.survey
      ? context.xlsForm?.worksheets.settings?.rows[0].form_title
      : schema.get(schemaKey, "label");
  const path =
    context.context && getNodeAbsolutePath(node, context.context).join("/");

  const onChangeSurveyName = React.useCallback(
    (text: string) => {
      if (text === label || (label === undefined && text === "")) {
        return;
      }
      onChangeCell("settings", 0, "form_title", text);
    },
    [onChangeCell, label]
  );

  const onChangeLabel = React.useCallback(
    (text: string) => {
      if (text === label || (label === undefined && text === "")) {
        return;
      }
      onChangeCell("survey", node.rowIndex, "label", text, node);
    },
    [node, onChangeCell, label]
  );

  const labelInput =
    node === context.context?.survey ? (
      <EditableText
        onChange={onChangeSurveyName}
        onConfirm={onChangeSurveyName}
        placeholder={`Enter a survey title…`}
        value={label}
        minWidth={100}
      />
    ) : (
      <EditableText
        multiline={true}
        onChange={onChangeLabel}
        onConfirm={onChangeLabel}
        placeholder={`Enter a title for \`${node.row.name}\`…`}
        value={label}
        minWidth={100}
      />
    );

  const HeadingClass = [H1, H2, H3, H4, H5][node.indentationLevel] || H5;

  const detailsButtonCaption = <code>{node.row.name}</code>;

  const hintString =
    typeof context.language === "string" && node.row.hint?.[context.language];

  const isRelevant = isNodeRelevant(node, context.context);
  if (!isRelevant && !debug) {
    return null;
  }
  return (
    <ControlGroup
      vertical={true}
      style={{ margin: `${6 / (node.indentationLevel + 1)}rem 0` }}
    >
      <ControlGroup fill={true} style={{ alignItems: "baseline" }}>
        <HeadingClass style={{ flex: 1 }} id={path}>
          {debug ? labelInput : label}
        </HeadingClass>
        {debug && node !== context.context?.survey && (
          <DetailsPopover {...{ ...props, detailsButtonCaption }} />
        )}
      </ControlGroup>

      {subKeys.map((subkey) => (
        <FieldSetForKey
          key={subkey}
          schemaKey={[schemaKey, subkey].join(".")}
          relevant={props.relevant}
          disabled={props.disabled}
        />
      ))}

      {hintString && <Callout intent={"primary"}>{hintString}</Callout>}
    </ControlGroup>
  );
}
