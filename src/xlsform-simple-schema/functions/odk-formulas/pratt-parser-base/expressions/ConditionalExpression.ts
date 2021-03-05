import { Expression, StringBuilder, Token } from "../types";

/**
 * A ternary conditional expression like "a ? b : c".
 */
export default class ConditionalExpression extends Expression {
  kind = "conditional";
  children = [
    this.condition,
    this.questionMarkToken,
    this.thenArm,
    this.colonToken,
    this.elseArm,
  ];

  constructor(
    readonly tokens: Token[],
    readonly condition: Expression,
    readonly questionMarkToken: Token,
    readonly thenArm: Expression,
    readonly colonToken: Token,
    readonly elseArm: Expression
  ) {
    super();
  }

  public print(builder: StringBuilder): void {
    builder("(");
    this.condition.print(builder);
    builder(" ? ");
    this.thenArm.print(builder);
    builder(" : ");
    this.elseArm.print(builder);
    builder(")");
  }
}
