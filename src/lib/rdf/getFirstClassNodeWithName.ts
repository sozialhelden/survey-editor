import { isNamedNode, Store, sym } from "rdflib";
import { RDF, RDFS } from "./namespaces";

export function getFirstClassNodeWithName(name: string, graph: Store) {
  const node = graph
    .match(sym(name), RDF("type"), RDFS("Class"))
    .map((s) => s.subject)[0];

  return isNamedNode(node) ? node : undefined;
}
