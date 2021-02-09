/**
 * Defines the different precedence levels used by the infix parsers. These
 * determine how a series of infix expressions will be grouped. For example,
 * "a + b * c - d" will be parsed as "(a + (b * c)) - d" because "*" has higher
 * precedence than "+" and "-". Here, bigger numbers mean higher precedence.
 */
export default class BantamPrecedence {
  // Ordered in increasing precedence.
  public static ASSIGNMENT = 1;
  public static CONDITIONAL = 2;
  public static SUM = 3;
  public static PRODUCT = 4;
  public static EXPONENT = 5;
  public static PREFIX = 6;
  public static POSTFIX = 7;
  public static CALL = 8;
}
