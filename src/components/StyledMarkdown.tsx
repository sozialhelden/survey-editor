import { Colors } from "@blueprintjs/core";
import styled from "styled-components";
import Markdown from "./Markdown";

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
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    color: ${Colors.DARK_GRAY1};
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin: -1px;
    padding: 1px;
    background-color: rgba(255, 255, 255, 0.3);
  }

  pre {
    padding: 0.5em 0.55em;
    margin: 0.5em 0;
    line-height: 1.3em;
    background: white;
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
