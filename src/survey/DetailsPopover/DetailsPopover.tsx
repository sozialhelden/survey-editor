import {
  Button,
  Callout,
  Classes,
  Code,
  Colors,
  ControlGroup,
  HTMLDivProps,
  Icon,
  IResizeEntry,
  ResizeSensor,
  Tab,
  Tabs,
  Text,
} from "@blueprintjs/core";
import { Classes as PopoverClasses, Popover2 } from "@blueprintjs/popover2";
import * as React from "react";
import styled from "styled-components";
import HighlightedExpression from "../../components/expression/HighlightedExpression";
import StyledMarkdown from "../../components/StyledMarkdown";
import { alpha } from "../../lib/colors";
import { ODKSurveyContext } from "../../lib/ODKSurveyContext";
import ODKFormulaEvaluationResult from "../../xlsform-simple-schema/functions/odk-formulas/evaluation/ODKFormulaEvaluationResult";
import { getNodeAbsolutePath } from "../../xlsform-simple-schema/functions/odk-formulas/evaluation/XPath";
import { EvaluationError } from "../../xlsform-simple-schema/types/Errors";
import {
  EvaluatableColumnName,
  evaluatableColumnNames,
  isNodeRelevant,
  ODKNode,
} from "../../xlsform-simple-schema/types/ODKNode";
import { useNodeDragAndDrop } from "../useNodeDragAndDrop";
import { FieldConfigurationButton } from "./FieldConfigurationButton";
import { FieldPathBreadcrumbs } from "./FieldPathBreadcrumbs";

const StyledCodeBlock = styled(Code)`
  overflow: auto;
  word-break: break-all;
  font-size: 16px;
  line-height: 20px;
  display: block;
  border: none;
  box-shadow: none;
  background: transparent;
  padding: 0;
`;

const StyledPanel = styled.div`
  display: grid;
  gap: 8px;

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    &:not(:first-child) {
      margin-top: 8px;
    }
  }
`;

const StyledCalloutWithCode = styled(Callout)`
  > code,
  pre {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    color: ${Colors.DARK_GRAY1};
    /* border: 1px solid rgba(0, 0, 0, 0.2); */
    margin: -1px;
    padding: 2px 4px;
    background-color: rgba(255, 255, 255, 0.3);
  }

  pre {
    padding: 0.5em 0.55em;
    margin: 0.5em 0;
    line-height: 1.3em;
    background: white;
    white-space: pre-wrap;
  }

  code {
    font-weight: 600;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
  }
`;

export default function DetailsPopover(props: {
  detailsButtonCaption: React.ReactNode;
  detailsContent?: string | JSX.Element | undefined;
  node: ODKNode;
  controlGroupProps?: HTMLDivProps;
}) {
  const { node } = props;
  const context = React.useContext(ODKSurveyContext);
  const isRelevant = isNodeRelevant(node, context.context);
  const nodeEvaluationResults = context.context?.evaluationResults.get(node);
  const firstColumnNameWithError =
    nodeEvaluationResults &&
    [...nodeEvaluationResults.keys()].find(
      (k) => nodeEvaluationResults?.get(k)?.error
    );

  const [width, setWidth] = React.useState(100);
  const handleResize = React.useCallback(
    (entries: IResizeEntry[]) => {
      // console.log(entries.map(e => `${e.contentRect.width} x ${e.contentRect.height}`));
      setTimeout(() => {
        const newWidth = entries[0]?.contentRect.width;
        if (Math.abs(newWidth - width) > 10) {
          setWidth(newWidth);
        }
      }, 50);
    },
    [width]
  );

  const [isDraggedOver, setIsDraggedOver] = React.useState(false);
  const dragProps = useNodeDragAndDrop({
    context: context.context,
    node,
    setIsDraggedOver,
  });

  const [tabId, setTabId] = React.useState<string | number>(
    firstColumnNameWithError || "calculation"
  );

  if (!context.context) {
    return null;
  }

  const path = getNodeAbsolutePath(node, context.context).slice(1);

  const detailsContent = (
    <ControlGroup vertical={true}>
      <ControlGroup>
        <FieldConfigurationButton node={node} />
      </ControlGroup>

      <ResizeSensor onResize={handleResize} observeParents={true}>
        <ControlGroup style={{ margin: "8px 0 8px", width: "100%" }}>
          <FieldPathBreadcrumbs {...{ path, width }} />
        </ControlGroup>
      </ResizeSensor>

      <Tabs
        onChange={setTabId}
        selectedTabId={tabId}
        renderActiveTabPanelOnly={false}
      >
        {evaluatableColumnNames.map((columnName) =>
          getTabPanel({
            columnName: columnName,
            node: node,
            nodeEvaluationResults: nodeEvaluationResults,
          })
        )}
      </Tabs>
    </ControlGroup>
  );

  return (
    <Popover2
      interactionKind="click"
      popoverClassName={PopoverClasses.POPOVER2_CONTENT_SIZING}
      minimal={false}
      placement="auto-end"
      rootBoundary="viewport"
      onOpening={() => setWidth(0)}
      modifiers={{
        arrow: { enabled: true },
        preventOverflow: { enabled: true },
      }}
      content={detailsContent}
      fill={true}
      renderTarget={({ isOpen, ref, ...targetProps }) =>
        ref ? (
          <ControlGroup
            style={{
              flex: "none",
              borderTop: isDraggedOver ? `5px solid ${Colors.BLUE3}` : "none",
            }}
            {...dragProps}
          >
            <Button
              {...targetProps}
              elementRef={ref}
              minimal={true}
              // outlined={true}
              small={true}
              lang="en"
              intent={firstColumnNameWithError ? "danger" : "none"}
              icon={firstColumnNameWithError ? "error" : undefined}
              className={
                !firstColumnNameWithError && !isRelevant
                  ? Classes.TEXT_MUTED
                  : undefined
              }
            >
              <ControlGroup>
                {props.detailsButtonCaption}&nbsp;
                {!isRelevant && (
                  <Icon icon="eye-off" style={{ opacity: 0.5 }} />
                )}
              </ControlGroup>
            </Button>
          </ControlGroup>
        ) : (
          <div></div>
        )
      }
    />
  );
}

function getTabPanel({
  nodeEvaluationResults,
  node,
  columnName,
}: {
  nodeEvaluationResults: Map<string, ODKFormulaEvaluationResult> | undefined;
  node: ODKNode;
  columnName: EvaluatableColumnName;
}) {
  const results = nodeEvaluationResults?.get(columnName);
  const cellValue = node.row[columnName];
  const cellIsEmpty = cellValue === undefined;
  const isLiteral = results?.expression?.kind === "literal";
  const isName = results?.expression?.kind === "name";
  const panel = (
    <StyledPanel
      lang="en"
      style={{
        backgroundColor: Colors.LIGHT_GRAY5,
        margin: "-20px",
        padding: "20px",
        background: `linear-gradient(${alpha(Colors.DARK_GRAY5, 0.12)}, ${alpha(
          Colors.DARK_GRAY5,
          0.07
        )} 5px, ${alpha(Colors.DARK_GRAY5, 0.03)} 10px, transparent 30px)`,
        borderTop: `solid 1px ${Colors.LIGHT_GRAY3}`,
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
              calculation: (
                <>
                  Using the answer value as the <code>{columnName}</code> cell
                  contains no formula.
                </>
              ),
              required: `This means the survey field is ${
                results?.result ? "required" : "optional"
              }`,
              relevant: `This means the survey field is ${
                results?.result ? "shown" : "hidden"
              }.`,
              readonly: `This means the survey field is ${
                results?.result ? "read-only" : "editable"
              }.`,
            }[columnName]
          }
        </Text>
      )}
      {cellIsEmpty && (
        <Text className={Classes.TEXT_MUTED}>
          {
            {
              calculation: (
                <>
                  Using the answer value as the <code>{columnName}</code> cell
                  contains no formula.
                </>
              ),
              required: (
                <>
                  Users are not required to enter this field. This is the
                  default when the <code>{columnName}</code> cell is empty.
                </>
              ),
              relevant: (
                <>
                  The field is always shown. This is the default when the{" "}
                  <code>{columnName}</code> cell is empty.
                </>
              ),
              readonly: (
                <>
                  The field is not read-only. This is the default when the{" "}
                  <code>{columnName}</code> cell is empty.
                </>
              ),
            }[columnName]
          }
        </Text>
      )}
    </StyledPanel>
  );

  return (
    <Tab
      id={columnName}
      panel={panel}
      title={
        <>
          {columnName}
          {results?.state === "error" && (
            <>
              &nbsp;
              <Icon icon="warning-sign" intent="warning" />
            </>
          )}
        </>
      }
    />
  );
}
