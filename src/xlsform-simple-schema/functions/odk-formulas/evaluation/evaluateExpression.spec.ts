/* eslint-disable no-template-curly-in-string */
import { hospitalSurveyRawData } from "../../../test-data/hospitalSurvey";
import { assertValidQuestionRow } from "../../../types/RowTypes";
import nestSurvey from "../../nestSurvey";
import { NameExpression } from "../pratt-parser-base";
import evaluateExpression from "./evaluateExpression";
import ODKFormulaExecutionContext from "./ODKFormulaEvaluationContext";

describe("evaluateExpression()", () => {
  it("evaluates a name expression to undefined", () => {
    const { node: survey } = nestSurvey({
      rows: hospitalSurveyRawData(),
      defaultLanguage: "en-US",
    });
    const exampleContext: ODKFormulaExecutionContext = {
      survey,
      nodesToAnswers: new Map(),
      evaluationResults: new Map(),
      stackDepth: 0,
      knownLiteralsWithoutDollarSign: {},
    };
    const nameExpression = new NameExpression(
      [],
      "What is the name of this hospital?",
      "${What is the name of this hospital?}"
    );
    const scope = survey.children[0];
    const result = evaluateExpression(nameExpression, exampleContext, scope);
    expect(result).toEqual(undefined);
  });

  it("evaluates a name expression to the according survey answer", () => {
    const { node: survey } = nestSurvey({
      rows: hospitalSurveyRawData(),
      defaultLanguage: "en-US",
    });
    const exampleContext: ODKFormulaExecutionContext = {
      survey,
      nodesToAnswers: new Map(),
      evaluationResults: new Map(),
      stackDepth: 0,
      knownLiteralsWithoutDollarSign: {},
    };
    const nameExpression = new NameExpression(
      [],
      "What is the name of this hospital?",
      "${What is the name of this hospital?}"
    );
    const scope = survey.children[0];
    const questionGroup = survey.children[1].children[0];
    exampleContext.nodesToAnswers.set(questionGroup, "Ye olde hospital");
    const result = evaluateExpression(nameExpression, exampleContext, scope);
    expect(result).toEqual("Ye olde hospital");
  });

  it("evaluates a name expression to the according survey calculation", () => {
    const { node: survey } = nestSurvey({
      rows: hospitalSurveyRawData(),
      defaultLanguage: "en-US",
    });
    const exampleContext: ODKFormulaExecutionContext = {
      survey,
      nodesToAnswers: new Map(),
      evaluationResults: new Map(),
      stackDepth: 0,
      knownLiteralsWithoutDollarSign: {},
    };
    const nameExpression = new NameExpression(
      [],
      "What is the name of this hospital?",
      "${What is the name of this hospital?}"
    );
    const scope = survey.children[0];
    const questionGroup = survey.children[1].children[0];
    if (!questionGroup.row) {
      throw new Error("questionGroup must have a defined row");
    }
    assertValidQuestionRow(questionGroup.row);
    questionGroup.row.calculation =
      "'Ye olde hospital, but as a string literal in a calculation'";
    const result = evaluateExpression(nameExpression, exampleContext, scope);
    expect(result).toEqual(
      "Ye olde hospital, but as a string literal in a calculation"
    );
  });

  test.todo(
    "Evaluates a . expression to the current field answer literal when used in the calculation cell"
  );
});
