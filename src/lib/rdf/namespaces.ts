import { Namespace } from "rdflib";

const NamespacesByPrefix: Record<string, string> = {
  rdf: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
  rdfs: "http://www.w3.org/2000/01/rdf-schema#",
  foaf: "http://xmlns.com/foaf/0.1/",
  xsd: "http://www.w3.org/2001/XMLSchema#",
  schema: "https://schema.org/",
};

const RDF = Namespace(NamespacesByPrefix.rdf);
const RDFS = Namespace(NamespacesByPrefix.rdfs);
const FOAF = Namespace(NamespacesByPrefix.foaf);
const XSD = Namespace(NamespacesByPrefix.xsd);
const SCHEMA = Namespace(NamespacesByPrefix.schema);

export { RDF, RDFS, FOAF, XSD, SCHEMA };

export const Namespaces = Object.values(NamespacesByPrefix);

export function replaceURIWithPrefix(uri: string) {
  let result = uri;
  Object.keys(NamespacesByPrefix).forEach((prefix) => {
    const baseUri = NamespacesByPrefix[prefix];
    result = result.replace(baseUri, prefix + ":");
  });
  return result;
}
