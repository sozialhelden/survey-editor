import { Callout } from "@blueprintjs/core";
import { omit } from "lodash";
import * as React from "react";
import unindent from "./unindent";
import marked from "marked";

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

// const Markdown = LoadableMap({
//   loader: {
//     marked: () => import("marked"),
//   },
//   render(loaded, props: IProps) {
//     return <MarkdownDiv {...props} marked={loaded.marked?.default} />;
//   },
//   loading: () => null,
// });

function Markdown(props: { children: React.ReactNode }) {
  return <MarkdownDiv {...props} marked={marked} />;
}

export default Markdown;
