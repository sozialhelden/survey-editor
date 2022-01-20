import React from "react";
import { ImageUploadContextType } from "./ImageUploadContext";

const errorString = "The application is not configured to use image uploads.";

export function createImageUploadContext() {
  return React.createContext<ImageUploadContextType<any>>({
    uploadPhoto: async (surveyResultId, file) => {
      throw new Error(errorString);
    },
    createImageObjectFromRemoteImage: () => {
      throw new Error(errorString);
    },
    createImageObjectFromFile: () => {
      throw new Error(errorString);
    },
  });
}
