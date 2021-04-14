import SimpleSchema, { SchemaDefinition } from "simpl-schema";
import {
  getQuantitativeValueSchema,
  IQuantitativeValue,
} from "./getQuantitativeValueSchema";

/**
 * A Schema.org `MediaObject` JSON-LD object.
 *
 * @see https://schema.org/MediaObject
 */

export interface IMediaObject {
  /** The bitrate of the media object. */
  bitrate?: string;
  /** File size in (mega/kilo) bytes. */
  contentSize?: string;
  /** Actual bytes of the media object, for example the image file or video file. */
  contentUrl: string;
  /** The duration of the item (movie, audio recording, event, etc.) in ISO 8601 date format. */
  duration?: string;
  /** A URL pointing to a player for a specific video. In general, this is the information in the src element of an embed tag and should not be the same as the content of the loc tag. */
  embedUrl?: string;
  /** Media type typically expressed using a MIME format (see IANA site and MDN reference) e.g. application/zip for a SoftwareApplication binary, audio/mpeg for .mp3 etc.). */
  encodingFormat: string;
  /** the time offset of the end of a clip within a larger file. */
  endTime?: Date;
  /** the time offset of the start of a clip within a larger file. */
  startTime?: Date;
  /** Date when this media object was uploaded to this site. */
  uploadDate?: Date;
  /** The height of the item. */
  height?: string | IQuantitativeValue;
  /** The width of the item. */
  width?: string | IQuantitativeValue;
}

type MediaObject = IMediaObject & {
  "@type": "https://schema.org/MediaObject";
};

/**
 * A Schema.org `MediaObject` JSON-LD object, as `SimpleSchema` definition.
 *
 * @see https://schema.org/MediaObject
 */

export const getMediaObjectSchema = (
  key: string,
  rootDefinition?: Partial<SchemaDefinition<unknown>>
): Record<string, SchemaDefinition<unknown>> => ({
  [key]: {
    type: Object,
    ...rootDefinition,
  },
  [`${key}.@type`]: {
    type: String,
    allowedValues: ["https://schema.org/MediaObject"],
    defaultValue: "https://schema.org/MediaObject",
  },
  [`${key}.bitrate`]: {
    type: String,
    label: "The bitrate of the media object.",
    optional: true,
  },
  [`${key}.contentSize`]: {
    type: String,
    label: "File size in (mega/kilo) bytes.",
    optional: true,
  },
  [`${key}.contentUrl`]: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    label:
      "Actual bytes of the media object, for example the image file or video file.",
  },
  [`${key}.duration`]: {
    type: String,
    label:
      "The duration of the item (movie, audio recording, event, etc.) in ISO 8601 date format.",
    optional: true,
  },
  [`${key}.embedUrl`]: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    label:
      "A URL pointing to a player for a specific video. In general, this is the information in the src element of an embed tag and should not be the same as the content of the loc tag.",
    optional: true,
  },
  [`${key}.encodingFormat`]: {
    type: String,
    label:
      "Media type typically expressed using a MIME format (see IANA site and MDN reference) e.g. application/zip for a SoftwareApplication binary, audio/mpeg for .mp3 etc.).",
  },
  [`${key}.endTime`]: {
    type: Date,
    label: "the time offset of the end of a clip within a larger file.",
    optional: true,
  },
  [`${key}.startTime`]: {
    type: Date,
    label: "the time offset of the start of a clip within a larger file.",
    optional: true,
  },
  [`${key}.uploadDate`]: {
    type: Date,
    label: "Date when this media object was uploaded to this site.",
    optional: true,
  },
  ...getQuantitativeValueSchema(`${key}.height`, {
    type: SimpleSchema.oneOf(String, Object),
    label: "The height of the item.",
    optional: true,
  }),
  ...getQuantitativeValueSchema(`${key}.width`, {
    type: SimpleSchema.oneOf(String, Object),
    label: "The width of the item.",
    optional: true,
  }),
});

/**
 * A Schema.org `AudioObject` JSON-LD object.
 *
 * @see https://schema.org/AudioObject
 */
export type AudioObject = IMediaObject & {
  "@type": "https://schema.org/AudioObject";
  transcript?: string;
  caption?: string | MediaObject;
};

/**
 * A Schema.org `AudioObject` JSON-LD object, as `SimpleSchema` definition.
 *
 * @see https://schema.org/AudioObject
 */
export const getAudioObjectSchema = (
  key: string,
  rootDefinition?: Partial<SchemaDefinition<unknown>>
): Record<string, SchemaDefinition<unknown>> => ({
  [key]: {
    type: Object,
    ...rootDefinition,
  },
  [`${key}.@type`]: {
    type: String,
    allowedValues: ["https://schema.org/AudioObject"],
    defaultValue: "https://schema.org/AudioObject",
  },
  ...getMediaObjectSchema(key),
  [`${key}.transcript`]: {
    type: String,
    optional: true,
  },
  ...getMediaObjectSchema(`${key}.caption`, {
    type: SimpleSchema.oneOf(String, Object),
    label:
      "The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the encodingFormat.",
    optional: true,
  }),
});

/**
 * A Schema.org `ImageObject` JSON-LD object.
 *
 * @see https://schema.org/ImageObject
 */
export type ImageObject = IMediaObject & {
  "@type": "https://schema.org/ImageObject";
  exifData?: Record<string, unknown>;
  representativeOfPage?: boolean;
  caption?: string | MediaObject;
  thumbnail?: string | ImageObject;
};

/**
 * A Schema.org `ImageObject` JSON-LD object, as `SimpleSchema` definition.
 *
 * @see https://schema.org/ImageObject
 */
export const getImageObjectSchema = (
  key: string,
  withThumbnail = true,
  rootDefinition?: Partial<SchemaDefinition<unknown>>
): Record<string, SchemaDefinition<unknown>> => ({
  [key]: {
    type: Object,
    ...rootDefinition,
  },
  [`${key}.@type`]: {
    type: String,
    allowedValues: ["https://schema.org/ImageObject"],
    defaultValue: "https://schema.org/ImageObject",
  },
  ...getMediaObjectSchema(key),
  [`${key}.exifData`]: {
    type: Object,
    label: "EXIF data for this object.",
    blackbox: true,
    optional: true,
  },
  [`${key}.representativeOfPage`]: {
    type: Boolean,
    label:
      "Indicates whether this image is representative of the content of the page.",
    optional: true,
  },
  ...getMediaObjectSchema(`${key}.caption`, {
    label:
      "The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the encodingFormat.",
    optional: true,
  }),
  ...(withThumbnail
    ? getImageObjectSchema(`${key}.thumbnail`, false, {
        label: "Thumbnail image for an image or video.",
        optional: true,
      })
    : {}),
});

/**
 * A Schema.org `VideoObject` JSON-LD object.
 *
 * @see https://schema.org/VideoObject
 */
export type VideoObject = IMediaObject & {
  "@type": "https://schema.org/VideoObject";
  exifData?: Record<string, unknown>;
  representativeOfPage?: boolean;
  caption?: string | MediaObject;
  transcript?: string;
  videoFrameSize?: string;
  videoQuality?: string;
  thumbnail?: string | ImageObject;
};

/**
 * A Schema.org `VideoObject` JSON-LD object, as `SimpleSchema` definition.
 *
 * @see https://schema.org/VideoObject
 */
export const getVideoObjectSchema = (
  key: string,
  rootDefinition?: Partial<SchemaDefinition<unknown>>
): Record<string, SchemaDefinition<unknown>> => ({
  [key]: {
    type: Object,
    ...rootDefinition,
  },
  [`${key}.@type`]: {
    type: String,
    allowedValues: ["https://schema.org/VideoObject"],
  },
  ...getMediaObjectSchema(key),
  [`${key}.caption`]: {
    type: getMediaObjectSchema(`${key}.caption`),
    label:
      " or Text	The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the encodingFormat.",
    optional: true,
  },
  [`${key}.transcript`]: {
    type: String,
    label:
      "If this MediaObject is an AudioObject or VideoObject, the transcript of that object.",
    optional: true,
  },
  [`${key}.videoFrameSize`]: {
    type: String,
    label: "The frame size of the video.",
    optional: true,
  },
  [`${key}.videoQuality`]: {
    type: String,
    optional: true,
  },
  ...getImageObjectSchema(`${key}.thumbnail`, true, {
    label: "Thumbnail image for an image or video.",
    optional: true,
  }),
});
