import { Callout } from "@blueprintjs/core";
import * as React from "react";
import { FieldProps } from "../FieldProps";

/** Displays a 'begin repeat' group of fields. */
export default function RepeatField(props: FieldProps) {
  return (
    <Callout intent={"warning"}>
      <h4>Object arrays are not implemented yet.</h4>
      <pre>{JSON.stringify(props.node, null, 2)}</pre>
    </Callout>
  );
}
