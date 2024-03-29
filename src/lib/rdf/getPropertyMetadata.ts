import { Store } from "rdflib";
import { NamedNode } from "rdflib/lib/tf-types";
import { RDFS, SCHEMA } from "./namespaces";

export type PropertyMetadataKey =
  | "label"
  | "comment"
  | "domainIncludes"
  | "rangeIncludes"
  | "supersededBy";

const namesToPredicateNodes: Map<PropertyMetadataKey, NamedNode> = new Map([
  ["label", RDFS("label")],
  ["comment", RDFS("comment")],
  ["domainIncludes", SCHEMA("domainIncludes")],
  ["rangeIncludes", SCHEMA("rangeIncludes")],
  ["supersededBy", SCHEMA("supersededBy")],
]);

/**
 * @returns a list of terms, one term per property metadata information.
 *
 * Supports these predicates:
 *
 * - rdfs:label
 * - rdfs:comment
 * - schema:domainIncludes
 * - schema:rangeIncludes
 */
export function getPropertyMetadata(classNode: NamedNode, graph: Store) {
  return new Map(
    [...namesToPredicateNodes.entries()].map(([k, v]) => [
      k,
      graph.match(classNode, v),
    ])
  );
}

/**
 * @returns a raw object containing property metadata information.
 *   Values are strings.
 *
 * Supports these predicates:
 *
 * - `label` (shortcut for `rdfs:label`)
 * - `comment` (shortcut for `rdfs:comment`)
 * - `domainIncludes` (shortcut for `schema:domainIncludes`)
 * - `rangeIncludes` (shortcut for `schema:rangeIncludes`)
 */

export function getPropertyMetadataCompact(classNode: NamedNode, graph: Store) {
  const result = getPropertyMetadata(classNode, graph);
  return new Map(
    [...result.entries()].map(([k, v]) => [k, v.map((v) => v.object.value)])
  );
}
