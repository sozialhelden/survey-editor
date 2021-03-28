import { isEqual } from "lodash";
import { ODKNode } from "../../../types/ODKNode";
import ODKFormulaEvaluationContext from "./ODKFormulaEvaluationContext";

/**
 * Recursively searches for a node by its name, starting from the given scope. Includes children of
 * the current scope in search.
 *
 * @param name the name of the node to select
 * @param context global survey context to search in
 * @param scope current scope to limit the search. Skip this argument to search in the survey's root
 *   node.
 */
export function findNodeByNameInsideScope(
  name: string,
  context: ODKFormulaEvaluationContext,
  scope: ODKNode = context.survey
): ODKNode | ODKNode[] | undefined {
  if (scope.row?.name === name) {
    return scope;
  } else if (scope.children?.length) {
    for (let i = 0; i < scope.children.length; i += 1) {
      const childScope = scope.children[i];
      if (childScope.row?.name === name) {
        return childScope;
      }
      const foundChild = findNodeByNameInsideScope(name, context, childScope);
      if (foundChild) {
        return foundChild;
      }
    }
  }
  return undefined;
}

/**
 * Recursively searches for a node by its name, starting from the given scope and moving upwards in
 * the hierarchy. Includes ancestors of the current scope in search, until it reaches the root
 * scope.
 *
 * @param name the name of the node to select
 * @param context global survey context to search in
 * @param scope current scope to limit the search. Skip this argument to search in the survey's root
 *   node.
 */
export function findNodeByNameInCurrentAndAncestorScopes(
  name: string,
  context: ODKFormulaEvaluationContext,
  scope: ODKNode
): ODKNode | ODKNode[] | undefined {
  if (scope.row?.name === name) {
    return scope;
  } else if (scope.children) {
    for (let i = 0; i < scope.children.length; i += 1) {
      const child = scope.children[i];
      if (child.row?.name === name) {
        return child;
      }
    }
  }
  const stack = getAncestors(scope, context);
  const parentScope = stack?.[stack.length - 1];
  if (!parentScope) {
    return undefined;
  }
  return (
    findNodeByNameInCurrentAndAncestorScopes(name, context, parentScope) ||
    undefined
  );
}

/**
 * Returns a node that matches the given absolute path, or its relative path as seen from the given
 * scope. Works a bit like a file structure.
 *
 * @param pathComponents Path of the node to select. Array of strings, e.g. `['..', '..', 'name']`.
 * @param context global survey context to search in
 * @param scope current scope to limit the search. Skip this argument to search in the survey's root
 *   node.
 */
export function findNodeByPathRelativeToScope(
  pathComponents: string[],
  context: ODKFormulaEvaluationContext,
  scope: ODKNode = context.survey
): ODKNode | ODKNode[] | undefined {
  const pathComponent = pathComponents[0];
  // console.log('Searching', pathComponent, 'in scope', scope.row?.name, 'stack', scope.stack);
  let result: ODKNode | undefined;

  if (pathComponent === ".") {
    result = scope;
  } else if (pathComponent === "/") {
    result = context.survey;
  } else if (pathComponent === "..") {
    if (scope === context.survey) {
      throw new Error(
        "Reached root - Can’t traverse further up the hierarchy."
      );
    }
    const stack = getAncestors(scope, context);
    result = stack?.[stack.length - 1];
  } else if (pathComponent === scope.row.name) {
    result = scope;
  } else if (scope.children?.length) {
    for (let i = 0; i < scope.children.length; i += 1) {
      const childScope = scope.children[i];
      if (childScope.row.name === pathComponent) {
        result = childScope;
        break;
      }
    }
  }

  if (pathComponents.length === 1) {
    return result;
  }

  return findNodeByPathRelativeToScope(
    pathComponents.slice(1),
    context,
    result
  );
}

function getReverseNodeAbsolutePath(
  node: ODKNode | undefined,
  context: ODKFormulaEvaluationContext
): string[] {
  if (!node) {
    return ["/"];
  }

  if (!node?.row?.name) {
    throw new Error(
      `Encountered a row without a name (row #${node.rowIndex}). This should not happen. Please ensure the survey data is valid.`
    );
  }

  const stack = getAncestors(node, context);
  return [
    node.row?.name,
    ...getReverseNodeAbsolutePath(stack?.[stack.length - 1], context),
  ];
}

/** @returns the key path of a given node in the survey tree as an array of node names.*/
export function getNodeAbsolutePath(
  node: ODKNode,
  context: ODKFormulaEvaluationContext
): string[] {
  return getReverseNodeAbsolutePath(node, context)?.reverse();
}

/**
 * @returns the key path of a given node in the survey tree as a string of node names joined by a
 * given delimiter (usually '.' or '/').
 */
export function getNodeAbsolutePathString(
  node: ODKNode,
  context: ODKFormulaEvaluationContext,
  delimiter: string = "."
): string {
  return getNodeAbsolutePath(node, context).slice(1).join(delimiter);
}

/**
 * @returns `true` if a string is a valid XPath, `false` otherwise.
 */
export function isXPath(string: string): boolean {
  return !!string.match(/^\/(\/?[\w*]+(?:\[[^]+?])?)$/);
}

/**
 * @returns a list of array indexes that allow finding a given node inside the scope by looking it
 * up using each ancestor's `children` array.
 */
export function getScopedNodeIndexPath(
  node: ODKNode,
  scope: ODKNode,
  stack: number[] = []
): number[] | undefined {
  if (isEqual(node, scope)) {
    return stack;
  }
  if (scope.children?.length) {
    for (let i = 0; i < scope.children.length; i += 1) {
      stack.push(i);
      const childNode = scope.children[i];
      const foundStack = getScopedNodeIndexPath(node, childNode, stack);
      if (foundStack !== undefined) {
        return foundStack;
      }
      stack.pop();
    }
  }
  return undefined;
}

/**
 * @returns a list of array indexes that allow finding a given node from the root by looking it
 * up using each ancestor's `children` array.
 */

export function getNodeIndexPath(
  node: ODKNode,
  context: ODKFormulaEvaluationContext
): number[] | undefined {
  return getScopedNodeIndexPath(node, context.survey);
}

/**
 * @returns the list of ancestors of a node (as node references), using the given scope as root.
 */
export function getScopedAncestors(
  node: ODKNode,
  scope: ODKNode,
  stack: ODKNode[] = []
): ODKNode[] | undefined {
  if (isEqual(node, scope)) {
    return stack;
  }
  if (scope.children?.length) {
    stack.push(scope);
    for (let i = 0; i < scope.children.length; i += 1) {
      const childNode = scope.children[i];
      const foundStack = getScopedAncestors(node, childNode, stack);
      if (foundStack) {
        return foundStack;
      }
    }
    stack.pop();
  }
}

/**
 * @returns the list of ancestors of a node (as node references) up to (and including) the survey
 * root node.
 */

export function getAncestors(
  node: ODKNode,
  context: ODKFormulaEvaluationContext
) {
  return getScopedAncestors(node, context.survey);
}
