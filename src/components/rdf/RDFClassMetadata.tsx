import { ControlGroup } from "@blueprintjs/core";
import * as React from "react";
import { useContext, useMemo } from "react";
import { getClassMetadataCompact } from "../../lib/rdf/getClassMetadata";
import { getFirstClassNodeWithName } from "../../lib/rdf/getFirstClassNodeWithName";
import StyledMarkdown from "../core/StyledMarkdown";
import { RDFGraphContext } from "./RDFGraphContext";

export function RDFClassMetadata({ name }: { name: string }) {
  const graph = useContext(RDFGraphContext);
  const node = useMemo(() => graph && getFirstClassNodeWithName(name, graph), [
    graph,
    name,
  ]);
  const metadata = useMemo(() => node && getClassMetadataCompact(node, graph), [
    graph,
    node,
  ]);

  if (!metadata) {
    return null;
  }

  const labels = metadata.get("label");
  const comments = metadata.get("comment");
  const sources = metadata.get("source");
  const isPartOfs = metadata.get("isPartOf");
  const firstLabel = labels?.[0];
  const basePrefix = name.replace(new RegExp(firstLabel + "$"), "");

  return (
    <ControlGroup
      vertical={true}
      style={{ gap: "1rem", textOverflow: "ellipsis", overflow: "hidden" }}
    >
      {labels?.map((label) => (
        <header>
          <code>{name.replace(new RegExp(`${label}$`), "")}</code>
          <br />
          <a href={name}>
            <code style={{ fontSize: "1.5em" }}>{label}</code>
          </a>
        </header>
      ))}

      {comments?.map((comment) => (
        <StyledMarkdown>
          {comment?.replaceAll(
            /\[\[(\w+)\]\]/g,
            (_, word) => `[\`${word}\`](${basePrefix}${word})`
          )}
        </StyledMarkdown>
      ))}

      {sources?.map((source) => (
        <p>
          Source: <a href={source}>{source}</a>
        </p>
      ))}
      {isPartOfs?.map((isPartOf) => (
        <p>
          Part of: <a href={isPartOf}>{isPartOf}</a>
        </p>
      ))}
    </ControlGroup>
  );
}
