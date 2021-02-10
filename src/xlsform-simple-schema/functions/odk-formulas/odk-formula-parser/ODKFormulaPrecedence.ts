/**
 * Defines the different precedence levels used by the infix parsers. These
 * determine how a series of infix expressions will be grouped. For example,
 * "a + b * c - d" will be parsed as "(a + (b * c)) - d" because "*" has higher
 * precedence than "+" and "-". Here, bigger numbers mean higher precedence.
 */
export default class ODKFormulaPrecedence {
  // Ordered in increasing precedence.
  public static ASSIGNMENT = 1;
  public static SUM = 2;
  public static PRODUCT = 3;
  public static BOOLEAN_OP = 4;
  public static CONDITIONAL = 5;
  public static EXPONENT = 6;
  public static PREFIX = 7;
  public static POSTFIX = 8;
  public static CALL = 9;
}
