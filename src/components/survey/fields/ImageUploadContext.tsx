import { ImageObject } from "../../../xlsform-simple-schema/functions/schema-creation/MediaSchemas";
import { createImageUploadContext } from "./createImageUploadContext";

/**
 * Use this to provide the mechanism to upload images to a backend. The backend can return an image
 * data record in its own format, but you need to provide functions that can convert forth and back
 * between your backend's format and the ImageObject interface.
 */
export type ImageUploadContextType<BackendImageT> = {
  /**
   * An async function that takes an image file and returns image data in the backend's format.
   */
  uploadPhoto: (
    /** The survey result's ID to attach the image to. */
    surveyResultId: string,
    /** the image's local File object. */
    file: File
  ) => Promise<BackendImageT>;

  /**
   * Creates an ImageObject from image data in the backend's format.
   */
  createImageObjectFromRemoteImage: (image: BackendImageT) => ImageObject;

  /**
   * Creates an ImageObject from a local file.
   */
  createImageObjectFromFile: (file: File) => ImageObject;
};

const ImageUploadContext = createImageUploadContext();

export default ImageUploadContext;
