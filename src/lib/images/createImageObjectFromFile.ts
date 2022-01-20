import { ImageObject } from "../../xlsform-simple-schema/functions/schema-creation/MediaSchemas";

/** @returns a Schema.org JSON-LD object for a given local File object. */

export function createImageObjectFromFile(file: File): ImageObject {
  return {
    "@type": "https://schema.org/ImageObject",
    contentSize: String(file.size),
    contentUrl: URL.createObjectURL(file),
    encodingFormat: "image/jpeg",
  };
}
