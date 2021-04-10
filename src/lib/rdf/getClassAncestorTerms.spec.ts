import * as RDFLib from "rdflib";
import { getClassAncestorTerms } from "./getClassAncestorTerms";
import loadSchemaOrgGraph from "./loadSchemaOrgGraph";
import { SCHEMA } from "./namespaces";

const store = RDFLib.graph();
loadSchemaOrgGraph(store);

describe("getClassAncestorTerms()", () => {
  it("gets ancestors of https://schema.org/Hotel", async () => {
    const result = getClassAncestorTerms(
      RDFLib.sym("https://schema.org/Hotel"),
      store
    );

    const expected = [
      "LodgingBusiness",
      "LocalBusiness",
      "Organization",
      "Place",
      "Thing",
    ].map((n) => SCHEMA(n));

    expect(result).toEqual(expected);
  });
});
