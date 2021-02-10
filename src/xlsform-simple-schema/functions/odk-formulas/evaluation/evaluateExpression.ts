/* eslint-disable @typescript-eslint/no-explicit-any */
import ODKFormulaEvaluationContext from "./ODKFormulaEvaluationContext";
import evaluateNodeColumn from "./evaluateNodeColumn";
import {
  CallExpression,
  Expression,
  NameExpression,
  OperatorExpression,
} from "../pratt-parser-base";
import ODKNodeValue from "../../../types/ODKNodeValue";
import functions from "./ODKFormulaFunctions";
import LiteralExpression from "../pratt-parser-base/expressions/LiteralExpression";
import { ODKNode } from "../../../types/ODKNode";
import SelectorExpression from "../pratt-parser-base/expressions/SelectorExpression";
import {
  findNodeByPathRelativeToScope,
  findNodeByNameInsideScope,
  findNodeByNameInCurrentAndAncestorScopes,
} from "./XPath";
import { EvaluationError } from "../../../types/Errors";

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
  scope: ODKNode
): unknown {
  let result: unknown;

  context.stackDepth += 1;
  if (context.stackDepth > 10000) {
    throw new EvaluationError(
      `Stack overflow while evaluating \`${JSON.stringify(expression)}\``,
      "stackOverflow",
      expression,
      scope
    );
  }

  // XXX: This could be caseless, for example by having Expression subclasses that have their own evaluator
  if (expression instanceof LiteralExpression) {
    result = evaluateLiteralExpression(expression);
  } else if (expression instanceof NameExpression) {
    result = evaluateNameExpression(expression, context, scope);
  } else if (expression instanceof SelectorExpression) {
    result = evaluateSelectorExpression(expression, context, scope);
  } else if (expression instanceof OperatorExpression) {
    result = evaluateOperatorExpression(expression, context, scope);
  } else if (expression instanceof CallExpression) {
    result = evaluateCallExpression(expression, context, scope);
  } else {
    throw new EvaluationError(
      `Don’t know how to evaluate \`${expression}\`.`,
      "unsupportedExpressionType",
      expression,
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
      `Can’t call a function without knowing its name — the name must be either defined as string returne name string nor a function reference.`,
      "functionNotFound",
      expression,
      scope
    );
  }

  if (!fn) {
    throw new EvaluationError(
      `Could not find a function named \`${nameExpressionOrString}\`.`,
      "functionNotFound",
      expression,
      scope
    );
  }

  const evaluatedArgs = expression.args.map((arg) =>
    evaluateExpression(arg, context, scope)
  );
  if (typeof fn !== "function") {
    throw new EvaluationError(
      `Found name \`${fn}\`, but it is not a function.`,
      "functionNotFound",
      expression,
      scope
    );
  }
  return fn.apply(context, evaluatedArgs);
}

function evaluateOperatorExpression(
  expression: OperatorExpression,
  context: ODKFormulaEvaluationContext,
  scope: ODKNode
): ODKNodeValue {
  const left = evaluateExpression(expression.left, context, scope);
  const right = evaluateExpression(expression.right, context, scope);

  if (expression.operator === "=") {
    return left === right;
  }
  if (expression.operator === "!=") {
    return left !== right;
  }

  if (expression.operator === "and" || expression.operator === "or") {
    if (typeof left !== "boolean") {
      throw new EvaluationError(
        `Found left operand \`${left}\` that is no boolean value. Boolean operators only work with values that are \`true\` or \`false\`.`,
        "invalidOperandType",
        expression,
        scope
      );
    }
    if (typeof right !== "boolean") {
      throw new EvaluationError(
        `Found right operand \`${right}\` that is no boolean value. Boolean operators only work with operands that are \`true\` or \`false\`.`,
        "invalidOperandType",
        expression,
        scope
      );
    }
    switch (expression.operator) {
      case "or":
        return left || right;
      case "and":
        return left && right;
    }
  }

  if (typeof left !== "number") {
    throw new EvaluationError(
      `Found left operand \`${left}\` that is no number. Arithmetic and relative comparison operators only work with operands that are numbers.`,
      "invalidOperandType",
      expression,
      scope
    );
  }
  if (typeof right !== "number") {
    throw new EvaluationError(
      `Found right operand \`${right}\` that is no number. Arithmetic and relative comparison operators only work with operands that are numbers.`,
      "invalidOperandType",
      expression,
      scope
    );
  }

  switch (expression.operator) {
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
        `The ${expression.operator} operator is not supported`,
        "unsupportedOperator",
        expression,
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
        scope
      );
    }
    if (nodeOrNodes instanceof Array) {
      return nodeOrNodes.map((node) =>
        evaluateNodeColumn(node, context, "calculation", node.answer)
      );
    }
    const evaluationResult = evaluateNodeColumn(
      nodeOrNodes,
      context,
      "calculation",
      nodeOrNodes.answer
    );
    if (evaluationResult.error) {
      throw new EvaluationError(
        `Error while evaluating ${expression.text}.`,
        "unsupportedNameExpression",
        expression,
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
      scope
    );
  }
  throw new EvaluationError(
    `Don’t know how to evaluate ${expression}.`,
    "unsupportedNameExpression",
    expression,
    scope
  );
}

export function evaluateSelectorExpression(
  expression: SelectorExpression<string[]>,
  context: ODKFormulaEvaluationContext,
  scope: ODKNode
): unknown {
  const selector = expression.selector;
  const ref = findNodeByPathRelativeToScope(selector, context, scope);
  if (ref instanceof Array) {
    return ref.map((node) =>
      evaluateNodeColumn(node, context, "calculation", node.answer)
    );
  }
  return ref && evaluateNodeColumn(ref, context, "calculation", ref.answer);
}
