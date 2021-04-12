import { Store } from "rdflib";
import { RDF, RDFS } from "./namespaces";

export function getClassNodes(graph: Store) {
  return graph
    .match(undefined, RDF("type"), RDFS("Class"))
    .map((s) => s.subject);
}
