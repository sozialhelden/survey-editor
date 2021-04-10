import SimpleSchema from "simpl-schema";
import loadFormFromXLSXFile from "../loadSurveyFromXLSX";
import ODKFormulaEvaluationContext from "../odk-formulas/evaluation/ODKFormulaEvaluationContext";
import createRecursiveNodeSchemaDefinition from "./createRecursiveNodeSchemaDefinition";

describe("createGroupNodeSchemaDefinition()", () => {
  it("creates a SimpleSchema", async () => {
    const xlsForm = await loadFormFromXLSXFile(
      "src/xlsform-simple-schema/test-data/wheelmap-survey.xlsx"
    );
    const context: ODKFormulaEvaluationContext = {
      stackDepth: 0,
      survey: xlsForm.rootSurveyGroup,
      knownLiteralsWithoutDollarSign: {},
      evaluationResults: new Map(),
      nodesToAnswers: new Map(),
    };
    const definition = createRecursiveNodeSchemaDefinition({
      node: xlsForm.rootSurveyGroup,
      language: "Deutsch (de)",
      xlsForm,
      context,
      key: xlsForm.rootSurveyGroup.row.name,
    });
    const schema = new SimpleSchema(definition);
    expect(schema).toBeInstanceOf(SimpleSchema);
  });
});
