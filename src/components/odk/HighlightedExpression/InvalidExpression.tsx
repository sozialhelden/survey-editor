import { Classes } from "@blueprintjs/core";
import * as React from "react";
import { CSSProperties } from "styled-components";
import { Token } from "../../../xlsform-simple-schema/functions/odk-formulas/pratt-parser-base";
import { ODKNode } from "../../../xlsform-simple-schema/types/ODKNode";
import StyledCode from "./StyledCode";
import { TokenElement } from "./TokenElement";

/**
 * Shows an invalid expression's tokens and the non-tokenizable rest of its code with syntax
 * highlighting.
 */
export function InvalidExpression(props: {
  code?: string;
  className?: string;
  style?: CSSProperties;
  tokens?: Token[];
  node: ODKNode;
}) {
  if (!props.tokens) {
    return (
      <StyledCode
        style={props.style}
        className={`${props.className || ""} expression expression-invalid`}
      >
        {props.code}
      </StyledCode>
    );
  }

  const lastToken = props.tokens[props.tokens.length - 1];
  const indexAfterLastToken = lastToken.index + lastToken.text.length;
  return (
    <StyledCode
      style={props.style}
      className={`${props.className || ""} expression expression-invalid`}
    >
      {props.tokens.map((token) => (
        <TokenElement token={token} key={token.index} node={props.node} />
      ))}
      <span className={Classes.TEXT_DISABLED}>
        {props.code?.slice(indexAfterLastToken)}
      </span>
    </StyledCode>
  );
}
