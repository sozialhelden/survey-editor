import { Callout, ControlGroup, H4, H5, UL } from "@blueprintjs/core";
import marked from "marked";
import * as React from "react";
import { useContext, useMemo } from "react";
import styled from "styled-components";
import {
  ClassMetadataKey,
  getClassMetadataCompact,
} from "../../../lib/rdf/getClassMetadata";
import { getFirstClassOrPropertyNodeWithName } from "../../../lib/rdf/getFirstClassOrPropertyNodeWithName";
import {
  getPropertyMetadataCompact,
  PropertyMetadataKey,
} from "../../../lib/rdf/getPropertyMetadata";
import StyledMarkdown from "../../core/StyledMarkdown";
import PrefixedNodeName from "../PrefixedNodeName";
import { RDFGraphContext } from "../RDFGraphContext";

function getMarkedRendererWithExternalLinks() {
  const renderer = new marked.Renderer();
  renderer.link = function (href, title, text) {
    return `<a target="rdfssource" rel="noopener noreferrer" href="${href}"${
      title != null ? ` title="${title}"` : ""
    }>${text}</a>`;
  };
  return renderer;
}

function* concat<T, U>(
  arg0: Iterable<T> | undefined,
  arg1: Iterable<U> | undefined
) {
  for (const iter of [arg0, arg1]) for (const x of iter || []) yield x;
}

function ExternalAnchor(props: React.HTMLProps<HTMLAnchorElement>) {
  return (
    <a target="rdfssource" rel="noopener noreferrer" {...props}>
      {props.children}
    </a>
  );
}

const ControlGroupWithGapSections = styled(ControlGroup)`
  > * {
    margin-top: 0.5rem !important;
    &:first-child {
      margin-top: 0 !important;
    }
  }
`;

export function RDFClassMetadata({
  name,
  contextPrefix,
  visibleSections,
}: {
  name: string;
  contextPrefix: string;
  visibleSections?: Partial<
    Record<ClassMetadataKey | PropertyMetadataKey, boolean>
  >;
}) {
  const graph = useContext(RDFGraphContext);
  const node = useMemo(
    () => graph && getFirstClassOrPropertyNodeWithName(name, graph),
    [graph, name]
  );

  const classMetadata = useMemo(
    () => node && getClassMetadataCompact(node, graph),
    [graph, node]
  );

  const propertyMetadata = useMemo(
    () => node && getPropertyMetadataCompact(node, graph),
    [graph, node]
  );

  const metadata = new Map([...concat(classMetadata, propertyMetadata)]);

  const markedRenderer = React.useMemo(getMarkedRendererWithExternalLinks, []);

  if (!metadata) {
    return null;
  }

  const labels = metadata.get("label");
  const comments = metadata.get("comment");
  const sources = metadata.get("source");
  const isPartOfs = metadata.get("isPartOf");
  const domain = [...(metadata.get("domainIncludes")?.values() || [])];
  const range = [...(metadata.get("rangeIncludes")?.values() || [])];
  const supersededBy = [...(metadata.get("supersededBy")?.values() || [])];
  const firstLabel = labels?.[0];
  const basePrefix = name.replace(new RegExp(firstLabel + "$"), "");

  return (
    <ControlGroupWithGapSections
      vertical={true}
      style={{ textOverflow: "ellipsis", overflow: "hidden" }}
    >
      {visibleSections?.label !== false &&
        labels?.map((label) => (
          <H4>
            <ExternalAnchor href={name}>
              <PrefixedNodeName name={name} contextPrefix={contextPrefix} />
            </ExternalAnchor>
          </H4>
        ))}

      {visibleSections?.supersededBy !== false &&
        supersededBy?.map((s) => (
          <Callout intent="warning">
            <H5>Deprecated, superseded by:</H5>
            <ExternalAnchor href={s}>{s}</ExternalAnchor>
          </Callout>
        ))}

      {visibleSections?.rangeIncludes !== false && range.length > 0 && (
        <section>
          <H5>Type:</H5>
          <UL>
            {range.map((r) => (
              <li>
                <ExternalAnchor href={r}>
                  <PrefixedNodeName name={r} contextPrefix={contextPrefix} />
                </ExternalAnchor>
              </li>
            ))}
          </UL>
        </section>
      )}

      {visibleSections?.domainIncludes !== false && domain.length > 0 && (
        <section>
          <H5>Property of:</H5>
          <UL>
            {domain.map((d) => (
              <li>
                <ExternalAnchor href={d}>
                  <PrefixedNodeName name={d} contextPrefix={contextPrefix} />
                </ExternalAnchor>
              </li>
            ))}
          </UL>
        </section>
      )}

      {visibleSections?.comment !== false &&
        comments?.map((comment) => (
          <section>
            <StyledMarkdown markedOptions={{ renderer: markedRenderer }}>
              {comment?.replaceAll(
                /\[\[(\w+)\]\]/g,
                (_, word) => `[\`${word}\`](${basePrefix}${word})`
              )}
            </StyledMarkdown>
          </section>
        ))}

      {visibleSections?.source !== false && sources && sources?.length > 0 && (
        <section>
          <H5>Sources:</H5>
          {sources?.map((source) => (
            <p>
              <ExternalAnchor href={source}>{source}</ExternalAnchor>
            </p>
          ))}
        </section>
      )}

      {visibleSections?.isPartOf !== false &&
        isPartOfs?.map((isPartOf) => (
          <section>
            <H5>Part of:</H5>
            <ExternalAnchor href={isPartOf}>{isPartOf}</ExternalAnchor>
          </section>
        ))}
    </ControlGroupWithGapSections>
  );
}
