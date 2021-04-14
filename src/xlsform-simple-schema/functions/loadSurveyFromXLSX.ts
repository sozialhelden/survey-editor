import Excel from "exceljs";
import { SyntaxError } from "../types/Errors";
import {
  choiceRowSchema,
  questionRowSchema,
  settingsRowSchema,
} from "../types/RowSchemas";
import {
  assertValidChoiceRow,
  assertValidQuestionRow,
  assertValidSettingsRow,
  ChoiceRow,
  QuestionRow,
  SettingsRow,
} from "../types/RowTypes";
import {
  loadXLSFormFromRows,
  WorksheetName,
  WorksheetRowsWithMetadata,
  XLSForm,
} from "../types/XLSForm";

export const localizableColumnNames = [
  "label",
  "hint",
  "constraint_message",
  "required_message",
  "image",
  "audio",
  "video",
];

/**
 * XLSForm uses double colons (`::`) in column names to allow multilingual variants of the same
 * column, like ‘label::русский (ru)’ or ‘label::English (en)’, and for custom namespacing.
 *
 * For each column name that supports this concept, the function finds matching columns in the
 * given row, and merges them them into a single object.
 *
 * You can supply a default suffix to always obtain namespaced objects after processing a row.
 *
 * @see [‘Advanced use and extensibility’](https://xlsform.org/en/#advanced-use-and-extensibility)
 * in the XLSForm specification.
 *
 * @example
 * // before
 *
 * {
 *   'label::русский (ru)': 'Как тебя зовут?',
 *   'label::English (en)': 'What is your name?'
 * }
 *
 * // after
 *
 * {
 *   label: {
 *     'русский (ru)': 'Как тебя зовут?',
 *     'English (en)': 'What is your name?'
 *   }
 * }
 */
export function nestDoubleColonFields(
  /** The row to process. */
  row: Record<string, unknown>,
  /** The prefixes before the :: that you want nested */
  namespacePrefixes: string[],
  /**
   * Use this to enforce the result to be always nested, even if a localizable column is not
   * localized.
   */
  defaultSuffix?: string
): {
  result: Readonly<Record<string, unknown>>;
  foundSuffixes: Readonly<Set<string>>;
} {
  const result: Record<string, unknown> = {
    ...row,
  };

  const foundSuffixes = new Set<string>();

  if (defaultSuffix) {
    namespacePrefixes.forEach((k) => {
      if (result[k]) {
        result[`${k}::${defaultSuffix}`] = result[k];
      }
      foundSuffixes.add(defaultSuffix);
      delete result[k];
    });
  }

  namespacePrefixes.forEach((namespacePrefix) => {
    Object.keys(result)
      .filter((k) => k.startsWith(namespacePrefix))
      .forEach((k) => {
        const [prefix, suffix] = k.split(/::/);
        /* Example { 'label::English (en)': 'A label!' } */
        const objectToExtend = result[prefix] as
          | Record<string, string>
          | string;
        const value = String(result[k]);
        if (objectToExtend === undefined) {
          result[prefix] = { [suffix]: value };
          foundSuffixes.add(suffix);
        } else if (typeof objectToExtend === "object") {
          objectToExtend[suffix] = value;
          foundSuffixes.add(suffix);
        } else {
          throw new SyntaxError(
            `Can't handle \`${prefix}\` column. Columns with prefix \`${prefix}\` must be namespaced with \`::\`. See chapter [‘Advanced use and extensibility’](https://xlsform.org/en/#advanced-use-and-extensibility) in the documentation.`
          );
        }
        delete result[k];
      });
  });

  return { result, foundSuffixes };
}

// See reference table: https://xlsform.org/en/ref-table/

export function normalizeColumnNames(
  headerRow: readonly string[]
): readonly string[] {
  const result: string[] = [];
  for (let i = 0; i < headerRow.length; i += 1) {
    const columnName = headerRow[i]?.toString() || "";
    result.push(
      columnName
        .replace(/^constraint-msg\B/, "constraint_message")
        .replace(/^requiredMsg\B/, "required_message")
        .replace(/^bind::required$/, "required")
        .replace(/^repeat-count$/, "repeat_count")
        .replace(/^media::(image|audio|video)\B/, "$1")
        .replace(/^photo\B/, "image")
        .replace(/^list_name$/, "list name")
        .replace(/\$/g, "_dollar_sign_")
    );
  }
  return Object.freeze(result);
}

// See reference table: https://xlsform.org/en/ref-table/. For groups and repeats, we deviate from
// the reference to always use underscores, making a type name recognizable with a [a-z_]+ regex
// pattern.

export function normalizeType(type: string): string {
  return type
    .replace(/^media::(image|audio|video)\B/, "$1")
    .replace(/^imei$/, "deviceid")
    .replace(/^phone_number$/, "phonenumber")
    .replace(/^select one\B/, "select_one")
    .replace(/^select multiple\B/, "select_multiple")
    .replace(/^location$/, "geopoint")
    .replace(/^photo\B/, "image")
    .replace(/^trigger$/, "acknowledge")
    .replace(/^begin group$/, "begin_group")
    .replace(/^end group$/, "end_group")
    .replace(/^begin repeat$/, "begin_repeat")
    .replace(/^end repeat$/, "end_repeat");
}

const autoCleanOptions = {
  getAutoValues: true,
  trimStrings: true,
  mutate: false,
};

// Loads a plain object, cleans it up and throws if it’s not a valid row from a `survey` worksheet.
export function loadQuestionRow(row: Record<string, unknown>): QuestionRow {
  const cleanRow = questionRowSchema.clean(
    { ...row, type: normalizeType(String(row.type)) },
    autoCleanOptions
  );
  assertValidQuestionRow(cleanRow);
  return cleanRow;
}

// Loads a plain object, cleans it up and throws if it’s not a valid row from a `choices` worksheet.
export function loadChoicesRow(row: Record<string, unknown>): ChoiceRow {
  const cleanRow = choiceRowSchema.clean(row, {
    ...autoCleanOptions,
    filter: false,
  });
  assertValidChoiceRow(cleanRow);
  return cleanRow;
}

// Loads a plain object, cleans it up and throws if it’s not a valid row from a `settings` worksheet.
export function loadSettingsRow(row: Record<string, unknown>): SettingsRow {
  const cleanRow = settingsRowSchema.clean(row, autoCleanOptions);
  assertValidSettingsRow(cleanRow);
  return cleanRow;
}

type LoadRowFunction<T> = (row: Record<string, unknown>) => T;

// Turns a plain ExcelJS row into a handier data model, cleaning it up and throwing if it’s invalid.
export function loadExcelRow<RowT>({
  row,
  columnNames,
  defaultLanguage,
  loadRowFn,
}: {
  readonly row: Excel.Row;
  readonly columnNames: readonly string[];
  readonly defaultLanguage: string | undefined;
  readonly loadRowFn: LoadRowFunction<RowT>;
}) {
  const rowRawData: Record<string, unknown> = {};
  (row.values as Excel.CellValue[]).slice(1).forEach((value, columnIndex) => {
    const columnName = columnNames[columnIndex];
    rowRawData[columnName] = `${value}`;
  });
  const { result: rowDataWithLocalizedStrings } = nestDoubleColonFields(
    rowRawData,
    localizableColumnNames,
    defaultLanguage
  );
  const {
    result: rowDataWithNamespacedFields,
  } = nestDoubleColonFields(rowDataWithLocalizedStrings, [
    "instance",
    "bind",
    "body",
  ]);
  try {
    return loadRowFn(rowDataWithNamespacedFields);
  } catch (error) {
    throw new SyntaxError(
      `Could not load row ${JSON.stringify(
        rowDataWithNamespacedFields,
        null,
        2
      )}: ${error} / ${JSON.stringify(error.details)}`
    );
  }
}

/**
 * @returns a set of localization language names from a given list of column names.
 *
 * @example
 * findLanguagesInColumnNames([
 *   'label::русский (ru)',
 *   'label::English (en)'
 * ]) // -> ['русский (ru)', 'English (en)']
 *
 * findLanguagesInColumnNames(['label']) // -> ['English (en)']
 */
function findLanguagesInColumnNames(
  columnNames: readonly string[],
  defaultLanguage?: string
): Readonly<Set<string>> {
  const columnNamesToTrues: Record<string, unknown> = {};
  columnNames.forEach((name) => {
    columnNamesToTrues[name] = true;
  });
  const { foundSuffixes } = nestDoubleColonFields(
    columnNamesToTrues,
    localizableColumnNames,
    defaultLanguage
  );
  return foundSuffixes;
}

/**
 * Loads an worksheet from an ExcelJS workbook and returns the sheet in our internal data model.
 */
function loadWorksheet<RowT>(
  /** The ExcelJS `Workbook` from which the sheet should be loaded. */
  workbook: Excel.Workbook,
  /** Name of the worksheet, for example, `"survey"` */
  sheetName: WorksheetName,
  /** Function to process, clean up, and load a single row into our internal row data model. */
  loadRowFn: LoadRowFunction<RowT>,
  /** Default language to assume if a column is not localized. */
  defaultLanguage?: string
): WorksheetRowsWithMetadata<RowT> | undefined {
  const excelWorksheet = workbook.getWorksheet(sheetName);
  const rows: RowT[] = [];

  if (!excelWorksheet) {
    return undefined;
  }

  const firstRow = excelWorksheet.getRows(1, 1)[0];
  if (!(firstRow.values instanceof Array)) {
    throw new SyntaxError(
      `First row of the ‘${sheetName}’ worksheet must be an array structure, but is a ${typeof firstRow.values} instead. Please fix this.`
    );
  }

  // Normalize column names because XLSForm implementations vary, unfortunately
  const columnNames = firstRow.values
    .slice(1)
    .map((cellValue) => cellValue?.toString() || "");
  const columnNamesNormalized = normalizeColumnNames(columnNames);

  const languages = findLanguagesInColumnNames(
    columnNamesNormalized,
    defaultLanguage
  );

  // Apply given row loading function to all rows
  excelWorksheet.eachRow((row, rowIndex) => {
    if (rowIndex === 1) {
      return;
    }
    rows.push(
      loadExcelRow<RowT>({
        row,
        columnNames: columnNamesNormalized,
        defaultLanguage,
        loadRowFn,
      })
    );
  });

  return { rows, languages, columnNames, columnNamesNormalized };
}

/**
 * Loads a given ExcelJS workbook.
 *
 * @returns an `XLSForm` model.
 */
export async function loadFormFromExcelWorkbook(
  /** The ExcelJS workbook to load as XLSForm model. */
  workbook: Excel.Workbook
): Promise<XLSForm> {
  const settings = loadWorksheet(workbook, "settings", loadSettingsRow);
  const defaultLanguage = settings?.rows[0].default_language || "English (en)";
  const choices = loadWorksheet(
    workbook,
    "choices",
    loadChoicesRow,
    defaultLanguage
  );
  const survey = loadWorksheet(
    workbook,
    "survey",
    loadQuestionRow,
    defaultLanguage
  );

  if (!survey) {
    throw new Error(
      "No `survey` sheet found in workbook. Please define a sheet named `survey` and try again."
    );
  }

  const xlsForm: XLSForm = loadXLSFormFromRows(
    survey,
    defaultLanguage,
    settings,
    choices
  );

  return xlsForm;
}

/**
 * Loads a given ExcelJS workbook from a local file (works only in NodeJS environment, not in a
 * browser).
 *
 * @returns an `XLSForm` model.
 */
export default async function loadFormFromXLSXFile(
  /** Name of the Excel (.xlsx) file containing the XLSForm definition. */
  filename: string
): Promise<XLSForm> {
  const workbook = new Excel.Workbook();
  await workbook.xlsx.readFile(filename);
  return loadFormFromExcelWorkbook(workbook);
}
