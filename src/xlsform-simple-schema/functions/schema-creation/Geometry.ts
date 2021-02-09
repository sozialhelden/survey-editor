import SimpleSchema, { SchemaDefinition } from 'simpl-schema';

/**
 * [GeoJSON](https://tools.ietf.org/html/rfc7946) `Point` object.
 */
export interface PointGeometry {
  type: 'Point';
  coordinates: [number, number];
}

export interface LineStringGeometry {
  type: 'LineString';
  coordinates: [[number, number]];
}

export interface PolygonGeometry {
  type: 'Polygon';
  coordinates: [[[number, number]]];
}

export const getPointGeometrySchema = (key: string): Record<string, SchemaDefinition<unknown>> => ({
  [key]: {
    type: Object,
  },
  [`${key}.type`]: {
    type: String,
    allowedValues: ['Point'],
    defaultValue: 'Point'
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

export const getLineStringGeometrySchema = (key: string): Record<string, SchemaDefinition<unknown>> => ({
  [key]: {
    type: Object,
  },
  [`${key}.type`]: {
    type: String,
    allowedValues: ['LineString'],
    defaultValue: 'LineString'
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

export const getPolygonGeometrySchema = (key: string): Record<string, SchemaDefinition<unknown>> => ({
  [key]: {
    type: Object,
  },
  type: {
    type: String,
    allowedValues: ['Polygon'],
    defaultValue: 'Polygon'
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

export type Geometry = PointGeometry | LineStringGeometry | PolygonGeometry;
