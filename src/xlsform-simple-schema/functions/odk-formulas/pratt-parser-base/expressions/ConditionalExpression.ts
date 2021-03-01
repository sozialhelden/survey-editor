import { Expression, StringBuilder, Token } from "../types";

/**
 * A ternary conditional expression like "a ? b : c".
 */
export default class ConditionalExpression implements Expression {
  kind = "conditional";
  children = [this.condition, this.thenArm, this.elseArm];

  constructor(
    readonly tokens: Token[],
    readonly condition: Expression,
    readonly thenArm: Expression,
    readonly elseArm: Expression
  ) {}

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
