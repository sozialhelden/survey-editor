/**
 * Parses the given chunk of code and verifies that it matches the expected
 * pretty-printed result.
 */

import BantamLexer from "./BantamLexer";
import { BantamParser } from "./BantamParser";

function expectResult(input: string, expectedString: string) {
  it(`parses ${input} to ${expectedString}`, () => {
    const lexer = new BantamLexer(input);
    const parser = new BantamParser(lexer);

    const result = parser.parseExpression();
    let actualString = "";
    const builder = (string: string) => {
      actualString += string;
    };
    result.print(builder);
    // console.log(result);
    expect(actualString).toEqual(expectedString);
  });
}

describe("BantamParser", () => {
  // Function call.
  expectResult("a()", "a()");
  expectResult("a(b)", "a(b)");
  expectResult("a(b, c)", "a(b, c)");
  expectResult("a(b)(c)", "a(b)(c)");
  expectResult("a(b) + c(d)", "(a(b) + c(d))");
  expectResult("a(b ? c : d, e + f)", "a((b ? c : d), (e + f))");

  // Unary precedence.
  expectResult("~!-+a", "(~(!(-(+a))))");
  expectResult("a!!!", "(((a!)!)!)");

  // Unary and binary predecence.
  expectResult("-a * b", "((-a) * b)");
  expectResult("!a + b", "((!a) + b)");
  expectResult("~a ^ b", "((~a) ^ b)");
  expectResult("-a!", "(-(a!))");
  expectResult("!a!", "(!(a!))");

  // Binary precedence.
  expectResult(
    "a = b + c * d ^ e - f / g",
    "(a = ((b + (c * (d ^ e))) - (f / g)))"
  );

  // Binary associativity.
  expectResult("a = b = c", "(a = (b = c))");
  expectResult("a + b - c", "((a + b) - c)");
  expectResult("a * b / c", "((a * b) / c)");
  expectResult("a ^ b ^ c", "(a ^ (b ^ c))");

  // Conditional operator.
  expectResult("a ? b : c ? d : e", "(a ? b : (c ? d : e))");
  expectResult("a ? b ? c : d : e", "(a ? (b ? c : d) : e)");
  expectResult("a + b ? c * d : e / f", "((a + b) ? (c * d) : (e / f))");

  // Grouping.
  expectResult("a + (b + c) + d", "((a + ((b + c))) + d)");
  expectResult("a ^ (b + c)", "(a ^ ((b + c)))");
  expectResult("(!a)!", "(((!a))!)");
});
