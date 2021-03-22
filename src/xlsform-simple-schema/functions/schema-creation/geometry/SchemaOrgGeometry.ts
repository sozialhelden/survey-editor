import { SchemaDefinition } from "simpl-schema";

/**
 * [GeoJSON](https://tools.ietf.org/html/rfc7946) `Point` object.
 */
export interface PointGeometry {
  "@type": "GeoCoordinates";
  latitude: number;
  longitude: number;
}

export interface LineStringGeometry {
  "@type": "GeoShape";
  line: string;
}

export interface PolygonGeometry {
  "@type": "GeoShape";
  polygon: string;
}

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
