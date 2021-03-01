import {
  Callout,
  Classes,
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
import DetailsPopover from "../DetailsPopover";
import { FieldProps } from "../FieldProps";
import { FieldSetForKey } from "../FieldSetForKey";

export default function ObjectField(props: FieldProps) {
  const { schema, schemaKey, node, onChangeCell } = props;
  const subKeys = schema.objectKeys(schemaKey);
  const context = React.useContext(ODKSurveyContext);
  const { debug } = context;

  const label = schema.get(schemaKey, "label");
  const path =
    context.context && getNodeAbsolutePath(node, context.context).join("/");

  const onChangeLabel = React.useCallback(
    (text: string) => {
      if (text === label || (label === undefined && text === "")) {
        return;
      }
      onChangeCell("survey", node.rowIndex, "label", text, node);
    },
    [node, onChangeCell, label]
  );

  const labelInput = (
    <EditableText
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
        {debug && <DetailsPopover {...{ ...props, detailsButtonCaption }} />}
      </ControlGroup>

      {subKeys.map((subkey) => (
        <FieldSetForKey
          key={subkey}
          schemaKey={[schemaKey, subkey].join(".")}
          onChange={props.onChange}
          onChangeCell={props.onChangeCell}
          relevant={props.relevant}
          disabled={props.disabled}
        />
      ))}

      {hintString && <Callout intent={"primary"}>{hintString}</Callout>}
    </ControlGroup>
  );
}
