import { Classes, Colors } from "@blueprintjs/core";
import * as React from "react";
import styled, { CSSProperties } from "styled-components";
import ODKFormulaParser from "../xlsform-simple-schema/functions/odk-formulas/odk-formula-parser/ODKFormulaParser";
import { TokenType } from "../xlsform-simple-schema/functions/odk-formulas/pratt-parser-base";
import {
  Expression,
  Token,
} from "../xlsform-simple-schema/functions/odk-formulas/pratt-parser-base";

function TokenElement({
  token,
  expression,
}: {
  token: Token;
  expression?: Expression;
}) {
  if (
    token.type === TokenType.NAME &&
    expression?.kind === "call" &&
    token === expression.tokens[0]
  ) {
    return (
      <a
        href={`https://getodk.github.io/xforms-spec/#fn:${token.text}`}
        className={`token token-${TokenType[token.type]}`}
        target="docs"
      >
        {token.text}
      </a>
    );
  }
  return (
    <span className={`token token-${TokenType[token.type]}`}>{token.text}</span>
  );
}

const StyledCode = styled.code`
  padding: 4px;

  &.expression-call > .token:first-child,
  .expression-call > .token:first-child {
    color: ${Colors.BLUE3};
  }

  .expression-name {
    font-weight: bold;
  }

  .token-NAME {
    color: ${Colors.GREEN3};
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
`;

export default function HighlightedExpression(props: {
  code?: string;
  state?: "error" | "success";
  error?: Error;
  expression?: Expression;
  className?: string;
  style?: CSSProperties;
  parser?: ODKFormulaParser;
}) {
  if (!props.expression) {
    const tokens = props.parser?.tokens;
    if (!tokens) {
      return (
        <StyledCode
          style={props.style}
          className={`${props.className} expression expression-invalid`}
        >
          {props.code}
        </StyledCode>
      );
    }

    const lastToken = tokens[tokens.length - 1];
    const indexAfterLastToken = lastToken.index + lastToken.text.length;
    return (
      <StyledCode
        style={props.style}
        className={`${props.className} expression expression-invalid`}
      >
        {tokens.map((token) => (
          <TokenElement token={token} key={token.index} />
        ))}
        <span className={Classes.TEXT_DISABLED}>
          {props.code?.slice(indexAfterLastToken)}
        </span>
      </StyledCode>
    );
  }
  return (
    <StyledCode
      style={props.style}
      className={`${props.className} expression expression-${props.expression.kind}`}
    >
      {props.expression.tokens.map((token) => (
        <TokenElement token={token} expression={props.expression} />
      ))}
    </StyledCode>
  );
}
