import SimpleSchema from 'simpl-schema';
import { getStringMapSchemaDefinition } from './RowSchemas';

describe('getStringMapSchemaDefinition()', () => {
  it('validates a string map', () => {
    const schema = new SimpleSchema({
      test: getStringMapSchemaDefinition({}),
    });

    expect(() => {
      schema.validate({ test: 'a string' });
    }).toThrowError(/Test must be of type Object/);

    expect(() => {
      schema.validate({ test: { 'en-US': 12345 } });
    }).toThrowError(/not an allowed value/);

    schema.validate({ test: { 'en-US': 'a string!' } });
  });
});
