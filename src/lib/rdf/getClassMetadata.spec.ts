import * as RDFLib from "rdflib";
import { getClassMetadata, getClassMetadataCompact } from "./getClassMetadata";
import loadSchemaOrgGraph from "./loadSchemaOrgGraph";
import { SCHEMA } from "./namespaces";

const store = RDFLib.graph();
loadSchemaOrgGraph(store);

describe("getClassMetadata()", () => {
  it("gets metadata of https://schema.org/Hotel", async () => {
    const result = getClassMetadata(SCHEMA("Hotel"), store);

    expect(result).toMatchObject({
      label: [{ object: { value: "Hotel" } }],
      subClassOf: [{ object: { value: "https://schema.org/LodgingBusiness" } }],
      comment: [{ object: { value: /aasdasd/ } }],
      source: [
        {
          object: {
            value:
              "https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology",
          },
        },
      ],
    });
  });

  it("gets metadata of https://schema.org/ImagingTest", async () => {
    const result = getClassMetadata(SCHEMA("ImagingTest"), store);
    expect(result).toMatchObject({
      label: [{ object: { value: "ImagingTest" } }],
      // This value might change in future schema.org versions. Please adapt the test if necessary.
      subClassOf: [{ object: { value: "https://schema.org/MedicalTest" } }],
      // This value might change in future versions, so we use a substring expected to always be present
      comment: [{ object: { value: /diagnostic/ } }],
      isPartOf: [{ object: { value: "https://health-lifesci.schema.org" } }],
    });
  });
});

describe("getClassMetadataCompact()", () => {
  it("gets metadata of https://schema.org/Hotel", async () => {
    const result = getClassMetadataCompact(SCHEMA("Hotel"), store);

    expect(result).toMatchObject({
      label: "Hotel",
      // This value might change in future schema.org versions. Please adapt the test if necessary.
      subClassOf: "https://schema.org/LodgingBusiness",
      // This value might change in future versions, so we use a substring expected to always be present
      comment: /establishment/,
      source:
        "https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology",
    });
  });

  it("gets metadata of https://schema.org/ImagingTest", async () => {
    const result = getClassMetadataCompact(SCHEMA("ImagingTest"), store);
    expect(result).toMatchObject({
      label: "ImagingTest",
      // This value might change in future schema.org versions. Please adapt the test if necessary.
      subClassOf: "https://schema.org/MedicalTest",
      // This value might change in future versions, so we use a substring expected to always be present
      comment: /diagnostic/,
      isPartOf: "https://health-lifesci.schema.org",
    });
  });
});
