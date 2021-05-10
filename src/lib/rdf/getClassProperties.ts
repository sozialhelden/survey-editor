import { compact, sortBy, sortedUniqBy } from "lodash";
import { isNamedNode, Store } from "rdflib";
import { NamedNode } from "rdflib/lib/tf-types";
import { getClassAncestors } from "./getClassAncestors";
import { SCHEMA } from "./namespaces";

export function getClassProperties(node: NamedNode, graph: Store) {
  return sortedUniqBy(
    sortBy(
      compact(
        graph
          .match(undefined, SCHEMA("domainIncludes"), node)
          .map((statement) =>
            isNamedNode(statement.subject) ? statement.subject : undefined
          )
      ),
      (p) => p.value
    ),
    (p) => p.value
  );
}

export function getDirectAndIndirectClassProperties(
  node: NamedNode,
  graph: Store
) {
  return sortedUniqBy(
    sortBy(
      [node, ...getClassAncestors(node, graph)].flatMap((a) =>
        getClassProperties(a, graph)
      ),
      (p) => p.value
    ),
    (p) => p.value
  );
}

export function getClassesWithProperty(node: NamedNode, graph: Store) {
  return sortedUniqBy(
    sortBy(
      compact(
        graph
          .match(node, SCHEMA("domainIncludes"), undefined)
          .map((statement) => {
            const object = statement.object;
            return isNamedNode(object) ? object : undefined;
          })
      ),
      (c) => c.value
    ),
    (c) => c.value
  );
}
