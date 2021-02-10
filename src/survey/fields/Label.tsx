import { Classes, ControlGroup } from "@blueprintjs/core";
import * as React from "react";
import { FieldProps } from "../FieldProps";
import DetailsPopover from "../DetailsPopover";

export function Label(props: FieldProps & { debug: boolean }) {
  const { schema, schemaKey, node, debug, relevant } = props;
  const label = schema.get(schemaKey, "label");

  const detailsButtonCaption = (
    <code className={Classes.TEXT_MUTED}>{node.row.name}</code>
  );

  return (
    <ControlGroup style={{ alignItems: "baseline" }}>
      {label && label !== "" && (
        <span
          className={relevant ? "" : Classes.TEXT_DISABLED}
          style={{ flex: 1 }}
        >
          {label}
        </span>
      )}
      {debug && <DetailsPopover {...{ ...props, detailsButtonCaption }} />}
    </ControlGroup>
  );
}
