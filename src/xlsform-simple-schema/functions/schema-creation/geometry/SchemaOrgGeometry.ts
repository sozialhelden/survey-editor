import SimpleSchema, { SchemaDefinition } from "simpl-schema";

/**
 * The geographic coordinates of a place or event.
 * @see https://schema.org/GeoCoordinates
 */
export interface SchemaOrgPointGeometry {
  "@type": "https://schema.org/GeoCoordinates";
  latitude: number;
  longitude: number;
}

export function assertSchemaOrgPointGeometry(
  point: unknown
): asserts point is SchemaOrgPointGeometry | undefined {
  if (point === undefined) {
    return;
  }
  const schema = new SimpleSchema(getSchemaOrgPointGeometrySchema("point"));
  schema.validate({ point });
}

/**
 * A line string as Schema.org type.
 *
 * @see https://schema.org/GeoShape
 */

export interface SchemaOrgLineStringGeometry {
  "@type": "https://schema.org/GeoShape";
  line: string;
}

/**
 * A polygon string as Schema.org type.
 *
 * @see https://schema.org/GeoShape
 */
export interface SchemaOrgPolygonGeometry {
  "@type": "https://schema.org/GeoShape";
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
    allowedValues: ["https://schema.org/GeoCoordinates"],
    defaultValue: "https://schema.org/GeoCoordinates",
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
    allowedValues: ["https://schema.org/GeoShape"],
    defaultValue: "https://schema.org/GeoShape",
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
    allowedValues: ["https://schema.org/GeoShape"],
    defaultValue: "https://schema.org/GeoShape",
  },
  [`${key}.polygon`]: {
    type: String,
  },
});

export type SchemaoOrgGeometry =
  | SchemaOrgPointGeometry
  | SchemaOrgLineStringGeometry
  | SchemaOrgPolygonGeometry;
