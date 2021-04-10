import { Store, sym } from "rdflib";
import { QuestionRow } from "../../xlsform-simple-schema/types/RowTypes";
import { RDF, RDFS } from "./namespaces";

export default function getRowsForRDFSClass(
  classUri: string,
  graph: Store
): QuestionRow[] {
  const statementsWhereUriIsSubject = graph.match(sym(classUri));

  const statementsWhereUriIsAClass = graph.match(
    sym(classUri),
    RDF("type"),
    RDFS("Class")
  );

  if (statementsWhereUriIsSubject.length > 0) {
    if (statementsWhereUriIsAClass.length === 0) {
      throw new Error(
        `\`${classUri}\` exists, but is not a known RDF schema class.`
      );
    }
  }

  return [];
}
