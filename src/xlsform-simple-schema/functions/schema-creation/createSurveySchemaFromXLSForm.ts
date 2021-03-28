import SimpleSchema from "simpl-schema";
import { XLSForm } from "../../types/XLSForm";
import ODKFormulaEvaluationContext from "../odk-formulas/evaluation/ODKFormulaEvaluationContext";
import createRecursiveNodeSchemaDefinition from "./createRecursiveNodeSchemaDefinition";

/**
 * @returns a `SimpleSchema` definition for a whole XLSFormthat you can use to validate
 * survey results at runtime.
 */
export function createSurveySchemaFromXLSForm(
  xlsForm: XLSForm,
  context: ODKFormulaEvaluationContext,
  language: string
): SimpleSchema {
  const schemaDefinition = createRecursiveNodeSchemaDefinition({
    node: xlsForm.rootSurveyGroup,
    xlsForm,
    context,
    language,
    key: xlsForm.rootSurveyGroup.row.name,
  });

  const schema = new SimpleSchema(
    new SimpleSchema(schemaDefinition).mergedSchema()
  );

  return schema;
}
