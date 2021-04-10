import { parse, Store } from "rdflib";
import schemaOrgTurtleFileString from "./schemaOrgTurtleFileString";

export default function loadSchemaOrgGraph(rdfStore: Store) {
  try {
    parse(
      schemaOrgTurtleFileString,
      rdfStore,
      "https://schema.org",
      "text/turtle"
    );
  } catch (err) {
    console.log("Error while loading schema.org .ttl file:", err);
    throw err;
  }
}
