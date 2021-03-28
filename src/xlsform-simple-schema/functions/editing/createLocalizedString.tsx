import { LocalizedString } from "../../types/RowTypes";

/**
 * Creates an object with language codes as property names, using the given text as translation for
 * all languages. Helpful when you need a `LocalizedString` but have no sensible content yet.
 */
export function createLocalizedString(
  text: string,
  languages: Readonly<Set<string>>
): LocalizedString {
  const result: LocalizedString = {};
  languages.forEach((lang) => {
    result[lang] = text;
  });
  return result;
}
