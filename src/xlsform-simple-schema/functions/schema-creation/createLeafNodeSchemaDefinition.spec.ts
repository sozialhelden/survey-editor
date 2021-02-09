import SimpleSchema from "simpl-schema";
import createLeafNodeSchemaDefinition from "./createLeafNodeSchemaDefinition";
import loadFormFromXLSXFile from "../loadSurveyFromXLSX";
import ODKFormulaEvaluationContext, {
  knownLiteralsWithoutDollarSign,
} from "../odk-formulas/evaluation/ODKFormulaEvaluationContext";

describe("createLeafNodeSchemaDefinition()", () => {
  it("creates a SimpleSchema-compatible definition", async () => {
    const xlsForm = await loadFormFromXLSXFile(
      "src/xlsform-simple-schema/test-data/wheelmap-survey.xlsx"
    );
    const context: ODKFormulaEvaluationContext = {
      survey: xlsForm.rootSurveyGroup,
      stackDepth: 0,
      knownLiteralsWithoutDollarSign,
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
