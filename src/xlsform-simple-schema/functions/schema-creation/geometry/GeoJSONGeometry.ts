import { SchemaDefinition } from "simpl-schema";

/**
 * [GeoJSON](https://tools.ietf.org/html/rfc7946) `Point` object.
 */
export interface GeoJSONPointGeometry {
  type: "Point";
  coordinates: [number, number];
}

/**
 * [GeoJSON](https://tools.ietf.org/html/rfc7946) `LineString` object.
 */
export interface GeoJSONLineStringGeometry {
  type: "LineString";
  coordinates: [[number, number]];
}

/**
 * [GeoJSON](https://tools.ietf.org/html/rfc7946) `Polygon` object.
 */
export interface GeoJSONPolygonGeometry {
  type: "Polygon";
  coordinates: [[[number, number]]];
}

/**
 * [GeoJSON](https://tools.ietf.org/html/rfc7946) `Point` SimpleSchema.
 */
export const getGeoJSONPointGeometrySchema = (
  key: string
): Record<string, SchemaDefinition<unknown>> => ({
  [key]: {
    type: Object,
  },
  [`${key}.type`]: {
    type: String,
    allowedValues: ["Point"],
    defaultValue: "Point",
  },
  [`${key}.coordinates`]: {
    type: Array,
    minCount: 2,
    maxCount: 2,
  },
  [`${key}.coordinates.$`]: {
    type: Number,
    min: -180,
    max: 180,
  },
});

/**
 * [GeoJSON](https://tools.ietf.org/html/rfc7946) `LineString` SimpleSchema.
 */
export const getGeoJSONLineStringGeometrySchema = (
  key: string
): Record<string, SchemaDefinition<unknown>> => ({
  [key]: {
    type: Object,
  },
  [`${key}.type`]: {
    type: String,
    allowedValues: ["LineString"],
    defaultValue: "LineString",
  },
  [`${key}.coordinates`]: {
    type: Array,
    minCount: 2,
  },
  [`${key}.coordinates.$`]: {
    type: Array,
    minCount: 2,
    maxCount: 2,
  },
  [`${key}.coordinates.$.$`]: {
    type: Number,
    min: -180,
    max: 180,
  },
});

/**
 * [GeoJSON](https://tools.ietf.org/html/rfc7946) `Polygon` SimpleSchema.
 */
export const getGeoJSONPolygonGeometrySchema = (
  key: string
): Record<string, SchemaDefinition<unknown>> => ({
  [key]: {
    type: Object,
  },
  type: {
    type: String,
    allowedValues: ["Polygon"],
    defaultValue: "Polygon",
  },
  [`${key}.coordinates`]: {
    // rings, outer rings first, holes in the outer ring from 2nd to n-th index
    type: Array,
    minCount: 1,
  },
  [`${key}.coordinates.$`]: {
    type: Array,
    minCount: 2,
  },
  [`${key}.coordinates.$.$`]: {
    //
    type: Array,
    minCount: 4,
    maxCount: 4,
  },
  [`${key}.coordinates.$.$.$`]: {
    type: Number,
    min: -180,
    max: 180,
  },
});

export type GeoJSONGeometry =
  | GeoJSONPointGeometry
  | GeoJSONLineStringGeometry
  | GeoJSONPolygonGeometry;
