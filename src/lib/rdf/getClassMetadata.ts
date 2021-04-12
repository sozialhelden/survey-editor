import { Store } from "rdflib";
import { NamedNode } from "rdflib/lib/tf-types";
import { RDFS, SCHEMA } from "./namespaces";

type ClassMetadataKey =
  | "label"
  | "subClassOf"
  | "comment"
  | "isPartOf"
  | "source";

const namesToPredicateNodes: Map<ClassMetadataKey, NamedNode> = new Map([
  ["label", RDFS("label")],
  ["subClassOf", RDFS("subClassOf")],
  ["comment", RDFS("comment")],
  ["isPartOf", SCHEMA("isPartOf")],
  ["source", SCHEMA("source")],
]);

/**
 * @returns a list of terms, one term per class metadata information.
 *
 * Supports these predicates:
 *
 * - rdfs:label
 * - rdfs:subClassOf
 * - rdfs:comment
 * - schema:isPartOf
 * - schema:source
 */
export function getClassMetadata(classNode: NamedNode, graph: Store) {
  return new Map(
    [...namesToPredicateNodes.entries()].map(([k, v]) => [
      k,
      graph.match(classNode, v),
    ])
  );
}

/**
 * @returns a raw object containing class metadata information. Values are strings.
 *
 * Supports these predicates:
 *
 * - `label` (shortcut for `rdfs:label`)
 * - `subClassOf` (shortcut for `rdfs:subClassOf`)
 * - `comment` (shortcut for `rdfs:comment`)
 * - `isPartOf` (shortcut for `schema:isPartOf`)
 * - `source` (shortcut for `schema:source`)
 */

export function getClassMetadataCompact(classNode: NamedNode, graph: Store) {
  const result = getClassMetadata(classNode, graph);
  return new Map(
    [...result.entries()].map(([k, v]) => [k, v.map((v) => v.object.value)])
  );
}
