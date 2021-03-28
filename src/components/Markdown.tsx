import { Callout } from "@blueprintjs/core";
import { omit } from "lodash";
import marked from "marked";
import * as React from "react";
import unindent from "./unindent";

interface IProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  marked: (markdown: string) => string;
}

function MarkdownDiv(props: IProps) {
  if (typeof props.children !== "string") {
    return (
      <Callout intent="danger">Markdown content must be a string.</Callout>
    );
  }
  return (
    <div
      {...omit(props, "children", "marked")}
      dangerouslySetInnerHTML={{
        __html: props.marked?.(unindent(props.children)),
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
  /** */
  children: React.ReactNode;
}) {
  return <MarkdownDiv {...props} marked={marked} />;
}

export default Markdown;
