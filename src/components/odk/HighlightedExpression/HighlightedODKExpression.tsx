import { Callout } from "@blueprintjs/core";
import * as React from "react";
import { CSSProperties } from "styled-components";
import { Expression } from "../../../xlsform-simple-schema/functions/odk-formulas/pratt-parser-base";
import { EvaluationError } from "../../../xlsform-simple-schema/types/Errors";
import { ODKNode } from "../../../xlsform-simple-schema/types/ODKNode";
import { InvalidExpression } from "./InvalidExpression";
import StyledCode from "./StyledCode";
import { TokenElement } from "./TokenElement";

/** Shows a parsed formula expression with syntax highlighting and debugging features. */
export default function HighlightedExpression(props: {
  /** The code to show. */
  /** Highlights the success state of a formula parsing or evaluation process. */
  state?: "error" | "success";
  /** The error object to show, if applicable. */
  error?: Error;
  /** The formula expression to show. */
  expression?: Expression;
  /** The expression's parent expression. Allows customizing appearance based on the parent. */
  parentExpression?: Expression;
  /** The tokens to show. */
  node: ODKNode;
  /** Additional CSS class to apply. */
  className?: string;
  /** Additional CSS styles to apply. */
  style?: CSSProperties;
  stackDepth?: number;
}) {
  if (!props.expression) {
    return <InvalidExpression {...props} />;
  }

  if (props.stackDepth && props.stackDepth > 50) {
    return (
      <Callout intent="warning">Stack overflow while highlighting.</Callout>
    );
  }
  const isErroneousExpression =
    props.error instanceof EvaluationError &&
    props.error.expression === props.expression;

  return (
    <StyledCode
      style={props.style}
      className={`${props.className || ""} expression expression-${
        props.expression.kind
      } ${isErroneousExpression ? "has-error" : ""}`}
    >
      {props.expression.children.map((expressionOrToken, i) => {
        if (expressionOrToken instanceof Expression) {
          return (
            <HighlightedExpression
              expression={expressionOrToken}
              parentExpression={props.expression}
              error={props.error}
              node={props.node}
              stackDepth={(props.stackDepth || 0) + 1}
            />
          );
        } else {
          return (
            <TokenElement
              token={expressionOrToken}
              key={expressionOrToken.index}
              expression={props.expression}
              parentExpression={props.parentExpression}
              node={props.node}
              stackDepth={(props.stackDepth || 0) + 1}
            />
          );
        }
      })}
    </StyledCode>
  );
}
