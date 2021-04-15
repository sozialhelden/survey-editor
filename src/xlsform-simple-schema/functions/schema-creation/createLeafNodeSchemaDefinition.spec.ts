import SimpleSchema from "simpl-schema";
import loadFormFromXLSXFile from "../loadFormFromXLSXFile";
import ODKFormulaEvaluationContext, {
  knownLiteralsWithoutDollarSign,
} from "../odk-formulas/evaluation/ODKFormulaEvaluationContext";
import createLeafNodeSchemaDefinition from "./createLeafNodeSchemaDefinition";

describe("createLeafNodeSchemaDefinition()", () => {
  it("creates a SimpleSchema-compatible definition", async () => {
    const xlsForm = await loadFormFromXLSXFile(
      "src/xlsform-simple-schema/test-data/wheelmap-survey.xlsx"
    );
    const context: ODKFormulaEvaluationContext = {
      survey: xlsForm.rootSurveyGroup,
      stackDepth: 0,
      knownLiteralsWithoutDollarSign,
      nodesToAnswers: new Map(),
      evaluationResults: new Map(),
    };
    const node = xlsForm.rootSurveyGroup.children[0];
    const definition = createLeafNodeSchemaDefinition(
      node,
      "Deutsch (de)",
      xlsForm,
      context,
      node.row.name
    );
    new SimpleSchema(definition);
  });
});
