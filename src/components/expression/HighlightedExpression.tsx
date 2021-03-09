import { Classes, Colors } from "@blueprintjs/core";
import * as React from "react";
import styled, { CSSProperties } from "styled-components";
import { ODKSurveyContext } from "../../lib/ODKSurveyContext";
import DetailsPopover from "../../survey/DetailsPopover/DetailsPopover";
import {
  findNodeByNameInCurrentAndAncestorScopes,
  findNodeByNameInsideScope,
} from "../../xlsform-simple-schema/functions/odk-formulas/evaluation/XPath";
import {
  Expression,
  NameExpression,
  Token,
  TokenType,
} from "../../xlsform-simple-schema/functions/odk-formulas/pratt-parser-base";
import { EvaluationError } from "../../xlsform-simple-schema/types/Errors";
import { ODKNode } from "../../xlsform-simple-schema/types/ODKNode";

const StyledCode = styled.code`
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;

  .expression.has-error {
    text-decoration: underline wavy ${Colors.RED2};
    text-decoration-skip: none;
    text-decoration-skip-ink: none;
    text-decoration-color: ${Colors.RED2} !important;

    a {
      text-decoration: underline wavy ${Colors.RED2};
      text-decoration-skip: none;
      text-decoration-skip-ink: none;
      text-decoration-color: ${Colors.RED2} !important;
    }
  }

  .expression-name {
    color: ${Colors.GREEN3};
  }

  &.expression-call > .expression-name:first-child,
  .expression-call > .expression-name:first-child {
    color: ${Colors.BLUE3};
  }

  .expression-name {
    word-break: break-word;
  }

  .token-STRING_LITERAL {
    color: ${Colors.ORANGE3};
  }

  .token-NUMBER_LITERAL {
    color: ${Colors.ORANGE4};
  }

  .token-COMMA {
    color: ${Colors.GRAY1};
  }

  .token-LEFT_PAREN,
  .token-RIGHT_PAREN {
    color: ${Colors.BLUE2};
    font-weight: bold;
  }

  .token-INVALID {
    border: 2px ${Colors.RED5} solid;
    padding: 2px;
    margin: -2px;
    color: ${Colors.RED5};
  }

  .token-COMMA::after {
    content: " ";
  }

  .expression-operator {
    clear: left;
  }

  .token-COMPARISON {
    &::after,
    &::before {
      content: " ";
    }
    font-weight: bold;
    color: ${Colors.RED2};
  }

  .token-COLON,
  .token-BOOLEAN_AND,
  .token-BOOLEAN_OR,
  .token-PLUS,
  .token-GREATER_THAN,
  .token-LESS_THAN,
  .token-MODULO,
  .token-QUESTION {
    word-break: break-word;
    display: block;
    font-weight: bold;
    color: ${Colors.RED2};
  }
`;

function TokenElement({
  token,
  expression,
  parentExpression,
  node,
}: {
  token: Token;
  expression?: Expression;
  parentExpression?: Expression;
  node: ODKNode;
}) {
  const className = `token token-${TokenType[token.type]}`;
  const context = React.useContext(ODKSurveyContext);
  if (
    token.type === TokenType.NAME &&
    parentExpression?.kind === "call" &&
    expression instanceof NameExpression &&
    token === parentExpression.tokens[0]
  ) {
    return (
      <a
        href={`https://getodk.github.io/xforms-spec/#fn:${token.text}`}
        className={className}
        target="docs"
      >
        {token.text}
      </a>
    );
  } else if (
    token.type === TokenType.NAME &&
    expression instanceof NameExpression &&
    token.text.startsWith("$") &&
    context.context
  ) {
    const referencedNode =
      findNodeByNameInCurrentAndAncestorScopes(
        expression.name,
        context.context,
        node
      ) ||
      findNodeByNameInsideScope(
        expression.name,
        context.context,
        context.context.survey
      );
    if (!referencedNode || referencedNode instanceof Array) {
      debugger;
      return (
        <span className={className} data-referenced-node={referencedNode}>
          {token.text}
        </span>
      );
    }
    return (
      <>
        {"${"}
        <DetailsPopover
          node={referencedNode}
          editable={false}
          nameOfOnlyShownTab={"calculation"}
        />
        {"}"}
      </>
    );
  }
  return <span className={className}>{token.text}</span>;
}

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

export default function HighlightedExpression(props: {
  code?: string;
  state?: "error" | "success";
  error?: Error;
  expression?: Expression;
  parentExpression?: Expression;
  className?: string;
  style?: CSSProperties;
  tokens?: Token[];
  node: ODKNode;
}) {
  if (!props.expression) {
    return <InvalidExpression {...props} />;
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
              code={expressionOrToken.tokens.map((t) => t.text).join("")}
              expression={expressionOrToken}
              parentExpression={props.expression}
              tokens={expressionOrToken.tokens}
              error={props.error}
              node={props.node}
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
            />
          );
        }
      })}
    </StyledCode>
  );
}
