/* eslint-disable @typescript-eslint/no-explicit-any */
import { ordinalize } from "inflection";
import { addIndefiniteArticle } from "../../../../lib/addIndefiniteArticle";
import { EvaluationError } from "../../../types/Errors";
import { ODKNode } from "../../../types/ODKNode";
import ODKNodeValue from "../../../types/ODKNodeValue";
import {
  CallExpression,
  Expression,
  GroupExpression,
  NameExpression,
  OperatorExpression,
} from "../pratt-parser-base";
import LiteralExpression from "../pratt-parser-base/expressions/LiteralExpression";
import SelectorExpression from "../pratt-parser-base/expressions/SelectorExpression";
import createLiteralExpressionFromValue from "./createLiteralExpressionFromValue";
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

  // This looks as if it could be caseless, for example by having Expression subclasses that have
  // their own evaluator. This would complicate the design though, and make the expression
  // implementation dependent on an expressions use - a two-way dependency to rather avoid.
  if (expression instanceof GroupExpression) {
    result = evaluateExpression(expression.expression, deeperContext, scope);
  } else if (expression instanceof LiteralExpression) {
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

/**
 * A literal contains a defined value already. Return this value.
 */
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

/**
 * Evaluate a CallExpression's (dynamic) function name, then each of its arguments. Then, call the
 * referred function (in this source code) by name. This evaluation does not use eval(), so it
 * shouldn't be possible to break out of this sandbox (fingers crossed)
 */

function evaluateCallExpression(
  expression: CallExpression,
  context: ODKFormulaEvaluationContext,
  scope: ODKNode
): unknown {
  const nameExpressionOrString =
    expression.fn instanceof NameExpression
      ? expression.fn
      : String(evaluateExpression(expression.fn, context, scope));
  let fn: unknown = undefined;

  const error = (
    message: string,
    name: string,
    underlyingEvaluationError?: EvaluationError
  ) => {
    throw new EvaluationError(
      message,
      name,
      expression,
      context,
      scope,
      underlyingEvaluationError
    );
  };

  // Allow to determine a function name dynamically by using an expression to allow things like
  // (get-function-name())()
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
    error(
      `Can’t call a function without knowing its name — the name must be either defined as string, return a name string or a function reference.`,
      "functionNotFound"
    );
  }

  if (!fn) {
    const name = stringFromStringOrExpression(nameExpressionOrString);
    error(`Could not find a function named \`${name}()\`.`, "functionNotFound");
  }

  const evaluatedArgs = expression.args.map((arg, i) => {
    try {
      return evaluateExpression(arg, context, scope);
    } catch (e) {
      const number = ordinalize(String(i + 1));
      const name = stringFromStringOrExpression(nameExpressionOrString);
      error(
        `Error in ${number} argument in \`${name}() function call\`: ${e.message}`,
        "functionEvalError",
        e
      );
    }
    return undefined; // can't be reached but necessary for typecheck
  });

  if (typeof fn !== "function") {
    error(
      `Found name \`${fn}\`, but it is not a function.`,
      "functionNotFound"
    );
    return; // will never be reached because error() throws
  }

  try {
    const result = fn.apply(context, evaluatedArgs);
    return result;
  } catch (e) {
    let string = "";
    expression.print((s) => (string += s));
    error(
      `Error while calling \`${string}\`: ${e.message}`,
      "functionEvalError",
      e
    );
  }

  return undefined;
}

function assertBoolean(
  value: unknown,
  valueBeforeCasting: unknown,
  expression: OperatorExpression | undefined,
  context: ODKFormulaEvaluationContext,
  scope: ODKNode
): asserts value is boolean {
  if (typeof value !== "boolean") {
    throw new EvaluationError(
      `Found operand \`${JSON.stringify(
        valueBeforeCasting
      )}\` that is no boolean value, but ${addIndefiniteArticle(
        typeof valueBeforeCasting
      )}. Boolean operators like \`${
        expression?.operatorToken.text
      }\` only work with values that are \`true\` or \`false\`.`,
      "invalidOperandType",
      expression,
      context,
      scope
    );
  }
}

/**
 * Evaluates operands of the expression, and calculates the result from combining them with the
 * operator referenced by the expression's operator string.
 */
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
    if (leftBeforeCasting.match(/^-?\d+\.?\d*/)) {
      left = parseFloat(leftBeforeCasting);
    }
  }

  if (typeof rightBeforeCasting === "number") {
    right = rightBeforeCasting;
  }
  if (typeof rightBeforeCasting === "string") {
    if (rightBeforeCasting.match(/^-?\d+\.?\d*/)) {
      right = parseFloat(rightBeforeCasting);
    }
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

/**
 * Returns the value of a scoped NameExpression in a given evaluation context.
 *
 * Handled cases:
 *
 * - The name references a single node: Returns the node's answer or `calculation` value in this case.
 * - The name references a node set: Returns the answers/calculations of all nodes, as list.
 * - The name has no dollar sign: Look up the name as key in the supplied `literalBag` map, and return its value.
 */
function evaluateNameExpression(
  expression: NameExpression,
  context: ODKFormulaEvaluationContext,
  scope: ODKNode,
  /** By default, throw if the name is not defined somewhere. */
  allowUndefinedNames = false,
  /**
   * Hand over a mapping of literal names to values. These literals can be used legally inside
   * the formula, and will be evaluated to their values in the map.
   */
  literalBag: Record<string, unknown> = context.knownLiteralsWithoutDollarSign
): unknown {
  if (expression.text.startsWith("$")) {
    const nodeOrNodes =
      findNodeByNameInCurrentAndAncestorScopes(
        expression.name,
        context.survey,
        scope
      ) || findNodeByNameInsideScope(expression.name, context.survey);

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
      // Return a list of the values of all nodes referenced by this name.
      // TODO: Check specs and examples if this is standard + correct ODK behavior.
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

    let tip: string = "";
    const node = findNodeByNameInCurrentAndAncestorScopes(
      expression.name,
      context.survey,
      scope
    );
    if (node) {
      tip = `— did you mean to type \`\${${expression.name}}\` instead of \`${expression.name}\`?`;
    }

    throw new EvaluationError(
      `\`${expression.text}\` is not a known name or reference. ${tip}`,
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

/**
 * Finds a single node or multiple nodes that match the given node selector, then returns their
 * value(s).
 */
export function evaluateSelectorExpression(
  expression: SelectorExpression<string[]>,
  context: ODKFormulaEvaluationContext,
  scope: ODKNode
): unknown {
  const selector = expression.selector;
  const node = findNodeByPathRelativeToScope(selector, context.survey, scope);

  const evalCalculation = (n: ODKNode) =>
    n === scope
      ? {
          state: "success",
          result: context.nodesToAnswers.get(n),
          expression: createLiteralExpressionFromValue(
            context.nodesToAnswers.get(n)
          ),
          error: undefined,
        }
      : evaluateNodeColumn(
          n,
          context,
          "calculation",
          context.nodesToAnswers.get(n)
        );

  if (node instanceof Array) {
    return node.map((childNode) => evalCalculation(childNode));
  }
  return node && evalCalculation(node);
}
