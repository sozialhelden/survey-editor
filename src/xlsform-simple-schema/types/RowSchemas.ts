// tslint:disable-next-line: import-name
import SimpleSchema, {
  SchemaDefinition,
  ValidationFunction,
} from "simpl-schema";
import ODKFormulaLexer from "../functions/odk-formulas/odk-formula-parser/ODKFormulaLexer";
import ODKFormulaParser from "../functions/odk-formulas/odk-formula-parser/ODKFormulaParser";

export const getStringMapSchemaDefinition = <T>(
  schemaDefinition: Partial<SchemaDefinition<T>> = {}
): SchemaDefinition<T> => {
  return {
    type: Object,
    blackbox: true,
    custom() {
      const { value } = this;
      if (value === undefined) {
        return;
      }
      if (typeof value === "string") {
        return "notAllowed";
      }
      const keys = Object.keys(value);
      for (let i = 0; i < keys.length; i += 1) {
        const key = keys[i];
        if (typeof value[key] !== "string") {
          return "notAllowed";
        }
      }
      return undefined;
    },
    ...schemaDefinition,
  };
};

export const getLocalizedStringSchemaDefinition = getStringMapSchemaDefinition;

const optionalLocalizedString = getLocalizedStringSchemaDefinition({
  optional: true,
});
const optionalStringMap = getStringMapSchemaDefinition({ optional: true });

const formulaValidationFunction: ValidationFunction<unknown> = function () {
  try {
    const lexer = new ODKFormulaLexer(this.value);
    const parser = new ODKFormulaParser({ tokens: lexer });
    parser.parseExpression();
  } catch (e) {
    this.addValidationErrors([
      {
        name: this.key,
        type: `Invalid formula: ${e.message}`,
        value: this.value,
      },
    ]);
  }
};

export const questionRowSchema = new SimpleSchema({
  type: {
    type: String,
  },
  name: {
    type: String,
    optional: true,
    custom() {
      const shouldBeRequired = !["end_group", "end_repeat"].includes(
        this.field("type").value
      );
      if (shouldBeRequired) {
        const error = SimpleSchema.ErrorTypes.REQUIRED;

        // inserts
        if (!this.operator) {
          if (!this.isSet || this.value === null || this.value === "")
            return error;
        }

        // updates
        else if (this.isSet) {
          if (
            (this.operator === "$set" && this.value === null) ||
            this.value === ""
          )
            return error;
          if (this.operator === "$unset") return error;
          if (this.operator === "$rename") return error;
        }
      }
      return undefined;
    },
  },
  constraint: {
    type: String,
    optional: true,
    custom: formulaValidationFunction,
  },
  constraint_message: optionalLocalizedString,
  label: optionalLocalizedString,
  image: optionalLocalizedString,
  video: optionalLocalizedString,
  hint: optionalLocalizedString,
  guidance_hint: optionalLocalizedString,
  required_message: optionalLocalizedString,
  relevant: {
    type: String,
    optional: true,
    custom: formulaValidationFunction,
  },
  choice_filter: {
    // Only on 'select*' types
    type: String,
    optional: true,
  },
  calculation: {
    type: String,
    optional: true,
    custom: formulaValidationFunction,
  },
  trigger: {
    type: String,
    optional: true,
    custom: formulaValidationFunction,
  },
  readonly: {
    type: String,
    optional: true,
  },
  required: {
    type: String,
    optional: true,
    custom: formulaValidationFunction,
  },
  parameters: {
    type: String,
    optional: true,
  },
  repeat_count: {
    type: String,
    optional: true,
    custom: formulaValidationFunction,
  },
  appearance: {
    type: String,
    optional: true,
  },
  default: {
    type: String,
    optional: true,
  },
  instance: optionalStringMap,
  bind: optionalStringMap,
  body: optionalStringMap,
});

export const choiceRowSchema = new SimpleSchema({
  "list name": {
    type: String,
  },
  name: {
    type: String,
  },
  label: getLocalizedStringSchemaDefinition(),
});

export const settingsRowSchema = new SimpleSchema({
  form_title: {
    type: String,
    optional: true,
  },
  form_id: {
    type: String,
    optional: true,
  },
  public_key: {
    type: String,
    optional: true,
  },
  submission_url: {
    type: String,
    optional: true,
  },
  default_language: {
    type: String,
    optional: true,
  },
  version: {
    type: String,
    optional: true,
  },
});
