/* eslint-disable @typescript-eslint/no-explicit-any */
import { ordinalize } from "inflection";
import { EvaluationError } from "../../../types/Errors";
import { ODKNode } from "../../../types/ODKNode";
import ODKNodeValue from "../../../types/ODKNodeValue";
import {
  CallExpression,
  Expression,
  NameExpression,
  OperatorExpression,
} from "../pratt-parser-base";
import LiteralExpression from "../pratt-parser-base/expressions/LiteralExpression";
import SelectorExpression from "../pratt-parser-base/expressions/SelectorExpression";
import evaluateNodeColumn from "./evaluateNodeColumn";
import ODKFormulaEvaluationContext from "./ODKFormulaEvaluationContext";
import functions from "./ODKFormulaFunctions";
import {
  findNodeByNameInCurrentAndAncestorScopes,
  findNodeByNameInsideScope,
  findNodeByPathRelativeToScope,
} from "./XPath";

/**
 * Evaluates a parsed expression / AST, returning the end result as JavaScript value.
 *
 * @param expression The parsed expression / AST to evaluate.
 * @param context the global context in which the formula should be evaluated. This context contains
 *   information about the whole survey - The evaluation needs this to known the values of
 *   references to other survey nodes (e.g. when you use a variable like `${other-field}` in the
 *   formula)
 * @param scope
 *   For resolving XPaths and relative node references correctly, the evaluation process needs to
 *   know the node in which the evaluation should begin. Use this parameter to supply the node that
 *   contained the formula string.
 */
export default function evaluateExpression(
  expression: Expression,
  context: ODKFormulaEvaluationContext,
  scope: Readonly<ODKNode>
): unknown {
  let result: unknown;

  if (context.stackDepth > 10000) {
    throw new EvaluationError(
      `Stack overflow while evaluating \`${JSON.stringify(expression)}\``,
      "stackOverflow",
      expression,
      context,
      scope
    );
  }

  const deeperContext = {
    ...context,
    stackDepth: context.stackDepth + 1,
  };

  // XXX: This could be caseless, for example by having Expression subclasses that have their own evaluator
  if (expression instanceof LiteralExpression) {
    result = evaluateLiteralExpression(expression);
  } else if (expression instanceof NameExpression) {
    result = evaluateNameExpression(expression, deeperContext, scope);
  } else if (expression instanceof SelectorExpression) {
    result = evaluateSelectorExpression(expression, deeperContext, scope);
  } else if (expression instanceof OperatorExpression) {
    result = evaluateOperatorExpression(expression, deeperContext, scope);
  } else if (expression instanceof CallExpression) {
    result = evaluateCallExpression(expression, deeperContext, scope);
  } else {
    throw new EvaluationError(
      `Don’t know how to evaluate \`${expression}\`.`,
      "unsupportedExpressionType",
      expression,
      deeperContext,
      scope
    );
  }

  context.stackDepth -= 1;

  return result;
}

function evaluateLiteralExpression(
  expression: LiteralExpression<ODKNodeValue>
): ODKNodeValue {
  return expression.value;
}

function stringFromStringOrExpression(n: string | Expression) {
  if (typeof n === "string") {
    return n;
  }
  let string = "";
  n.print((str: string) => (string += str));
  return string;
}

function evaluateCallExpression(
  expression: CallExpression,
  context: ODKFormulaEvaluationContext,
  scope: ODKNode
): unknown {
  const nameExpressionOrString =
    expression.fn instanceof NameExpression
      ? expression.fn
      : evaluateExpression(expression.fn, context, scope);
  let fn: unknown = undefined;
  if (nameExpressionOrString instanceof NameExpression) {
    fn = evaluateNameExpression(
      nameExpressionOrString,
      context,
      scope,
      true,
      functions
    );
  } else if (typeof nameExpressionOrString === "string") {
    fn = functions[nameExpressionOrString];
  } else {
    throw new EvaluationError(
      `Can’t call a function without knowing its name — the name must be either defined as string, return a name string or a function reference.`,
      "functionNotFound",
      expression,
      context,
      scope
    );
  }

  if (!fn) {
    throw new EvaluationError(
      `Could not find a function named \`${stringFromStringOrExpression(
        nameExpressionOrString
      )}\`.`,
      "functionNotFound",
      expression,
      context,
      scope
    );
  }

  const evaluatedArgs = expression.args.map((arg, i) => {
    try {
      return evaluateExpression(arg, context, scope);
    } catch (e) {
      const number = ordinalize(String(i + 1));

      throw new EvaluationError(
        `Error in ${number} argument \`${stringFromStringOrExpression(
          nameExpressionOrString
        )}()\`: ${e.message}`,
        "functionEvalError",
        expression,
        context,
        scope,
        e
      );
    }
  });
  if (typeof fn !== "function") {
    throw new EvaluationError(
      `Found name \`${fn}\`, but it is not a function.`,
      "functionNotFound",
      expression,
      context,
      scope
    );
  }

  try {
    const result = fn.apply(context, evaluatedArgs);
    return result;
  } catch (e) {
    let string = "";
    expression.print((s) => (string += s));
    throw new EvaluationError(
      `Error while calling \`${string}\`: ${e.message}`,
      "functionEvalError",
      expression,
      context,
      scope,
      e
    );
  }
}

function assertBoolean(
  value: unknown,
  valueBeforeCasting: unknown,
  expression: Expression | undefined,
  context: ODKFormulaEvaluationContext,
  scope: ODKNode
): asserts value is boolean {
  if (typeof value !== "boolean") {
    throw new EvaluationError(
      `Found operand \`${JSON.stringify(
        valueBeforeCasting
      )}\` that is no boolean value. Boolean operators only work with values that are \`true\` or \`false\`.`,
      "invalidOperandType",
      expression,
      context,
      scope
    );
  }
}

function evaluateOperatorExpression(
  expression: OperatorExpression,
  context: ODKFormulaEvaluationContext,
  scope: ODKNode
): ODKNodeValue {
  const leftBeforeCasting = evaluateExpression(expression.left, context, scope);
  const rightBeforeCasting = evaluateExpression(
    expression.right,
    context,
    scope
  );

  const operator = expression.operatorToken.text;

  if (operator === "=") {
    // eslint-disable-next-line eqeqeq
    return leftBeforeCasting == rightBeforeCasting;
  }
  if (operator === "!=") {
    // eslint-disable-next-line eqeqeq
    return leftBeforeCasting != rightBeforeCasting;
  }

  let left;
  let right;
  if (operator === "and" || operator === "or") {
    if (typeof leftBeforeCasting === "boolean") {
      left = leftBeforeCasting;
    }
    if (typeof leftBeforeCasting === "number") {
      left = Boolean(leftBeforeCasting);
    }

    if (typeof rightBeforeCasting === "boolean") {
      right = rightBeforeCasting;
    }
    if (typeof rightBeforeCasting === "number") {
      right = Boolean(rightBeforeCasting);
    }

    assertBoolean(left, leftBeforeCasting, expression, context, scope);
    assertBoolean(right, rightBeforeCasting, expression, context, scope);

    switch (operator) {
      case "or":
        return left || right;
      case "and":
        return left && right;
    }
  }

  if (typeof leftBeforeCasting === "number") {
    left = leftBeforeCasting;
  }
  if (typeof leftBeforeCasting === "string") {
    left = parseFloat(leftBeforeCasting);
  }

  if (typeof rightBeforeCasting === "number") {
    right = rightBeforeCasting;
  }
  if (typeof rightBeforeCasting === "string") {
    right = parseFloat(rightBeforeCasting);
  }

  if (typeof left !== "number") {
    throw new EvaluationError(
      `Left operand is \`${JSON.stringify(
        leftBeforeCasting
      )}\`, which is no number. Arithmetic and relative comparison operators only work with operands that are numeric.`,
      "invalidOperandType",
      expression,
      context,
      scope
    );
  }
  if (typeof right !== "number") {
    throw new EvaluationError(
      `Right operand is \`${JSON.stringify(
        rightBeforeCasting
      )}\`, which no number. Arithmetic and relative comparison operators only work with operands that are numeric.`,
      "invalidOperandType",
      expression,
      context,
      scope
    );
  }

  switch (operator) {
    case "+":
      return left + right;
    case "-":
      return left - right;
    case "*":
      return left * right;
    case "div":
      return left / right;
    case "mod":
      return left % right;
    case ">":
      return left > right;
    case ">=":
      return left >= right;
    case "<":
      return left < right;
    case "<=":
      return left <= right;
    default:
      throw new EvaluationError(
        `The \`${operator}\` operator is not supported`,
        "unsupportedOperator",
        expression,
        context,
        scope
      );
  }
}

function evaluateNameExpression(
  expression: NameExpression,
  context: ODKFormulaEvaluationContext,
  scope: ODKNode,
  allowUndefinedNames = false,
  literalBag: Record<string, unknown> = context.knownLiteralsWithoutDollarSign
): unknown {
  if (expression.text.startsWith("$")) {
    const nodeOrNodes =
      findNodeByNameInCurrentAndAncestorScopes(
        expression.name,
        context,
        scope
      ) || findNodeByNameInsideScope(expression.name, context);
    if (!nodeOrNodes) {
      throw new EvaluationError(
        `Could not find a node with name \`${expression.name}\`.`,
        "nodeNotFound",
        expression,
        context,
        scope
      );
    }
    if (nodeOrNodes instanceof Array) {
      return nodeOrNodes.map((node) =>
        evaluateNodeColumn(
          node,
          context,
          "calculation",
          context.nodesToAnswers.get(node)
        )
      );
    }
    const evaluationResult = evaluateNodeColumn(
      nodeOrNodes,
      context,
      "calculation",
      context.nodesToAnswers.get(nodeOrNodes)
    );
    if (evaluationResult.error) {
      throw new EvaluationError(
        `Error in expression ${expression.text}.`,
        "unsupportedNameExpression",
        expression,
        context,
        scope,
        evaluationResult.error instanceof EvaluationError
          ? evaluationResult.error
          : undefined
      );
    }
    return evaluationResult.result;
  } else if (expression.text === expression.name) {
    const value = context.evaluateNonDollarNameFn
      ? context.evaluateNonDollarNameFn({ expression, context, scope })
      : literalBag[expression.name];
    if (value !== undefined || allowUndefinedNames) {
      return value;
    }
    throw new EvaluationError(
      `Unknown name \`${expression.text}\` — did you mean to use \`\${${expression.name}}\` instead of \`${expression.name}\`?`,
      "unknownNameWithoutDollarSign",
      expression,
      context,
      scope
    );
  }
  throw new EvaluationError(
    `Don’t know how to evaluate ${expression}.`,
    "unsupportedNameExpression",
    expression,
    context,
    scope
  );
}

export function evaluateSelectorExpression(
  expression: SelectorExpression<string[]>,
  context: ODKFormulaEvaluationContext,
  scope: ODKNode
): unknown {
  const selector = expression.selector;
  const node = findNodeByPathRelativeToScope(selector, context, scope);
  if (node instanceof Array) {
    return node.map((childNode) =>
      evaluateNodeColumn(
        childNode,
        context,
        "calculation",
        context.nodesToAnswers.get(childNode)
      )
    );
  }
  return (
    node &&
    evaluateNodeColumn(
      node,
      context,
      "calculation",
      context.nodesToAnswers.get(node)
    )
  );
}
