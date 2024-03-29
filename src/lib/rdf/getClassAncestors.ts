import { uniqBy } from "lodash";
import { isNamedNode, Store } from "rdflib";
import { NamedNode, Term } from "rdflib/lib/tf-types";
import { RDFS } from "./namespaces";

/**
 * Finds all terms defining ancestors of a given RDF `NamedNode`.
 * @returns a list with `X subClassOf Y` terms, one term per ancestor class.
 */
export function getClassAncestors(
  /** The RDF `NamedNode` of the class of interest */
  classNode: Term,
  /** The RDF graph in which the inheritance information is saved */
  graph: Store
): NamedNode[] {
  // We use `Term` as type above. This is to allow users of this function to use it with untyped
  // match results where they assert that the results are actually `NamedNode`s, which should be the
  // case for all defined classes.
  if (!isNamedNode(classNode)) {
    // Still, somebody might supply something that is not a class, so…
    throw new Error(
      `${classNode} is not a \`NamedNode\`. Please supply a \`NamedNode\`.`
    );
  }

  // Find all references to parent classes. Multiple inheritance is allowed.
  const parentClassNodes = graph
    .match(classNode, RDFS("subClassOf"))
    .map((quad) => quad.object);

  // Find all ancestors recursively
  const ancestors = parentClassNodes.flatMap((q) => [
    q,
    ...getClassAncestors(q, graph),
  ]);

  // As schemas can use multiple inheritance, ancestor classes might appear more than once.
  return uniqBy(ancestors.reverse(), "value").reverse().filter(isNamedNode);
}
