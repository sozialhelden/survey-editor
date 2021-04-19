import { isNamedNode, Store, sym } from "rdflib";
import { RDF, RDFS } from "./namespaces";

export function getFirstClassOrPropertyNodeWithName(
  name: string,
  graph: Store
) {
  const classNode = graph.anyStatementMatching(
    sym(name),
    RDF("type"),
    RDFS("Class")
  )?.subject;
  const propertyNode = graph.anyStatementMatching(
    sym(name),
    RDF("type"),
    RDF("Property")
  )?.subject;
  const node = classNode || propertyNode;
  return isNamedNode(node) ? node : undefined;
}
