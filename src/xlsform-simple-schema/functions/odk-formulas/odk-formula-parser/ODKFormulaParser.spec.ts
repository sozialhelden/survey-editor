/* eslint-disable no-template-curly-in-string */
/**
 * Parses the given chunk of code and verifies that it matches the expected
 * pretty-printed result.
 */

import ODKFormulaLexer from "../odk-formula-parser/ODKFormulaLexer";
import { Token } from "../pratt-parser-base";
import ODKFormulaParser from "./ODKFormulaParser";

function parse(input: string) {
  const tokens: Token[] = [];
  const lexer = new ODKFormulaLexer(input);
  const parser = new ODKFormulaParser({
    tokens: lexer,
    onToken: (t) => tokens.push(t),
  });

  const result = parser.parseExpression();
  let actualString = "";
  const builder = (string: string) => {
    actualString += string;
  };
  result.print(builder);
  return { result, actualString, tokens };
}

function expectResult(input: string, expectedString: string) {
  it(`parses ${input} to ${expectedString}`, () => {
    const { actualString } = parse(input);
    // console.log(input, '->', result);
    expect(actualString).toEqual(expectedString);
  });
}

function expectLexerError(input: string, failAtIndex: number) {
  it(`fails lexing ${input} at index ${failAtIndex}`, () => {
    expect(() => {
      console.log(parse(input));
    }).toThrowError(new RegExp(`(starting at character ${failAtIndex})`));
  });
}

function expectParserError(input: string, regexp: RegExp) {
  it(`fails parsing ${input} with error ${regexp}`, () => {
    expect(() => {
      console.log(parse(input));
    }).toThrowError(regexp);
  });
}

describe("ODKFormulaParser", () => {
  // Binary associativity.
  expectResult("${a} = ${b} = ${c}", "(a = (b = c))");
  expectResult("${a} + ${b} - ${c}", "((a + b) - c)");

  // slash is not an allowed operator, we have to use `div`
  expectLexerError("${a} * ${b} / ${c}", 12);
  expectResult("${a} * ${b} div ${c}", "((a * b) div c)");

  // Function call.
  expectResult("a()", "a()");
  expectResult("a(${b})", "a(b)");
  expectResult("a(${b}, ${c})", "a(b, c)");
  expectResult("a(${b})(${c})", "a(b)(c)");
  expectResult("a(${b}) + c(${d})", "(a(b) + c(d))");
  expectResult("a(${e} + ${f})", "a((e + f))");
  expectResult("a(e + f)", "a((e + f))");

  // Unary and binary predecence.
  expectParserError("-a * b", /prefix/);

  // Binary precedence.
  expectResult(
    "a = b + c * d div e - f div g",
    "(a = ((b + ((c * d) div e)) - (f div g)))"
  );
  expectResult("a > b and c < d", "((a > b) and (c < d))");

  // Conditional operator.
  expectLexerError("a ? b : c ? d : e", 2);

  // Grouping.
  expectResult("a + (b + c) + d", "((a + ((b + c))) + d)");
  expectResult(
    'if(${x} = "1" and ${y} = "2","green",if(${x} = "1" and ${z} = "2","yellow",if(${a} = "1" and ${z} = "2","yellow",if(${a} = "1" and ${z} = "1" and ${b} = "2","yellow",if(${a} = "1" and ${z} = "1" and ${b} = "1","red",if(${x} = "1" and ${a} = "1" and ${b} = "2","yellow",if(${x} = "1" and ${a} = "1" and ${b} = "1", "red", "red")))))))',
    "if(((x = '1') and (y = '2')), 'green', if(((x = '1') and (z = '2')), 'yellow', if(((a = '1') and (z = '2')), 'yellow', if((((a = '1') and (z = '1')) and (b = '2')), 'yellow', if((((a = '1') and (z = '1')) and (b = '1')), 'red', if((((x = '1') and (a = '1')) and (b = '2')), 'yellow', if((((x = '1') and (a = '1')) and (b = '1')), 'red', 'red')))))))"
  );
});
