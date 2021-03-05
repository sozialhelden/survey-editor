import SimpleSchema from "simpl-schema";
import { XLSForm } from "../../types/XLSForm";
import ODKFormulaEvaluationContext from "../odk-formulas/evaluation/ODKFormulaEvaluationContext";
import createRecursiveNodeSchemaDefinition from "./createRecursiveNodeSchemaDefinition";

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
