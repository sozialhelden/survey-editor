import { Callout, Colors, Icon } from "@blueprintjs/core";
import * as React from "react";
import HighlightedExpression from "../../components/expression/HighlightedExpression";
import StyledMarkdown from "../../components/StyledMarkdown";
import { alpha } from "../../lib/colors";
import { ODKSurveyContext } from "../../lib/ODKSurveyContext";
import ODKFormulaEvaluationResult from "../../xlsform-simple-schema/functions/odk-formulas/evaluation/ODKFormulaEvaluationResult";
import { getNodeAbsolutePathString } from "../../xlsform-simple-schema/functions/odk-formulas/evaluation/XPath";
import { NameExpression } from "../../xlsform-simple-schema/functions/odk-formulas/pratt-parser-base";
import LiteralExpression from "../../xlsform-simple-schema/functions/odk-formulas/pratt-parser-base/expressions/LiteralExpression";
import { EvaluationError } from "../../xlsform-simple-schema/types/Errors";
import {
  EvaluatableColumnName,
  ODKNode,
} from "../../xlsform-simple-schema/types/ODKNode";
import { DefaultValueExplanation } from "./DefaultValueExplanation";
import {
  StyledCalloutWithCode,
  StyledCodeBlock,
  StyledPanel,
} from "./DetailsPopover";
import { FormulaResultMeaning } from "./FormulaResultMeaning";

export function ExpressionPanel({
  node,
  columnName,
  nodeEvaluationResults,
  style,
}: {
  node: ODKNode;
  columnName: EvaluatableColumnName;
  nodeEvaluationResults: Map<string, ODKFormulaEvaluationResult> | undefined;
  style?: React.CSSProperties;
}) {
  const context = React.useContext(ODKSurveyContext);
  const cellValue = node.row[columnName];
  const results = nodeEvaluationResults?.get(columnName);
  const cellIsEmpty = cellValue === undefined;
  const isLiteral = results?.expression?.kind === "literal";
  const isName = results?.expression?.kind === "name";
  const answer = context.context?.nodesToAnswers.get(node);
  const nodeName = context.context
    ? getNodeAbsolutePathString(node, context.context)
    : node.row.name;

  const formulaIsTrivial =
    results?.expression instanceof LiteralExpression ||
    (results?.expression instanceof NameExpression &&
      results?.expression.name === results?.expression.text);

  const panel = (
    <StyledPanel
      lang="en"
      style={{
        backgroundColor: Colors.LIGHT_GRAY5,
        marginTop: "0",
        padding: "20px",
        background: `linear-gradient(${alpha(Colors.BLUE3, 0.06)}, ${alpha(
          Colors.BLUE3,
          0.05
        )} 5px, ${alpha(Colors.BLUE3, 0.01)} 10px, transparent 30px)`,
        borderTop: `solid 1px ${Colors.LIGHT_GRAY3}`,
        ...style,
      }}
    >
      {!cellIsEmpty && (
        <>
          <h4>
            <Icon icon="function" />{" "}
            {columnName === "calculation" ? "Formula" : "Condition"}
          </h4>
          <StyledCodeBlock
            style={{
              fontSize: isLiteral || isName ? "20px" : "16px",
              lineHeight: "28px",
            }}
          >
            <HighlightedExpression
              node={node}
              state={results?.state}
              error={results?.error}
              expression={results?.expression}
              code={String(cellValue)}
              tokens={results?.parser?.tokens}
            />
          </StyledCodeBlock>
        </>
      )}

      {(cellIsEmpty || !formulaIsTrivial) && (
        <>
          <h4>{cellIsEmpty ? "Default value" : "Result"}</h4>

          {!cellIsEmpty && !results && (
            <Callout intent="none">Not calculated yet.</Callout>
          )}
          {results?.state !== "error" && (
            <StyledCodeBlock style={{ fontSize: "20px", lineHeight: "28px" }}>
              {results?.result === undefined
                ? "undefined"
                : JSON.stringify(results.result)}
            </StyledCodeBlock>
          )}
        </>
      )}

      {results?.state === "error" && (
        <StyledCalloutWithCode intent="danger">
          {results.error instanceof EvaluationError && (
            <>
              Error in&nbsp;
              <code>
                <HighlightedExpression
                  node={node}
                  expression={results.error.expression}
                />
              </code>
              :
            </>
          )}
          <StyledMarkdown>{results.error.toMarkdown()}</StyledMarkdown>
        </StyledCalloutWithCode>
      )}

      {!cellIsEmpty && results?.result !== undefined && (
        <FormulaResultMeaning {...{ results, columnName }} />
      )}

      {cellIsEmpty && (
        <DefaultValueExplanation {...{ answer, columnName, nodeName }} />
      )}
    </StyledPanel>
  );
  return panel;
}
