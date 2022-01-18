import SimpleSchema, { SchemaDefinition } from "simpl-schema";

/**
 * @returns a `SimpleSchema` definition that validates a Schema.org `QuantitativeValue` JSON-LD
 * object.
 *
 * Inspired by https://schema.org/QuantitativeValue.
 */

export const getQuantitativeValueSchema = (
  key: string,
  rootDefinition?: SchemaDefinition<unknown>
): Record<string, SchemaDefinition<unknown>> => ({
  [key]: {
    type: Object,
    ...rootDefinition,
  },
  [`${key}.maxValue`]: {
    type: Number,
    optional: true,
  },
  [`${key}.minValue`]: {
    type: Number,
    optional: true,
  },
  [`${key}.unitCode`]: {
    type: String,
    optional: true,
  },
  [`${key}.unitText`]: {
    type: String,
    optional: true,
  },
  [`${key}.value`]: {
    type: SimpleSchema.oneOf(Number, String, Boolean),
  },
});

export interface IQuantitativeValue {
  maxValue?: number;
  minValue?: number;
  unitCode?: string;
  unitText?: string;
  value: number | string | boolean;
}
