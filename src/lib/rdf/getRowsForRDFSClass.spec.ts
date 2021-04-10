import * as RDFLib from "rdflib";
import getRowsForRDFSClass from "./getRowsForRDFSClass";
import loadSchemaOrgGraph from "./loadSchemaOrgGraph";

const store = RDFLib.graph();
loadSchemaOrgGraph(store);

describe("getRowsForRDFSClass()", () => {
  it("loads https://schema.org/Hotel", () => {
    const rows = getRowsForRDFSClass("https://schema.org/Hotel", store);
    expect(rows).not.toBeUndefined();
  });
});
