import { ImageObject } from "../../xlsform-simple-schema/functions/schema-creation/MediaSchemas";
import { AccessibilityCloudImage } from "./AccessibilityCloudImage";
import { readAndCompressImage } from "./ImageResizer";

const imageResizeConfig = {
  quality: 0.8,
  maxWidth: 1600,
  maxHeight: 1600,
  autoRotate: true,
  debug: true,
  mimeType: "image/jpeg",
};

const uncachedBaseUrl =
  process.env.REACT_APP_ACCESSIBILITY_CLOUD_UNCACHED_BASE_URL || "";
const baseUrl = process.env.REACT_APP_ACCESSIBILITY_CLOUD_BASE_URL || "";
const appToken = process.env.REACT_APP_ACCESSIBILITY_CLOUD_APP_TOKEN;

export function getImageSourceUrl(
  image: AccessibilityCloudImage,
  size: number
) {
  return `${
    process.env.REACT_APP_ACCESSIBILITY_CLOUD_BASE_URL || ""
  }/images/scale/${image.remotePath}?fitw=${size}&fith=${size}`;
}

export function getAccessibilityCloudImageUrl(
  context: string,
  objectId: string,
  appToken: string,
  useCache: boolean = true
): string {
  return `${
    useCache ? baseUrl : uncachedBaseUrl
  }/images.json?context=${context}&surveyResultId=${objectId}&appToken=${appToken}`;
}

/** @returns a Schema.org JSON-LD object for a given remotely stored image. */
export function createImageObjectFromRemoteImage(
  image: AccessibilityCloudImage
): ImageObject {
  return {
    "@type": "ImageObject",
    contentSize: String(image.contentSize),
    contentUrl: getImageSourceUrl(image, 1600),
    encodingFormat: "image/jpeg",
    height: `${image.dimensions.height}px`,
    width: `${image.dimensions.width}px`,
    thumbnail: {
      "@type": "ImageObject",
      contentUrl: getImageSourceUrl(image, 256),
      encodingFormat: "image/jpeg",
      height: `256px`,
      width: `256px`,
    },
  };
}

/** @returns a Schema.org JSON-LD object for a given local File object. */
export function createImageObjectFromFile(file: File): ImageObject {
  return {
    "@type": "ImageObject",
    contentSize: String(file.size),
    contentUrl: URL.createObjectURL(file),
    encodingFormat: "image/jpeg",
  };
}

/**
 * Uploads a photo to accessibility.cloud, returning accessibility.cloud's internal JSON
 * representation of the image.
 */
export async function uploadPhoto(
  /** The survey result's ID to attach the image to. */
  surveyResultId: string,
  /** the image's local File object. */
  file: File
): Promise<AccessibilityCloudImage> {
  const url = `${uncachedBaseUrl}/image-upload/survey-result/image?surveyResultId=${surveyResultId}&appToken=${appToken}`;
  const resizedImage = await readAndCompressImage(file, imageResizeConfig);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "image/jpeg",
    },
    body: resizedImage,
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.error?.reason || json.error);
  }

  if (!json.success) {
    const message = `Sorry, your upload failed: ${String(json.error)}`;
    throw new Error(message);
  }
  if (!json.result) {
    const message = "Sorry, your upload failed: Empty server response.";
    throw new Error(message);
  }

  return json.result;
}
