import * as RDFLib from "rdflib";
import { getClassMetadataCompact } from "./getClassMetadata";
import loadSchemaOrgGraph from "./loadSchemaOrgGraph";
import { SCHEMA } from "./namespaces";

const store = RDFLib.graph();
loadSchemaOrgGraph(store);

describe("getClassMetadataCompact()", () => {
  it("gets metadata of https://schema.org/Hotel", async () => {
    const result = getClassMetadataCompact(SCHEMA("Hotel"), store);
    expect([...result.entries()]).toMatchInlineSnapshot(`
      Array [
        Array [
          "label",
          Array [
            "Hotel",
          ],
        ],
        Array [
          "subClassOf",
          Array [
            "https://schema.org/LodgingBusiness",
          ],
        ],
        Array [
          "comment",
          Array [
            "A hotel is an establishment that provides lodging paid on a short-term basis (Source: Wikipedia, the free encyclopedia, see http://en.wikipedia.org/wiki/Hotel).
      <br /><br />
      See also the <a href=\\"/docs/hotels.html\\">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
      ",
          ],
        ],
        Array [
          "isPartOf",
          Array [],
        ],
        Array [
          "source",
          Array [
            "https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology",
          ],
        ],
        Array [
          "supersededBy",
          Array [],
        ],
      ]
    `);
  });

  it("gets metadata of https://schema.org/ImagingTest", async () => {
    const result = getClassMetadataCompact(SCHEMA("ImagingTest"), store);
    expect([...result.entries()]).toMatchInlineSnapshot(`
      Array [
        Array [
          "label",
          Array [
            "ImagingTest",
          ],
        ],
        Array [
          "subClassOf",
          Array [
            "https://schema.org/MedicalTest",
          ],
        ],
        Array [
          "comment",
          Array [
            "Any medical imaging modality typically used for diagnostic purposes.",
          ],
        ],
        Array [
          "isPartOf",
          Array [
            "https://health-lifesci.schema.org",
          ],
        ],
        Array [
          "source",
          Array [],
        ],
        Array [
          "supersededBy",
          Array [],
        ],
      ]
    `);
  });
});
