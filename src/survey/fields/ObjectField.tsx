import {
  Callout,
  Classes,
  ControlGroup,
  H1,
  H2,
  H3,
  H4,
  H5,
} from "@blueprintjs/core";
import * as React from "react";
import DetailsPopover from "../DetailsPopover";
import { FieldProps } from "../FieldProps";
import { FieldSetForKey } from "../FieldSetForKey";
import { ODKSurveyContext } from "../XLSFormSurvey";

export default function ObjectField(props: FieldProps) {
  const { schema, schemaKey, node } = props;
  const subKeys = schema.objectKeys(schemaKey);
  const context = React.useContext(ODKSurveyContext);
  const { debug } = context;

  const label = schema.get(schemaKey, "label");

  const HeadingClass = [H1, H2, H3, H4, H5][node.indentationLevel] || H5;

  const detailsButtonCaption = (
    <code className={Classes.TEXT_MUTED}>{node.row.name}</code>
  );

  const hintString = node.row.hint?.[context.language];

  return (
    <ControlGroup
      vertical={true}
      style={{ margin: `${6 / (node.indentationLevel + 1)}rem 0` }}
    >
      <ControlGroup fill={true} style={{ alignItems: "baseline" }}>
        {label && label !== "" && (
          <HeadingClass style={{ flex: 1 }}>{label}</HeadingClass>
        )}
        {debug && <DetailsPopover {...{ ...props, detailsButtonCaption }} />}
      </ControlGroup>

      {subKeys.map((subkey) => (
        <FieldSetForKey
          key={subkey}
          schemaKey={[schemaKey, subkey].join(".")}
          onChange={props.onChange}
          relevant={props.relevant}
        />
      ))}

      {hintString && <Callout intent={"primary"}>{hintString}</Callout>}
    </ControlGroup>
  );
}
