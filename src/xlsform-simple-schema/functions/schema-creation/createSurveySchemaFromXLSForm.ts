import SimpleSchema from 'simpl-schema';
import XLSForm from '../../types/XLSForm';
import ODKFormulaEvaluationContext, { knownLiteralsWithoutDollarSign } from '../odk-formulas/evaluation/ODKFormulaEvaluationContext';
import createGroupNodeSchemaDefinition from './createGroupNodeSchemaDefinition';


export function createSurveySchemaFromXLSForm(
  xlsForm: XLSForm,
  language: string
): {
  context: ODKFormulaEvaluationContext;
  schema: SimpleSchema;
} {
  const context: ODKFormulaEvaluationContext = {
    stackDepth: 0,
    survey: xlsForm.rootSurveyGroup,
    knownLiteralsWithoutDollarSign,
  };
  const schemaDefinition = createGroupNodeSchemaDefinition({
    node: xlsForm.rootSurveyGroup,
    xlsForm,
    context,
    language,
    key: xlsForm.rootSurveyGroup.row.name
  });

  const schema = new SimpleSchema(new SimpleSchema(schemaDefinition).mergedSchema());

  return {
    context, schema,
  };
}
