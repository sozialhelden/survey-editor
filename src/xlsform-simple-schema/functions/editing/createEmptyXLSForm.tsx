import { loadFormFromExcelWorkbook } from "../loadFormFromExcelWorkbook";
import loadEmptyXLSFormWorkbook from "./loadEmptyXLSFormWorkbook";

export default async function createEmptyXLSForm() {
  return await loadFormFromExcelWorkbook(await loadEmptyXLSFormWorkbook());
}
