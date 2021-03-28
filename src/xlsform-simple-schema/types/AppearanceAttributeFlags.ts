/*
 * A map of string flags that can appear in the `appearance` column of a row in the `survey`
 * worksheet, each with a boolean value indicating if it is set.
 */
type AppearanceAttributeFlags = Record<string, boolean> & {
  /** Best if used with web clients, makes the text box multiple lines long. */
  multiline?: boolean;
  /** Answer choices appear in a pull-down menu. */
  minimal?: boolean;
  /** Relevant for mobile clients only, this attribute auto-advances the form to the next question after an answer is selected.', */
  quick?: boolean;
  /** For mobile devices only, used to suppress the calendar. */
  "no-calendar"?: boolean;
  /** Select a month and year only for the date. */
  "month-year"?: boolean;
  /** Select only a year for the date. */
  year?: boolean;
  /** For web clients only, this displays the answer choices horizontally. */
  "horizontal-compact"?: boolean;
  /** For web clients only, this displays the answer choices horizontally, but in columns. */
  horizontal?: boolean;
  /** Best if used with web clients, makes the answer choices appear as a Likert scale. */
  likert?: boolean;
  /** Displays answer choices side by side with minimal padding and without radio buttons or checkboxes. Particularly useful with image choices.' */
  compact?: boolean;
  /** Same as 'compact', but auto-advances to the next question (in mobile clients only). */
  quickcompact?: boolean;
  /** Entire group of questions appear on one screen (for mobile clients only). */
  "field-list"?: boolean;
  /** Displays answer choice labels (and not inputs). */
  label?: boolean;
  /** 'Used in conjunction with label attribute above, displays the answer inputs without the labels (make sure to put label and list-nolabel fields inside a group with field-list attribute if using mobile client).' */
  "list-nolabel"?: boolean;
  /** An easier way to achieve the same appearance as with 'label', apply this attribute to the entire group of questions (might slow down the form a bit). */
  "table-list"?: boolean;
  /** Allows you to trace your signature into your form (mobile clients only). */
  signature?: boolean;
  /** Allows you to sketch a drawing with your finger on the mobile device screen. */
  draw?: boolean;
};

/** A set of flags that can appear in the `appearance` column of a row in the `survey` worksheet */
const appearanceAttributeFlags: Record<keyof AppearanceAttributeFlags, true> = {
  multiline: true,
  minimal: true,
  quick: true,
  "no-calendar": true,
  "month-year": true,
  year: true,
  "horizontal-compact": true,
  horizontal: true,
  likert: true,
  compact: true,
  quickcompact: true,
  "field-list": true,
  label: true,
  "list-nolabel": true,
  "table-list": true,
  signature: true,
  draw: true,
};

/**
 * Parses a set of flags that can appear in the `appearance` column of a row in the `survey`
 * worksheet, returning a map of flags with their state - `true` if a flag is set and `false` if it
 * is not set.
 */
export function parseAttributeFlags(
  attributeListString: string
): AppearanceAttributeFlags {
  const attributeStrings = attributeListString.split(" ");
  const result: AppearanceAttributeFlags = {};
  attributeStrings.forEach((s) => {
    if (appearanceAttributeFlags[s]) {
      result[s] = true;
    }
  });
  return result;
}

export default AppearanceAttributeFlags;
