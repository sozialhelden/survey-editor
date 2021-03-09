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
} from "@blueprintjs/core";
import {
  Classes as PopoverClasses,
  IPopover2TargetProps,
  Popover2,
} from "@blueprintjs/popover2";
import * as React from "react";
import styled from "styled-components";
import { getFirstColumnNameWithError } from "../../lib/getFirstColumnNameWithError";
import { ODKNodeContext } from "../../lib/ODKNodeContext";
import { ODKSurveyContext } from "../../lib/ODKSurveyContext";
import ODKFormulaEvaluationResult from "../../xlsform-simple-schema/functions/odk-formulas/evaluation/ODKFormulaEvaluationResult";
import { getNodeAbsolutePath } from "../../xlsform-simple-schema/functions/odk-formulas/evaluation/XPath";
import {
  EvaluatableColumnName,
  evaluatableColumnNames,
  isNodeRelevant,
  ODKNode,
} from "../../xlsform-simple-schema/types/ODKNode";
import { useNodeDragAndDrop } from "../useNodeDragAndDrop";
import { ExpressionPanel } from "./ExpressionPanel";
import { FieldConfigurationButton } from "./FieldConfigurationButton";
import { FieldPathBreadcrumbs } from "./FieldPathBreadcrumbs";

export const StyledCodeBlock = styled(Code)`
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

export const StyledPanel = styled.div`
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

export const StyledCalloutWithCode = styled(Callout)`
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

function RenderTarget({
  isOpen,
  ref,
  detailsButtonCaption,
  ...targetProps
}: IPopover2TargetProps & { detailsButtonCaption: React.ReactNode }) {
  const context = React.useContext(ODKSurveyContext);
  const { node, nodeEvaluationResults } = React.useContext(ODKNodeContext);
  const isRelevant = isNodeRelevant(node, context.context);
  const hasMissingParameters =
    node.type.match(/^select/) && node.typeParameters.length === 0;
  const firstColumnNameWithError = getFirstColumnNameWithError(
    nodeEvaluationResults
  );
  const hasError = !!firstColumnNameWithError;
  const [isDraggedOver, setIsDraggedOver] = React.useState(false);
  const dragProps = useNodeDragAndDrop({
    context: context.context,
    node,
    setIsDraggedOver,
  });

  return ref ? (
    <ControlGroup
      style={{
        display: "inline-flex",
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
        intent={hasError ? "danger" : hasMissingParameters ? "warning" : "none"}
        icon={hasError ? "error" : undefined}
        style={{
          color: hasError || hasMissingParameters ? undefined : "inherit",
          fontSize: "inherit",
          padding: 0,
        }}
        className={[!hasError && !isRelevant && Classes.TEXT_MUTED]
          .filter(Boolean)
          .join(" ")}
      >
        <ControlGroup>
          {detailsButtonCaption || (
            <code style={{ color: "inherit" }}>{node.row.name}</code>
          )}
          {!isRelevant && (
            <>
              &nbsp;
              <Icon icon="eye-off" style={{ opacity: 0.5, color: "inherit" }} />
            </>
          )}
        </ControlGroup>
      </Button>
    </ControlGroup>
  ) : (
    <div></div>
  );
}

export default function DetailsPopover(props: {
  detailsButtonCaption?: React.ReactNode;
  detailsContent?: string | JSX.Element | undefined;
  node: ODKNode;
  controlGroupProps?: HTMLDivProps;
  showJumpButton?: boolean;
  editable: boolean;
  nameOfOnlyShownTab?: EvaluatableColumnName;
}) {
  const { node, editable, nameOfOnlyShownTab } = props;
  const context = React.useContext(ODKSurveyContext);
  const nodeEvaluationResults = context.context?.evaluationResults.get(node);
  const firstColumnNameWithError = getFirstColumnNameWithError(
    nodeEvaluationResults
  );
  const { row } = node;
  const firstColumnNameWithContent = evaluatableColumnNames.find((n) => {
    const value = row[n];
    return typeof value === "string" && value.length > 0;
  });

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

  const [tabId, setTabId] = React.useState<string | number>(
    firstColumnNameWithError || firstColumnNameWithContent || "calculation"
  );

  if (!context.context) {
    return null;
  }

  const path = getNodeAbsolutePath(node, context.context).slice(1);

  const detailsContent = (
    <ControlGroup vertical={true} style={{ gap: "8px" }}>
      {editable && (
        <ControlGroup>
          <FieldConfigurationButton node={node} showType={true} />
          <div className={Classes.FLEX_EXPANDER} />
        </ControlGroup>
      )}

      <ResizeSensor onResize={handleResize} observeParents={true}>
        <ControlGroup style={{ width: "100%" }}>
          <FieldPathBreadcrumbs {...{ path, width }} />
        </ControlGroup>
      </ResizeSensor>

      {nameOfOnlyShownTab ? (
        <ExpressionPanel
          {...{ node, columnName: nameOfOnlyShownTab, nodeEvaluationResults }}
          style={{ margin: "0 -20px -20px -20px" }}
        />
      ) : (
        <Tabs
          onChange={setTabId}
          selectedTabId={tabId}
          renderActiveTabPanelOnly={false}
        >
          {evaluatableColumnNames.map((columnName) =>
            getTab({
              node,
              nodeEvaluationResults,
              columnName: columnName,
            })
          )}
        </Tabs>
      )}
    </ControlGroup>
  );

  return (
    <ODKNodeContext.Provider value={{ node, nodeEvaluationResults }}>
      <Popover2
        lazy={true}
        interactionKind="click"
        popoverClassName={PopoverClasses.POPOVER2_CONTENT_SIZING}
        minimal={false}
        placement="bottom"
        rootBoundary="viewport"
        onOpening={() => setWidth(0)}
        modifiers={{
          arrow: { enabled: true },
          preventOverflow: { enabled: true },
        }}
        content={detailsContent}
        fill={true}
        renderTarget={RenderTarget}
      />
    </ODKNodeContext.Provider>
  );
}

function getTab({
  nodeEvaluationResults,
  node,
  columnName,
}: {
  nodeEvaluationResults: Map<string, ODKFormulaEvaluationResult> | undefined;
  node: ODKNode;
  columnName: EvaluatableColumnName;
}) {
  const results = nodeEvaluationResults?.get(columnName);
  const panel = (
    <ExpressionPanel
      {...{ node, columnName, nodeEvaluationResults }}
      style={{ margin: "-20px" }}
    />
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
