import { LocalizedString } from "../xlsform-simple-schema/types/RowTypes";

export function createLabelInAllLanguages(
  label: string,
  languages: Readonly<Set<string>>
): LocalizedString {
  const result: LocalizedString = {};
  languages.forEach((lang) => {
    result[lang] = label;
  });
  return result;
}
