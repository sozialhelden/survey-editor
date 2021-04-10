import { fromPairs, pick } from "lodash";
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

export function getClassMetadata(classNode: NamedNode, graph: Store) {
  return fromPairs(
    [...namesToPredicateNodes.entries()].map(([k, v]) => [
      k,
      graph.match(classNode, v).map((s) => pick(s, "object", "graph")),
    ])
  );
}

// export function getRDFProperties(node: NamedNode, graph: Store) {
//   graph.match(node, RDFS(predicate)).map((s) => pick(s, "object", "graph")),
// }

export function getClassMetadataCompact(classNode: NamedNode, graph: Store) {
  const result = getClassMetadata(classNode, graph);
  return fromPairs(
    Object.keys(result).map((k) => [k, result[k][0]?.object.value])
  );
}
