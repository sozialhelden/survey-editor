import * as RDFLib from "rdflib";
import loadSchemaOrgGraph from "./loadSchemaOrgGraph";

const store = RDFLib.graph();
loadSchemaOrgGraph(store);

describe("getRowsForRDFSClass()", () => {
  test.todo(
    "loads https://schema.org/Hotel"
    // , () => {
    // const rows = getODKNodeForRDFSClass(
    //   "https://schema.org/Hotel",
    //   store,
    //   xlsForm
    // );
    // expect(rows).not.toBeUndefined();
    // }
  );
});
