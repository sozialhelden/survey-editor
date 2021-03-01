import {
  SemanticError,
  FunctionNotImplementedError,
} from "../../../types/Errors";
import ODKNodeValue from "../../../types/ODKNodeValue";
import { ODKNodeWithoutRuntimeInfo } from "../../../types/ODKNode";
import ODKFormulaExecutionContext from "./ODKFormulaEvaluationContext";
import { ordinalize } from "inflection";

/* eslint-disable @typescript-eslint/no-unused-vars */

type Value = ODKNodeValue;

export type FormulaFunction = (
  this: {
    context: ODKFormulaExecutionContext;
    scope: ODKNodeWithoutRuntimeInfo;
  },
  ...args: Value[]
) => Value;

function assertString(value: unknown, argNo: number): asserts value is string {
  if (typeof value !== "string") {
    const number = ordinalize(String(argNo + 1));
    throw new SemanticError(
      `Expected a string value as ${number} parameter, but got \`${value}\`.`
    );
  }
}

function assertNumber(value: unknown, argNo: number): asserts value is number {
  if (typeof value !== "number") {
    const number = ordinalize(String(argNo + 1));
    throw new SemanticError(
      `Expected a number value as ${number} parameter, but got \`${value}\`.`
    );
  }
}

function assertBoolean(
  value: unknown,
  argNo: number
): asserts value is boolean {
  if (typeof value !== "boolean") {
    const number = ordinalize(String(argNo + 1));
    throw new SemanticError(
      `Expected a boolean value as ${number} parameter, but got \`${value}\`.`
    );
  }
}

// Documentation: https://docs.getodk.org/form-operators-functions/
export const functions: Record<string, FormulaFunction> = {
  if<T, U>(expression: unknown, then: T, elseExpression: U): T | U {
    assertBoolean(expression, 0);
    return expression ? then : elseExpression;
  },

  true(): boolean {
    return true;
  },

  false(): boolean {
    return false;
  },

  not(arg: unknown): boolean {
    assertBoolean(arg, 0);
    return !arg;
  },

  coalesce<T extends Value, U extends Value>(arg: T, arg2: U): T | U | string {
    if (typeof arg !== "undefined" && arg !== "") {
      return arg;
    }
    if (typeof arg2 !== "undefined" && arg2 !== "") {
      return arg2;
    }
    return "";
  },

  boolean(arg: Value): boolean {
    if (typeof arg === "number") {
      return arg !== 0;
    }
    if (typeof arg === "string") {
      return arg !== "";
    }
    if (arg instanceof Array) {
      return arg.length > 0;
    }
    if (typeof arg === "boolean") {
      return arg;
    }
    return false;
  },

  /**
    Returns an integer equal to the 1-indexed position of the current node within the node defined by xpath.
    Most often this is used in the form position(..) to identify the current iteration index within a repeat group.
  */
  position(_xpath: Value): number {
    throw new FunctionNotImplementedError("position");
  },
  /**
   * Returns the value expression if the question's value is empty. Otherwise, returns the current value of the question.
   * This can be used to ensure that a random number is only generated once, or to store the first value entered for a question in a way that is retrievable even if the response is changed later.
   *   Warning This function is often misunderstood. Read when expressions are evaluated to learn more.
   */
  once(_expression: Value): Value {
    throw new FunctionNotImplementedError("once");
  },

  /**
   * Returns True if string is a member of space_delimited_array, otherwise returns False. Commonly used to determined if a specific choice was selected in a select question. (This is possible because a reference to a select question returns a space-delimited array of choice names.)
   */
  selected(space_delimited_array: Value, string: Value): boolean {
    if (space_delimited_array === undefined) {
      return false;
    }
    assertString(space_delimited_array, 0);
    assertString(string, 1);
    if (space_delimited_array.length === 0 || string.length === 0) {
      return false;
    }
    return space_delimited_array.split(" ").includes(string);
  },

  // Returns the string at the n th position of the space_delimited_array. (The array is zero-indexed.) Returns an empty string if the index does not exist.
  // This can be used to get the name of a selected choice from a multi-select question. (This is possible because a reference to a select question returns a space-delimited array of choice names.)
  // Note
  // If used to get a choice name from a select question, this function returns the name, not the label, of the selected choice. To get the label in the current language, use jr:choice-name().
  "selected-at"(_space_delimited_array: Value, _n): string {
    throw new FunctionNotImplementedError("selected-at");
  },

  // Returns the number of choices selected in multi_select_question.
  "count-selected"(_multi_select_question: Value): number {
    throw new FunctionNotImplementedError("count-selected");
  },

  // Returns the label value, in the active language, associated with the choice_name in the list of choices for the select_question.
  // Note
  // You have to wrap the select_question reference in quotes.
  // '${question_name}'
  "jr:choice-name"(_choice_name: Value, _select_question: Value): string {
    throw new FunctionNotImplementedError("jr:choice-name");
  },

  // Repeat groups
  // Helpful terms
  // nodeset
  // A collection of XML nodes. In XLSForms, this is typically a collection of response values.
  // Outside a repeat group, referring to a question by name will return a nodeset containing all the responses to that question.
  // Nodesets can also be created by joining two or more nodes with pipes: /data/age | /data/name.

  // Returns the response value of question name from the repeat-group group, in iteration i.
  // Nested repeat groups can be accessed using the sub and sub_sub parameters.
  // See also
  // Referencing repeated questions from inside the repeat
  "indexed-repeat"(
    _name: Value,
    _group: Value,
    _i: Value,
    _sub_grp: Value,
    _sub_i: Value,
    _sub_sub_grp: Value,
    _sub_sub_i: Value
  ): string {
    throw new FunctionNotImplementedError("):");
  },

  // Returns the number of items in nodeset. This can be used to count the number of repetitions in a repeat group.
  count(_nodeset: Value): number {
    throw new FunctionNotImplementedError("count");
  },

  // Returns the number of non-empty members of nodeset.
  "count-non-empty"(_nodeset: Value): number {
    throw new FunctionNotImplementedError("count-non-empty");
  },

  // Returns the sum of the members of nodeset.
  // Can be used to tally responses to a repeated select question.
  sum(_nodeset: Value): number {
    throw new FunctionNotImplementedError("sum");
  },

  // Returns the largest member of nodeset.
  // Warning
  // The min() and max() functions only work sets of numbers. Empty values (that is, variables referencing unanswered questions) are actually empty strings, and will not be automatically converted to zero (0).
  // Strings
  max(_nodeset: Value): Value {
    throw new FunctionNotImplementedError("max");
  },

  // Returns the smallest member of nodeset.
  // Warning
  // The min() and max() functions only work sets of numbers. Empty values (that is, variables referencing unanswered questions) are actually empty strings, and will not be automatically converted to zero (0).
  // Strings
  min(_nodeset: Value): Value {
    throw new FunctionNotImplementedError("min");
  },

  // Searching and matching strings

  // Returns True if string is an exact and complete match for expression.
  // See also
  // Using regular expressions
  regex(string: Value, expression: Value): boolean {
    assertString(string, 0);
    assertString(expression, 0);
    return !!string.match(new RegExp(expression));
  },

  // Returns True if the string contains the substring.
  contains(string: Value, substring: Value): boolean {
    assertString(string, 0);
    assertString(substring, 1);
    return !!string.match(substring);
  },

  // Returns True if string begins with substring.
  "starts-with"(string: Value, substring: Value): boolean {
    assertString(string, 0);
    assertString(substring, 1);
    return string.startsWith(substring);
  },

  // Returns True if the string ends with substring.
  "ends-with"(string: Value, substring: Value): boolean {
    assertString(string, 0);
    assertString(substring, 1);
    return string.endsWith(substring);
  },

  // Returns the substring of string beginning at the index start and extending to (but not including) index end (or to the termination of string, if end is not provided). Members of string are zero-indexed.
  substr(string: Value, start: Value, end: Value): string {
    assertString(string, 0);
    assertNumber(start, 1);
    assertNumber(end, 2);
    return string.substring(start, end);
  },

  // Returns the substring of string before the first occurrence of the target substring. If the target is not found, or string begins with the target substring, then this will return an empty string.
  "substring-before"(_string: Value, _target): string {
    throw new FunctionNotImplementedError("substring-before");
  },

  // Returns the substring of string after the first occurrence of the target substring. If the target is not found this will return an empty string.
  "substring-after"(_string: Value, _target): string {
    throw new FunctionNotImplementedError("substring-after");
  },

  // Returns a copy of string, where every occurrence of a character in fromchars is replaced by the corresponding character in tochars. If fromchars is longer than tochars then every occurrence of a character in fromchars that does not have a corresponding character in tochars will be removed.
  translate(_string: Value, _fromchars: Value, _tochars: Value): string {
    throw new FunctionNotImplementedError("translate");
  },

  // Returns the number of characters in string. If no value is passed in, returns the number of characters in the value of the question that this function call is tied to which can be useful in a constraint expression.
  "string-length"(string: Value): number {
    assertString(string, 0);
    return string.length;
  },

  // Returns a string with normalized whitespace by stripping leading and trailing whitespace of string and replacing sequences of whitespace characters with a single space. If no value is passed in, normalizes whitespace of the value of the question that this function call is tied to.
  "normalize-space"(string?: Value): string {
    assertString(string, 0);
    return string.trim();
  },

  // Combining strings

  // Concatenates one or more arguments into a single string. If any arg is a nodeset, the values within the set are concatenated into a string.
  concat(...args: Value[]): string {
    return args.join("");
  },

  // Joins the members of nodeset, using the string separator.
  join(_separator: Value, _nodeset: ODKNodeValue): string {
    throw new FunctionNotImplementedError("join");
  },

  // Converting to and from strings

  // Returns True if string is "true" or "1". Otherwise, False.
  "boolean-from-string"(string: Value): boolean {
    return string === "true" || string === "1";
  },

  // Converts arg to a string.
  string(arg: Value): string {
    return String(arg);
  },

  // Math
  // Warning
  // Math functions (except number()) only work with number values.
  // You can use number() to convert a string of digits to a number, but it is usually better to get a number value directly.
  // Empty values (that is, variables referencing unanswered questions) are actually empty strings, and will not be automatically converted to zero (0).

  // Number handling

  // Rounds a decimal number to some number of decimal places.
  round(number: Value, places: Value): number {
    assertNumber(number, 0);
    assertNumber(places, 1);
    return Math.round(number * 10 ** places) / 10 ** places;
  },

  // Truncates the fractional portion of a decimal number to return an integer.
  int(number: Value) {
    assertNumber(number, 0);
    return Math.floor(number);
  },

  // Converts arg to number value.
  // If arg is a string of digits, returns the number value.
  // If arg is True, returns 1. If arg is False, returns 0.
  // If arg cannot be converted, returns NaN (not a number).
  number(arg: Value): number {
    if (typeof arg === "boolean") {
      return arg ? 1 : 0;
    }
    if (typeof arg === "string") {
      if (arg.trim().match(/-?\d+(\.\d+)?/)) {
        return Number(arg);
      }
    }
    if (typeof arg === "number") {
      return arg;
    }
    return NaN;
  },

  // Computes and returns the hash value of the data string using the indicated hash algorithm string, and encoding this hash value using the optional encoding string.
  // Options for the algorithm are MD5, SHA-1, SHA-256, SHA-384, SHA-512.
  // If the third parameter is not specified, the encoding is base64. Valid options for the encoding are base64 and hex.
  // This function can be useful if, for example, someone wants to build a unique identifier from sensitive data like a national ID number without compromising that data.
  // See also
  // count(), max(), min(), number()
  digest(_data: Value, _algorithm: Value, _encodingMethod: Value): string {
    throw new FunctionNotImplementedError("digest");
  },

  // Calculation
  pow(number: Value, exponent: Value): number {
    assertNumber(number, 0);
    assertNumber(exponent, 1);
    return Math.pow(number, exponent);
  },
  log(number: Value): number {
    assertNumber(number, 0);
    return Math.log(number);
  },
  log10(number: Value): number {
    assertNumber(number, 0);
    return Math.log10(number);
  },
  abs(number: Value): number {
    assertNumber(number, 0);
    return Math.abs(number);
  },
  sin(number: Value): number {
    assertNumber(number, 0);
    return Math.sin(number);
  },
  cos(number: Value): number {
    assertNumber(number, 0);
    return Math.cos(number);
  },
  tan(number: Value): number {
    assertNumber(number, 0);
    return Math.tan(number);
  },
  asin(number: Value): number {
    assertNumber(number, 0);
    return Math.asin(number);
  },
  acos(number: Value): number {
    assertNumber(number, 0);
    return Math.acos(number);
  },
  atan(number: Value): number {
    assertNumber(number, 0);
    return Math.atan(number);
  },
  atan2(y: Value, x: Value): number {
    assertNumber(y, 0);
    assertNumber(x, 1);
    return Math.atan2(y, x);
  },
  sqrt(number: Value): number {
    assertNumber(number, 0);
    return Math.sqrt(number);
  },
  exp(number: Value): number {
    assertNumber(number, 0);
    return Math.exp(number);
  },
  exp10: (number: Value): number => {
    assertNumber(number, 0);
    return 10 ** number;
  },
  pi: (): number => {
    return Math.PI;
  },

  // Date and time

  // Returns the current date without a time component.
  today(): Date {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return now;
  },

  // Returns the current datetime in ISO 8601 format, including the timezone.
  // Warning
  // This function is often misused. Read when expressions are evaluated to learn more.
  now(): string {
    return new Date().toISOString();
  },

  // Converting dates and time

  // Converts dateTime value to the number of days since January 1, 1970 (the Unix Epoch).
  // This is the inverse of date().
  "decimal-date-time"(_dateTime: Value): number {
    throw new FunctionNotImplementedError("decimal-date-time");
  },

  // Converts an integer representing a number of days from January 1, 1970 (the Unix Epoch) to a standard date value.

  // This is the inverse of decimal-date-time().
  date(_days: Value): Date {
    throw new FunctionNotImplementedError("date");
  },

  // Converts time to a number representing a fractional day. For example, noon is 0.5 and 6:00 PM is 0.75.
  "decimal-time"(_time: Value): number {
    throw new FunctionNotImplementedError("decimal-time");
  },

  // Formatting dates and times for display

  // Returns date as a string formatted as defined by format.
  "format-date"(_date: Value, _format: Value): string {
    throw new FunctionNotImplementedError("format-date");
  },

  // Returns dateTime as a string formatted as defined by format.
  "format-date-time"(_dateTime: Value, _format: Value): string {
    throw new FunctionNotImplementedError("format-date-time");
  },

  // Geography

  // Returns the area, in square meters, of either a nodeset of geopoints or a geoshape value.
  // It takes into account the circumference of the Earth around the Equator but does not take altitude into account.
  area(_nodesetOrGeoshape: Value | Value): number {
    throw new FunctionNotImplementedError("area");
  },

  // Returns the distance, in meters, of either:

  // a nodeset of geopoints
  // the perimeter of a geoshape
  // the length of a geotrace value
  // It takes into account the circumference of the Earth around the Equator and does not take altitude into account.
  distance(_nodesetOrGeoshapeOrGeotrace: Value): number {
    throw new FunctionNotImplementedError("distance");
  },

  // Utility

  // Returns a random number between 0.0 (inclusive) and 1.0 (exclusive).
  // Warning
  // This function is often misused. Read when expressions are evaluated to learn more.
  random: Math.random,

  // Returns a shuffled nodeset.
  // A shuffle with a numeric seed is deterministic and reproducible.
  // The primary use for this function is to randomize the order of choices for a select question. The documentation on select widgets describes how this is done in XLSForm.
  // randomize() can only be used in a context where a nodeset is accepted. Note that questions of type calculate cannot reference a nodeset.
  randomize(_nodeset: Value, _seed: Value): ODKNodeValue {
    throw new FunctionNotImplementedError("randomize");
  },

  // Without argument, returns a random RFC 4122 version 4 compliant UUID.
  // With an argument it returns a random GUID of specified length.
  uuid(_length: Value): string {
    throw new FunctionNotImplementedError("uuid");
  },

  // Returns True if the number of response s that are exactly the string "yes" is between min and max, inclusive.
  // Set min or max to -1 to make the argument not applicable.
  checklist(_min: Value, _max: Value, ..._responses: Value[]): boolean {
    throw new FunctionNotImplementedError("checklist");
  },

  // Returns True if the sum of the weight s of each response that is exactly the string "yes" is between min and max, inclusive.
  // Set min or max to -1 to make the argument not
  "weighted-checklist"(
    _min: Value,
    _max: Value,
    _response: Value,
    ..._weightResponsePairs: Value[]
  ): boolean {
    throw new FunctionNotImplementedError("weighted-checklist");
  },
};

export default functions;
