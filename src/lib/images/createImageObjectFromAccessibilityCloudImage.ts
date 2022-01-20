import { ImageObject } from "../../xlsform-simple-schema/functions/schema-creation/MediaSchemas";
import { AccessibilityCloudImage } from "./AccessibilityCloudImage";
import { getImageSourceUrl } from "./uploadPhoto";

/** @returns a Schema.org JSON-LD object for a given remotely stored image. */

export function createImageObjectFromAccessibilityCloudImage(
  image: AccessibilityCloudImage
): ImageObject {
  return {
    "@type": "https://schema.org/ImageObject",
    contentSize: String(image.contentSize),
    contentUrl: getImageSourceUrl(image, 1600),
    encodingFormat: "image/jpeg",
    height: `${image.dimensions.height}px`,
    width: `${image.dimensions.width}px`,
    thumbnail: {
      "@type": "https://schema.org/ImageObject",
      contentUrl: getImageSourceUrl(image, 256),
      encodingFormat: "image/jpeg",
      height: `256px`,
      width: `256px`,
    },
  };
}
