import SimpleSchema from "simpl-schema";
import {
  getLineStringGeometrySchema,
  getPointGeometrySchema,
  getPolygonGeometrySchema,
} from "./Geometry";
import {
  getAudioObjectSchema,
  getImageObjectSchema,
  getMediaObjectSchema,
  getVideoObjectSchema,
} from "./MediaSchemas";
import getAllowedChoiceValues from "./getAllowedChoiceValues";
import { NodeToDefinitionFunction } from "./createLeafNodeSchemaDefinition";

export const questionTypesToSchemaGenerators: Record<
  string,
  NodeToDefinitionFunction<unknown> | undefined
> = {
  "": () => ({}),
  integer: (o) => ({ [o.key]: { type: SimpleSchema.Integer } }),
  decimal: (o) => ({ [o.key]: { type: Number } }),
  range: (o) => ({ [o.key]: { type: Number } }),
  text: (o) => ({ [o.key]: { type: String } }),
  select_one: (o) => ({
    [o.key]: { type: String, allowedValues: getAllowedChoiceValues(o) },
  }),
  select_multiple: (o) => ({
    [o.key]: { type: Array },
    [o.key + ".$"]: { type: String, allowedValues: getAllowedChoiceValues(o) },
  }),
  select_one_from_file: (o) => ({ [o.key]: { type: String } }),
  select_multiple_from_file: (o) => ({
    [o.key]: { type: Array },
    [o.key + ".$"]: { type: String },
  }),
  rank: (o) => ({ [o.key]: { type: String } }),
  note: (o) => ({ [o.key]: { type: String } }),
  geopoint: (o) => getPointGeometrySchema(o.key),
  geotrace: (o) => getLineStringGeometrySchema(o.key),
  geoshape: (o) => getPolygonGeometrySchema(o.key),
  date: (o) => ({ [o.key]: { type: Date } }),
  time: (o) => ({ [o.key]: { type: Date } }),
  datetime: (o) => ({ [o.key]: { type: Date } }),
  image: (o) => getImageObjectSchema(o.key),
  audio: (o) => getAudioObjectSchema(o.key),
  video: (o) => getVideoObjectSchema(o.key),
  file: (o) => getMediaObjectSchema(o.key),
  barcode: (o) => ({ [o.key]: { type: String } }),
  calculate: (o) => ({ [o.key]: { type: String } }),
  acknowledge: (o) => ({ [o.key]: { type: Boolean } }),
  hidden: (o) => ({ [o.key]: { type: String } }),
  "xml-external": (o) => ({ [o.key]: { type: String } }),
  start: (o) => ({ [o.key]: { type: Date } }),
  end: (o) => ({ [o.key]: { type: Date } }),
  today: (o) => ({ [o.key]: { type: Date } }),
  deviceid: (o) => ({ [o.key]: { type: String } }),
  simserial: (o) => ({ [o.key]: { type: String } }),
  subscriberid: (o) => ({ [o.key]: { type: String } }),
  phonenumber: (o) => ({ [o.key]: { type: String } }),
  username: (o) => ({ [o.key]: { type: String } }),
  email: (o) => ({
    [o.key]: { type: String, regEx: SimpleSchema.RegEx.EmailWithTLD },
  }),
  audit: (o) => ({ [o.key]: { type: String } }),
};
