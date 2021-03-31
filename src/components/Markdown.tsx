import { Callout } from "@blueprintjs/core";
import { omit } from "lodash";
import marked from "marked";
import * as React from "react";
import unindent from "./unindent";

interface IProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  /** Use this to supply any markdown compiler function that can convert a Markdown string to a HTML string */
  marked: (markdown: string) => string;
  /** Removes <p></p> tags around the markdown code */
  inline?: boolean;
}

function MarkdownDiv(props: IProps) {
  if (typeof props.children !== "string") {
    return (
      <Callout intent="danger">Markdown content must be a string.</Callout>
    );
  }
  let html = props.marked?.(unindent(props.children));
  if (props.inline) {
    html = html.replaceAll(/<\/?p>/g, "");
  }
  return (
    <div
      {...omit(props, "children", "marked", "inline")}
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
}

// Use this code to load the component lazily at runtime.
// const Markdown = LoadableMap({
//   loader: {
//     marked: () => import("marked"),
//   },
//   render(loaded, props: IProps) {
//     return <MarkdownDiv {...props} marked={loaded.marked?.default} />;
//   },
//   loading: () => null,
// });

/**
 * React component that displays a given Markdown as formatted output. Allows arbitrary indentation
 * of the whole code for readability.
 *
 * @example
 *   <Markdown>{`
 *     # A header
 *
 *     ## A secondary header
 *
 *     - a list item
 *     - another list item
 *   `}</Markdown>
 */
function Markdown(props: {
  children: React.ReactNode;
  /** Removes <p></p> tags around the markdown code */
  inline?: boolean;
}) {
  return <MarkdownDiv {...props} marked={marked} />;
}

export default Markdown;
