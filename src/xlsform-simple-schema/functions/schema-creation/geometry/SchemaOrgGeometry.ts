import SimpleSchema, { SchemaDefinition } from "simpl-schema";

/**
 * The geographic coordinates of a place or event.
 * @see https://schema.org/GeoCoordinates
 */
export interface SchemaOrgPointGeometry {
  "@type": "GeoCoordinates";
  latitude: number;
  longitude: number;
}

export function assertSchemaOrgPointGeometry(
  point: unknown
): asserts point is SchemaOrgPointGeometry {
  const schema = new SimpleSchema(getSchemaOrgPointGeometrySchema("point"));
  schema.validate({ point });
}

/**
 * A line string as Schema.org type.
 *
 * @see https://schema.org/GeoShape
 */

export interface SchemaOrgLineStringGeometry {
  "@type": "GeoShape";
  line: string;
}

/**
 * A polygon string as Schema.org type.
 *
 * @see https://schema.org/GeoShape
 */
export interface SchemaOrgPolygonGeometry {
  "@type": "GeoShape";
  polygon: string;
}

/** @returns a SimpleSchema definition for a Schema.org point geometry. */
export const getSchemaOrgPointGeometrySchema = (
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
export const getSchemaOrgLineStringGeometrySchema = (
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
export const getSchemaOrgPolygonGeometrySchema = (
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

export type SchemaoOrgGeometry =
  | SchemaOrgPointGeometry
  | SchemaOrgLineStringGeometry
  | SchemaOrgPolygonGeometry;
