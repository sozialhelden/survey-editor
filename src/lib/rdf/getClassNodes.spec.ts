import * as RDFLib from "rdflib";
import { NamedNode } from "rdflib/lib/tf-types";
import { getClassNodes } from "./getClassNodes";
import loadSchemaOrgGraph from "./loadSchemaOrgGraph";
import { SCHEMA } from "./namespaces";

const store = RDFLib.graph();
loadSchemaOrgGraph(store);

describe("getClassNodes()", () => {
  it("gets a list of class nodes", async () => {
    const result = getClassNodes(store);
    expect(result).not.toBeUndefined();

    expect(result).toContainEqual<NamedNode>(SCHEMA("3DModel"));
    expect(result).toContainEqual<NamedNode>(SCHEMA("APIReference"));
    expect(result).toContainEqual<NamedNode>(SCHEMA("AcceptAction"));
  });
});
