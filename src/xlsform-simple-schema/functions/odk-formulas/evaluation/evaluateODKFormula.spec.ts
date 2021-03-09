import { hospitalSurveyRawData } from "../../../test-data/hospitalSurvey";
import { ODKFormulaError } from "../../../types/Errors";
import nestSurvey from "../../nestSurvey";
import {
  CallExpression,
  NameExpression,
  OperatorExpression,
} from "../pratt-parser-base";
import evaluateODKFormula from "./evaluateODKFormula";
import ODKFormulaEvaluationContext, {
  knownLiteralsWithoutDollarSign,
} from "./ODKFormulaEvaluationContext";

function expectFail(formula: string, regexp: RegExp) {
  test(`\`${formula}\` fails with (${regexp.source})`, () => {
    const { node: survey } = nestSurvey({
      rows: hospitalSurveyRawData(),
      defaultLanguage: "en-US",
    });
    const context: ODKFormulaEvaluationContext = {
      survey,
      knownLiteralsWithoutDollarSign,
      stackDepth: 0,
      nodesToAnswers: new Map(),
      evaluationResults: new Map(),
    };
    const { error, result } = evaluateODKFormula(formula, context);
    expect(error).toBeInstanceOf(ODKFormulaError);
    expect(result).toBeNull();
    // expect(expression).toBeUndefined();
    expect(error?.message).toMatch(regexp);
  });
}

function expectResult<T>(
  formula: string,
  expectedResult: T,
  expressionClass: unknown
) {
  test(`\`${formula}\` -> ${expectedResult}`, () => {
    const { node: survey } = nestSurvey({
      rows: hospitalSurveyRawData(),
      defaultLanguage: "en-US",
    });
    const context: ODKFormulaEvaluationContext = {
      survey,
      knownLiteralsWithoutDollarSign,
      stackDepth: 0,
      nodesToAnswers: new Map(),
      evaluationResults: new Map(),
    };
    const { error, expression, result } = evaluateODKFormula(formula, context);
    expect(error).toBeUndefined();
    expect(expression).toBeInstanceOf(expressionClass);
    expect(result).toBe(expectedResult);
  });
}

function expectResults(
  name: string,
  testValues: [string, unknown][],
  expressionClass: unknown
) {
  describe(name, () => {
    testValues.forEach(([formula, result]) => {
      expectResult(formula, result, expressionClass);
    });
  });
}

function expectOpResults(operator: string, testValues: [string, unknown][]) {
  expectResults(operator, testValues, OperatorExpression);
}

function expectFnResults(operator: string, testValues: [string, unknown][]) {
  expectResults(operator, testValues, CallExpression);
}

describe("evaluateODKFormula", () => {
  describe("operators", () => {
    expectFail("true() + false()", /no number/);
    expectFail("true() + 1", /no number/);
    expectFail("1 + true()", /no number/);
    expectFail("'some string' + 1234", /no number/);
    expectFail("1234 + 'some string'", /no number/);
    expectFail("'some string' and true()", /boolean/);
    expectFail("0 and 0", /boolean/);
    expectFail("'some string' or true()", /boolean/);
    expectFail("0 or 0", /boolean/);

    expectOpResults("+", [
      ["1 + 1", 2],
      ["1 + -1", 0],
      ["-1 + 1", 0],
      ["0 + 0", 0],
    ]);
    expectOpResults("-", [
      ["1 - 1", 0],
      ["-1 - -1", 0],
      ["-1 - 1", -2],
      ["0 - 0", 0],
    ]);
    expectOpResults("*", [
      ["1 * 1", 1],
      ["0 * 1", 0],
      ["1 * 0", 0],
      ["0 * 0", 0],
      ["-1 * 23", -23],
      ["0.5 * 1", 0.5],
    ]);
    expectOpResults("div", [
      ["0 div 0", NaN],
      ["0 div 1", 0],
      ["1 div 1", 1],
      ["1 div 2", 0.5],
      ["1 div 0.5", 2],
    ]);
    expectOpResults("mod", [
      ["0 mod 0", NaN],
      ["0 mod 1", 0],
      ["1 mod 1", 0],
      ["1 mod 2", 1],
      ["4 mod 3", 1],
    ]);
    expectOpResults("=", [
      ["0 = 0", true],
      ["1.0 = 1.0", true],
      ["'abc' = 'abc'", true],
      ["'foo' = 'bar'", false],
      ["true() = false()", false],
      ["false() = true()", false],
      ["false() = false()", true],
      ["true() = true()", true],
    ]);
    expectOpResults("!=", [
      ["0 != 0", false],
      ["1.0 != 1.0", false],
      ["'abc' != 'abc'", false],
      ["'foo' != 'bar'", true],
      ["true() != false()", true],
      ["false() != true()", true],
      ["false() != false()", false],
      ["true() != true()", false],
    ]);
    expectOpResults(">", [
      ["0 > 0", false],
      ["1 > 0", true],
      ["0 > 1", false],
    ]);
    expectOpResults(">=", [
      ["0 >= 0", true],
      ["1 >= 0", true],
      ["0 >= 1", false],
    ]);
    expectOpResults("<", [
      ["0 < 0", false],
      ["1 < 0", false],
      ["0 < 1", true],
    ]);
    expectOpResults("<=", [
      ["0 <= 0", true],
      ["0 <= 1", true],
      ["1 <= 0", false],
    ]);
    expectOpResults("and", [
      ["false() and false()", false],
      ["false() and true()", false],
      ["true() and false()", false],
      ["true() and true()", true],
    ]);
    expectOpResults("or", [
      ["false() or false()", false],
      ["false() or true()", true],
      ["true() or false()", true],
      ["true() or true()", true],
    ]);
  });

  describe("magic identifiers", () => {
    expectResults(
      "truthiness",
      [
        ["yes", true],
        ["no", false],
        ["TRUE", true],
        ["FALSE", false],
        ["true", true],
        ["false", false],
      ],
      NameExpression
    );
  });

  // TODO: Go through this documentation
  // https://getodk.github.io/xforms-spec/#xpath-functions

  describe("functions", () => {
    expectFnResults("if", [
      ["if(true(), 'foo', 'bar')", "foo"],
      ["if(false(), 'foo', 'bar')", "bar"],
    ]);
    expectFail("if('hello', 'foo', 'bar')", /hello/);

    expectFnResults("boolean ops", [
      ["true()", true],
      ["false()", false],
      ["not(true())", false],
      ["not(false())", true],
    ]);
    expectFail("not('hello')", /hello/);

    expectFnResults("selected", [
      ["selected('foobar baz', 'foo')", false],
      ["selected('foo bar baz', 'bar')", true],
      ["selected('foo bar baz', 'baz')", true],
      ["selected('foo bar baz', 'qux')", false],
      ["selected('', '')", false],
      ["selected('foo bar baz', '')", false],
      ["selected('', 'foo')", false],
    ]);

    test.todo("coalesce");
    test.todo("boolean");
    test.todo("position");
    test.todo("once");
    test.todo("selected-at");
    test.todo("count-selected");
    test.todo("jr:choice-name");
    test.todo("indexed-repeat");
    test.todo("count");
    test.todo("count-non-empty");
    test.todo("sum");
    test.todo("max");
    test.todo("min");
    test.todo("regex");
    test.todo("contains");
    test.todo("starts-with");
    test.todo("ends-with");
    test.todo("substr");
    test.todo("substring-before");
    test.todo("substring-after");
    test.todo("translate");
    test.todo("string-length");
    test.todo("normalize-space");
    test.todo("concat");
    test.todo("join");
    test.todo("boolean-from-string");
    test.todo("string");
    test.todo("round");
    test.todo("int");
    test.todo("number");
    test.todo("digest");
    test.todo("pow");
    test.todo("log");
    test.todo("log10");
    test.todo("abs");
    test.todo("sin");
    test.todo("cos");
    test.todo("tan");
    test.todo("asin");
    test.todo("acos");
    test.todo("atan");
    test.todo("atan2");
    test.todo("sqrt");
    test.todo("exp");
    test.todo("exp10");
    test.todo("pi");
    test.todo("today");
    test.todo("now");
    test.todo("decimal-date-time");
    test.todo("date");
    test.todo("decimal-time");
    test.todo("format-date");
    test.todo("format-date-time");
    test.todo("area");
    test.todo("distance");
    test.todo("random");
    test.todo("randomize");
    test.todo("uuid");
    test.todo("checklist");
    test.todo("weighted-checklist");
  });

  describe("execution context", () => {
    test.todo("can access an answer value");
    test.todo("can evaluate external identifiers");
  });
});
