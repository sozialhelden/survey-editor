import { Callout, Colors, Icon } from "@blueprintjs/core";
import * as React from "react";
import { useDarkMode } from "../../../components/core/DarkModeContainer";
import StyledMarkdown from "../../../components/core/StyledMarkdown";
import HighlightedExpression from "../../../components/odk/HighlightedExpression/HighlightedODKExpression";
import { alpha } from "../../../lib/colors";
import { ODKSurveyContext } from "../../../lib/ODKSurveyContext";
import createLiteralExpressionFromValue from "../../../xlsform-simple-schema/functions/odk-formulas/evaluation/createLiteralExpressionFromValue";
import ODKFormulaEvaluationResult from "../../../xlsform-simple-schema/functions/odk-formulas/evaluation/ODKFormulaEvaluationResult";
import { getNodeAbsolutePathString } from "../../../xlsform-simple-schema/functions/odk-formulas/evaluation/XPath";
import { NameExpression } from "../../../xlsform-simple-schema/functions/odk-formulas/pratt-parser-base";
import LiteralExpression from "../../../xlsform-simple-schema/functions/odk-formulas/pratt-parser-base/expressions/LiteralExpression";
import { EvaluationError } from "../../../xlsform-simple-schema/types/Errors";
import {
  EvaluatableColumnName,
  ODKNode,
} from "../../../xlsform-simple-schema/types/ODKNode";
import { DefaultValueExplanation } from "./DefaultValueExplanation";
import {
  StyledCalloutWithCode,
  StyledCodeBlock,
  StyledPanel,
} from "./FieldPopoverButton";
import { FormulaResultMeaning } from "./FormulaResultMeaning";

/**
 * Visual debugger for XLSForm cells that support formulas. Shows the cell's syntax-highlighted
 * formula, the calculated result, and explanations.
 */
export function ExpressionPanel({
  node,
  columnName,
  nodeEvaluationResult,
  style,
}: {
  node: ODKNode;
  columnName: EvaluatableColumnName;
  nodeEvaluationResult: ODKFormulaEvaluationResult | undefined;
  style?: React.CSSProperties;
}) {
  const isDarkMode = useDarkMode();
  const context = React.useContext(ODKSurveyContext);
  const cellValue = node.row[columnName];
  const results = nodeEvaluationResult;
  const cellIsEmpty = cellValue === undefined;
  const isLiteral = results?.expression?.kind === "literal";
  const isName = results?.expression?.kind === "name";
  const answer = context.evaluationContext?.nodesToAnswers.get(node);
  const nodeName = context.evaluationContext
    ? getNodeAbsolutePathString(node, context.evaluationContext.survey)
    : node.row.name;

  const formulaIsTrivial =
    results?.expression instanceof LiteralExpression ||
    (results?.expression instanceof NameExpression &&
      results?.expression.name === results?.expression.text);

  let title: React.ReactNode = "Result";
  if (cellIsEmpty) {
    if (columnName === "calculation") {
      if (answer !== undefined) {
        title = "Using answer value";
      }
    } else {
      title = "Default value";
    }
  } else {
    title = (
      <>
        <Icon icon="function" />{" "}
        {columnName === "calculation" ? "Formula" : "Condition"}
      </>
    );
  }

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
        borderTop: `solid 1px ${
          isDarkMode ? Colors.DARK_GRAY2 : Colors.LIGHT_GRAY3
        }`,
        ...style,
      }}
    >
      <h4>{title}</h4>

      {!cellIsEmpty && (
        <>
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
            />
          </StyledCodeBlock>
        </>
      )}

      {(cellIsEmpty || !formulaIsTrivial) && (
        <>
          {!cellIsEmpty && !results && (
            <Callout intent="none">Not calculated yet.</Callout>
          )}
          {results?.state !== "error" && (
            <StyledCodeBlock style={{ fontSize: "20px", lineHeight: "28px" }}>
              {!formulaIsTrivial && <>=&nbsp;</>}
              {results?.result === undefined ? (
                "undefined"
              ) : (
                <HighlightedExpression
                  node={node}
                  state={results?.state}
                  error={results?.error}
                  expression={createLiteralExpressionFromValue(results?.result)}
                />
              )}
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
        <FormulaResultMeaning {...{ results, columnName, formulaIsTrivial }} />
      )}

      {cellIsEmpty && (
        <DefaultValueExplanation {...{ answer, columnName, nodeName }} />
      )}
    </StyledPanel>
  );
  return panel;
}
