import { Callout, Classes, Colors, Icon, Text } from "@blueprintjs/core";
import * as React from "react";
import HighlightedExpression from "../../components/expression/HighlightedExpression";
import StyledMarkdown from "../../components/StyledMarkdown";
import { alpha } from "../../lib/colors";
import { ODKSurveyContext } from "../../lib/ODKSurveyContext";
import ODKFormulaEvaluationResult from "../../xlsform-simple-schema/functions/odk-formulas/evaluation/ODKFormulaEvaluationResult";
import { getNodeAbsolutePathString } from "../../xlsform-simple-schema/functions/odk-formulas/evaluation/XPath";
import { EvaluationError } from "../../xlsform-simple-schema/types/Errors";
import {
  EvaluatableColumnName,
  ODKNode,
} from "../../xlsform-simple-schema/types/ODKNode";
import {
  StyledCalloutWithCode,
  StyledCodeBlock,
  StyledPanel,
} from "./DetailsPopover";

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

  const panel = (
    <StyledPanel
      lang="en"
      style={{
        backgroundColor: Colors.LIGHT_GRAY5,
        marginTop: "0",
        padding: "20px",
        background: `linear-gradient(${alpha(Colors.DARK_GRAY5, 0.12)}, ${alpha(
          Colors.DARK_GRAY5,
          0.07
        )} 5px, ${alpha(Colors.DARK_GRAY5, 0.03)} 10px, transparent 30px)`,
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
          <h4>Result</h4>
        </>
      )}

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
        <Text className={Classes.TEXT_MUTED}>
          {
            {
              calculation: <>This is the result of the formula.</>,
              required: `This means you ${
                results?.result ? "can’t" : "can"
              } complete the survey without entering data in this field.`,
              relevant: `This means the survey field is ${
                results?.result ? "shown" : "hidden"
              }.`,
              readonly: `This means the survey field is ${
                results?.result ? "read-only" : "editable"
              }.`,
              constraint: `This means the survey field contains an input that is ${
                results?.result ? "allowed" : "not allowed"
              } by the constraint formula..`,
            }[columnName]
          }
        </Text>
      )}

      {cellIsEmpty && (
        <Text className={Classes.TEXT_MUTED}>
          {
            {
              calculation:
                answer === undefined || answer === "" ? (
                  <>
                    This survey field has no entered answer yet, and the{" "}
                    <code>{columnName}</code> cell is empty.
                  </>
                ) : (
                  <>
                    This is the answer value entered in the{" "}
                    <code>{nodeName}</code> field.
                  </>
                ),
              required: (
                <>
                  This means users are not required to enter this field. This is
                  the default when the <code>{columnName}</code> cell is empty.
                </>
              ),
              relevant: (
                <>
                  This means the survey field is always shown. This is the
                  default when the <code>{columnName}</code> cell is empty.
                </>
              ),
              readonly: (
                <>
                  This means the survey field is not read-only. This is the
                  default when the <code>{columnName}</code> cell is empty.
                </>
              ),
              constraint: (
                <>
                  If the cell contains a formula that evaluates to{" "}
                  <code>true</code>, the field accepts any input. This is the
                  default when the <code>{columnName}</code> cell is empty.
                </>
              ),
            }[columnName]
          }
        </Text>
      )}
    </StyledPanel>
  );
  return panel;
}
