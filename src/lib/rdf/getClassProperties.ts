import { compact, uniqBy } from "lodash";
import { isNamedNode, Store } from "rdflib";
import { NamedNode } from "rdflib/lib/tf-types";
import { getClassAncestors } from "./getClassAncestors";
import { SCHEMA } from "./namespaces";

export function getClassProperties(node: NamedNode, graph: Store) {
  return compact(
    graph
      .match(undefined, SCHEMA("domainIncludes"), node)
      .map((statement) =>
        isNamedNode(statement.subject) ? statement.subject : undefined
      )
  );
}

export function getDirectAndIndirectClassProperties(
  node: NamedNode,
  graph: Store
) {
  return uniqBy(
    [node, ...getClassAncestors(node, graph)].flatMap((a) =>
      getClassProperties(a, graph)
    ),
    (p) => p.value
  );
}

export function getClassesWithProperty(node: NamedNode, graph: Store) {
  return uniqBy(
    compact(
      graph
        .match(node, SCHEMA("domainIncludes"), undefined)
        .map((statement) => {
          const object = statement.object;
          return isNamedNode(object) ? object : undefined;
        })
    ),
    (c) => c.value
  );
}
