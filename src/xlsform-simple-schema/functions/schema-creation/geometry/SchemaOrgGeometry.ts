import { SchemaDefinition } from "simpl-schema";

/**
 * The geographic coordinates of a place or event.
 * @see https://schema.org/GeoCoordinates
 */
export interface PointGeometry {
  "@type": "GeoCoordinates";
  latitude: number;
  longitude: number;
}

/**
 * A line string as Schema.org type.
 *
 * @see https://schema.org/GeoShape
 */

export interface LineStringGeometry {
  "@type": "GeoShape";
  line: string;
}

/**
 * A polygon string as Schema.org type.
 *
 * @see https://schema.org/GeoShape
 */
export interface PolygonGeometry {
  "@type": "GeoShape";
  polygon: string;
}

/** @returns a SimpleSchema definition for a Schema.org point geometry. */
export const getPointGeometrySchema = (
  key: string
): Record<string, SchemaDefinition<unknown>> => ({
  [key]: {
    type: Object,
  },
  [`${key}.@type`]: {
    type: String,
    allowedValues: ["GeoCoordinates"],
    defaultValue: "GeoCoordinates",
  },
  [`${key}.latitude`]: {
    type: Number,
  },
  [`${key}.longitude`]: {
    type: Number,
  },
});

/** @returns a SimpleSchema definition for a Schema.org line string geometry. */
export const getLineStringGeometrySchema = (
  key: string
): Record<string, SchemaDefinition<unknown>> => ({
  [key]: {
    type: Object,
  },
  [`${key}.@type`]: {
    type: String,
    allowedValues: ["GeoShape"],
    defaultValue: "GeoShape",
  },
  [`${key}.line`]: {
    type: String,
  },
});

/** @returns a SimpleSchema definition for a Schema.org polygon geometry. */
export const getPolygonGeometrySchema = (
  key: string
): Record<string, SchemaDefinition<unknown>> => ({
  [key]: {
    type: Object,
  },
  [`${key}.@type`]: {
    type: String,
    allowedValues: ["GeoShape"],
    defaultValue: "GeoShape",
  },
  [`${key}.polygon`]: {
    type: String,
  },
});

export type Geometry = PointGeometry | LineStringGeometry | PolygonGeometry;
