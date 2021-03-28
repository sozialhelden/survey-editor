/** An accessibility.cloud image as stored in the DB. */
export type AccessibilityCloudImage = {
  _id: string;
  isoDate: string;
  url: string;
  remotePath: string;
  mimeType: string;
  contentSize: number;
  dimensions: {
    width: number;
    height: number;
  };
};

export type AccessibilityCloudImages = {
  totalCount: number;
  images: AccessibilityCloudImage[];
};
