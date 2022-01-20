// import { NamedNode, Store } from "rdflib";
// import { createEmptyGroupRows } from "../../xlsform-simple-schema/functions/editing/createUntitledGroupRows";
// import {
//   IBeginGroupMarkerRow,
//   IEndGroupMarkerRow,
// } from "../../xlsform-simple-schema/types/BeginOrEndMarkerRow";
// import { QuestionRow } from "../../xlsform-simple-schema/types/RowTypes";
// import { XLSForm } from "../../xlsform-simple-schema/types/XLSForm";
// import { getClassAncestors } from "./getClassAncestors";
// import { RDF, RDFS } from "./namespaces";

// export default function createRowsForRDFSClassRecursive(
//   namedNode: NamedNode,
//   graph: Store,
//   xlsForm: XLSForm
// ): (QuestionRow | IBeginGroupMarkerRow | IEndGroupMarkerRow)[] {
//   const statementsWhereUriIsAClass = graph.match(
//     namedNode,
//     RDF("type"),
//     RDFS("Class")
//   );

//   if (statementsWhereUriIsAClass.length === 0) {
//     throw new Error(`\`${namedNode}\` is not a known RDF schema class.`);
//   }

//   const { beginMarkerRow, endMarkerRow } = createEmptyGroupRows(xlsForm);
//   const ancestors = getClassAncestors(namedNode, graph);

//   for (const ancestor of ancestors) {
//     const rows: QuestionRow[] = createRowsForRDFSClassRecursive(
//       classUri,
//       graph,
//       xlsForm
//     );
//   }

//   return [beginMarkerRow, ...rows, endMarkerRow];
// }

export {};
