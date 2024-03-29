import { Colors } from "@blueprintjs/core";
import styled from "styled-components";

/** CSS container for highlighted formula code. */

const StyledCode = styled.code`
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
    color: ${Colors.VIOLET5};
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
    color: ${Colors.BLUE2} !important;
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
    color: ${Colors.VERMILION3};
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
    color: ${Colors.VERMILION2};
  }
`;

export default StyledCode;
