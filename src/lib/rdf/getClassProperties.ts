import { compact } from "lodash";
import { Store } from "rdflib";
import { NamedNode } from "rdflib/lib/tf-types";
import { SCHEMA } from "./namespaces";

export function getClassProperties(node: NamedNode, graph: Store) {
  return compact(
    graph
      .match(undefined, SCHEMA("domainIncludes"), node)
      .map((statement) =>
        statement.subject.termType === "NamedNode"
          ? statement.subject
          : undefined
      )
  );
}
