import { isObject } from "lodash";
import * as React from "react";
import { ODKSurveyContext } from "../../../lib/ODKSurveyContext";
import ODKFormulaEvaluationContext from "../../../xlsform-simple-schema/functions/odk-formulas/evaluation/ODKFormulaEvaluationContext";
import {
  findNodeByNameInCurrentAndAncestorScopes,
  findNodeByNameInsideScope,
} from "../../../xlsform-simple-schema/functions/odk-formulas/evaluation/XPath";
import {
  Expression,
  NameExpression,
  Token,
  TokenType,
} from "../../../xlsform-simple-schema/functions/odk-formulas/pratt-parser-base";
import LiteralExpression from "../../../xlsform-simple-schema/functions/odk-formulas/pratt-parser-base/expressions/LiteralExpression";
import { ODKNode } from "../../../xlsform-simple-schema/types/ODKNode";
import FieldPopoverButton from "../../survey/FieldPopoverButton/FieldPopoverButton";
import ObjectLiteralButtonWithPopover from "./ObjectLiteral";

/** Shows a function name as a link to the function's documentation. */
function FunctionCallTokenElement({
  token,
  className,
}: {
  token: Token;
  className?: string;
}) {
  return (
    <a
      href={`https://getodk.github.io/xforms-spec/#fn:${token.text}`}
      className={className}
      target="docs"
    >
      {token.text}
    </a>
  );
}

/** Shows a variable name as a link to its definition. */
function VariableReferenceTokenElement({
  expression,
  context,
  className,
  token,
  node,
}: {
  expression: NameExpression;
  context: ODKFormulaEvaluationContext;
  className?: string;
  token: Token;
  node: ODKNode;
}) {
  // Expression is a variable reference.
  const referencedNode =
    findNodeByNameInCurrentAndAncestorScopes(
      expression.name,
      context.survey,
      node
    ) || findNodeByNameInsideScope(expression.name, context.survey);

  if (!referencedNode || referencedNode instanceof Array) {
    // We should never get here.
    debugger;
    return (
      <var className={className} data-referenced-node={referencedNode}>
        {token.text}
      </var>
    );
  }

  return (
    <var>
      {"${"}
      <FieldPopoverButton
        node={referencedNode}
        editable={false}
        nameOfOnlyShownTab={"calculation"}
      />
      {"}"}
    </var>
  );
}

/** Shows a single parsed formula token as highlighted code. */
export function TokenElement({
  token,
  expression,
  parentExpression,
  node,
}: // stackDepth,
{
  token: Token;
  expression?: Expression;
  parentExpression?: Expression;
  node: ODKNode;
  // stackDepth?: number;
}) {
  const className = `token token-${TokenType[token.type]}`;
  const context = React.useContext(ODKSurveyContext);

  const isFunctionCall =
    token.type === TokenType.NAME &&
    parentExpression?.kind === "call" &&
    expression instanceof NameExpression &&
    token === parentExpression.tokens[0];

  if (isFunctionCall) {
    return <FunctionCallTokenElement {...{ token, className }} />;
  }

  if (
    token.type === TokenType.NAME &&
    token.text.startsWith("$") &&
    expression instanceof NameExpression &&
    context.evaluationContext
  ) {
    return (
      <VariableReferenceTokenElement
        {...{
          expression,
          context: context.evaluationContext,
          className,
          token,
          node,
        }}
      />
    );
  }

  if (
    expression instanceof LiteralExpression &&
    isObject(expression.value) &&
    expression.type === "object"
  ) {
    return (
      <ObjectLiteralButtonWithPopover
        object={expression.value as Record<string, unknown>}
        contextPrefix={""}
      />
    );
  }

  return <span className={className}>{token.text}</span>;
}
