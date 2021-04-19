import { Store } from "rdflib";
import { NamedNode } from "rdflib/lib/tf-types";
import { RDF, RDFS } from "./namespaces";

export default function isClassNode(node: NamedNode, graph: Store) {
  return !!graph.anyStatementMatching(node, RDF("type"), RDFS("Class"));
}
