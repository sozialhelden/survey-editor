import * as RDFLib from "rdflib";
import { getPropertyMetadataCompact } from "./getPropertyMetadata";
import loadSchemaOrgGraph from "./loadSchemaOrgGraph";
import { SCHEMA } from "./namespaces";

const store = RDFLib.graph();
loadSchemaOrgGraph(store);

describe("getPropertyMetadataCompact()", () => {
  it("gets metadata of https://schema.org/identifier", async () => {
    const result = getPropertyMetadataCompact(SCHEMA("identifier"), store);

    expect(result).toMatchInlineSnapshot(`
      Map {
        "label" => Array [
          "identifier",
        ],
        "comment" => Array [
          "The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
              ",
        ],
        "domainIncludes" => Array [
          "https://schema.org/Thing",
        ],
        "rangeIncludes" => Array [
          "https://schema.org/PropertyValue",
          "https://schema.org/Text",
          "https://schema.org/URL",
        ],
        "supersededBy" => Array [],
      }
    `);
  });
});
