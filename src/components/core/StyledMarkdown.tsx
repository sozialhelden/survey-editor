import styled from "styled-components";
import Markdown from "./Markdown";

/**
 * Like <Markdown>, but using some opinionated minimal default CSS.
 */
const StyledMarkdown = styled(Markdown)`
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 1em 0;
  }

  code,
  pre {
    color: inherit;
    background-color: rgba(255, 255, 255, 0.3);
    @media (prefers-color-scheme: dark) {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  pre {
    padding: 0.5em 0.55em;
    margin: 0.5em 0;
    line-height: 1.3em;
    white-space: pre-wrap;
  }

  code {
    font-weight: 600;
  }

  p {
    margin-block-end: 16px;
  }
  p:last-child {
    margin-block-end: 0;
  }

  ul,
  ol {
    margin: 1em 1.25em;
  }
`;

export default StyledMarkdown;
