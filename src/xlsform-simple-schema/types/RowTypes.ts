import {
  choiceRowSchema,
  questionRowSchema,
  settingsRowSchema,
} from "./RowSchemas";

export type StringMap = Record<string, string>;

/**
 * Object with language codes as keys and strings as values, representing localized variants of a
 * string.
 */

export type LocalizedString = StringMap;

/** Represents a row in the 'survey' worksheet */

export type QuestionRow = Record<
  string,
  string | LocalizedString | undefined
> & {
  /** specifies the type of entry you are adding. */
  type: string;
  /** specifies the unique variable name for that entry. No two entries can have the same name. Names have to start with a letter or an underscore. Names can only contain letters, digits, hyphens, underscores, and periods. Names are case-sensitive. */
  name: string;
  /** contains the actual text you see in the form. Alternatively, label translation columns can be used. */
  label: LocalizedString;
  constraint?: string;
  constraint_message?: LocalizedString;
  image?: LocalizedString;
  audio?: LocalizedString;
  video?: LocalizedString;
  hint?: LocalizedString;
  guidance_hint?: string;
  relevant?: string;
  choice_filter?: string;
  calculation?: string;
  trigger?: string;
  readonly?: string;
  required?: string;
  required_message?: LocalizedString;
  parameters?: string;
  repeat_count?: string;
  appearance?: string;
  default?: string;
  instance?: StringMap;
  bind?: StringMap;
  body?: StringMap;
};

/** Represents a row in the 'choices' worksheet */

export type ChoiceRow = Record<string, string | LocalizedString> & {
  /** lets you group together a set of related answer choices, i.e., answer choices that should appear together under a question. */
  "list name": string;
  /** specifies the unique variable name for that answer choice. */
  name: string;
  /** shows the answer choice exactly as you want it to appear on the form. Alternatively, label translation columns can be used. */
  label: LocalizedString;
};

/** Represents a row in the 'settings' worksheet */

export type SettingsRow = Record<string, string> & {
  /** The title of the form that is shown to users. The form title is pulled from form_id if form_title is blank or missing. */
  form_title: string;
  /** The name used to uniquely identify the form on the server. The form id is pulled from the XLS file name if form_id is blank or missing. */
  form_id: string;
  /** For encryption-enabled forms, this is where the public key is copied and pasted. */
  public_key: string;
  /** This url can be used to override the default server where finalized records are submitted to. */
  submission_url: string;
  /** In localized forms, this sets which language should be used as the default. The same format as described for adding translations should be used, including the language code. */
  default_language: string;
  /** String of up to 10 numbers that describes this revision. Revised form definitions must have numerically greater versions than previous ones. A common convention is to use strings of the form 'yyyymmddrr'. For example, 2017021501 is the 1st revision from Feb 15th, 2017. */
  version: string;
};

export function assertValidQuestionRow(
  row: Record<string, unknown>
): asserts row is QuestionRow {
  return questionRowSchema.validate(row);
}

export function assertValidChoiceRow(
  row: Record<string, unknown>
): asserts row is ChoiceRow {
  return choiceRowSchema.validate(row, { keys: ["list name", "name"] });
}

export function assertValidSettingsRow(
  row: Record<string, unknown>
): asserts row is SettingsRow {
  return settingsRowSchema.validate(row);
}
