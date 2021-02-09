import { ODKNode } from '../../../types/ODKNode';
import ODKFormulaEvaluationContext from './ODKFormulaEvaluationContext';

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
  const parentScope = scope.stack[scope.stack.length - 1];
  if (!parentScope) {
    return undefined;
  }
  return findNodeByNameInCurrentAndAncestorScopes(name, context, parentScope) || undefined;
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

  if (pathComponent === '.') {
    result = scope;
  } else if (pathComponent === '/') {
    result = context.survey;
  } else if (pathComponent === '..') {
    if (scope === context.survey) {
      throw new Error('Reached root - Can’t traverse further up the hierarchy.');
    }
    result = scope.stack[scope.stack.length - 1];
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

  return findNodeByPathRelativeToScope(pathComponents.slice(1), context, result);
}

function getReverseNodeAbsolutePath(questionGroup: ODKNode | undefined): string[] {
  if (!questionGroup) {
    return ['/'];
  }

  if (!questionGroup?.row?.name) {
    throw new Error(
      `Encountered a row without a name (row #${questionGroup.rowIndex}). This should not happen. Please ensure the survey data is valid.`
    );
  }
  return [
    questionGroup.row?.name,
    ...getReverseNodeAbsolutePath(questionGroup.stack[questionGroup.stack.length - 1]),
  ];
}

export function getNodeAbsolutePath(questionGroup: ODKNode): string[] {
  return getReverseNodeAbsolutePath(questionGroup)?.reverse();
}

export function isXPath(string: string): boolean {
  return !!string.match(/^\/(\/?[\w*]+(?:\[[^]+?])?)$/);
}
