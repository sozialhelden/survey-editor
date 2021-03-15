import {
  Button,
  ButtonGroup,
  Callout,
  Classes,
  Code,
  Colors,
  ControlGroup,
  HTMLDivProps,
  Icon,
  IResizeEntry,
  Menu,
  ResizeSensor,
  Tab,
  Tabs,
} from "@blueprintjs/core";
import { Classes as PopoverClasses, Popover2 } from "@blueprintjs/popover2";
import { without } from "lodash";
import * as React from "react";
import styled from "styled-components";
import { alpha } from "../../lib/colors";
import findOrReplaceFieldReferences, {
  DependentNodeWithReplacedRow,
} from "../../lib/findOrReplaceFieldReferences";
import { getFirstColumnNameWithError } from "../../lib/getFirstColumnNameWithError";
import { ODKNodeContext } from "../../lib/ODKNodeContext";
import { ODKSurveyContext } from "../../lib/ODKSurveyContext";
import { typesToIcons } from "../../lib/typesToIcons";
import ODKFormulaEvaluationResult from "../../xlsform-simple-schema/functions/odk-formulas/evaluation/ODKFormulaEvaluationResult";
import { getNodeAbsolutePath } from "../../xlsform-simple-schema/functions/odk-formulas/evaluation/XPath";
import {
  EvaluatableColumnName,
  evaluatableColumnNames,
  isNodeRelevant,
  ODKNode,
} from "../../xlsform-simple-schema/types/ODKNode";
import { internalFields } from "../internalFields";
import { useNodeDragAndDrop } from "../useNodeDragAndDrop";
import { ExpressionPanel } from "./ExpressionPanel";
import { FieldConfigurationButton } from "./FieldConfigurationButton";
import { FieldPathBreadcrumbs } from "./FieldPathBreadcrumbs";
import { useNodeActionMenuItems } from "./NodeActionMenuItems";
import { NodeReferencesMenu } from "./NodeReferencesMenu";

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

const DragStripe = styled.div`
  position: absolute;
  top: 0px;
  left: -20px;
  width: calc(100% + 40px);
  height: 5px;
  background-color: ${Colors.BLUE3};
  z-index: 10000000;
`;

function RenderTarget({
  detailsButtonCaption,
  hasTypeIcon,
}: {
  detailsButtonCaption?: React.ReactNode;
  hasTypeIcon?: boolean;
}) {
  const context = React.useContext(ODKSurveyContext);
  const { node, nodeEvaluationResults } = React.useContext(ODKNodeContext);
  const isInternalFieldType = internalFields.includes(node.type);
  const isVisible =
    !isInternalFieldType && isNodeRelevant(node, context.context);
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

  return (
    <ControlGroup
      style={{
        display: "inline-flex",
        flex: "none",
        position: "relative",
        overflow: "visible",
      }}
      {...dragProps}
    >
      {isDraggedOver && <DragStripe />}
      <Button
        // elementRef={ref}
        minimal={true}
        // outlined={true}
        small={true}
        lang="en"
        intent={hasError ? "danger" : hasMissingParameters ? "warning" : "none"}
        rightIcon={hasError ? "error" : undefined}
        icon={hasTypeIcon ? typesToIcons[node.type] : undefined}
        style={{
          color: hasError || hasMissingParameters ? undefined : "inherit",
          fontSize: "inherit",
          padding: 0,
        }}
        className={[!hasError && !isVisible && Classes.TEXT_MUTED]
          .filter(Boolean)
          .join(" ")}
      >
        <ControlGroup>
          {detailsButtonCaption || (
            <code style={{ color: "inherit" }}>{node.row.name}</code>
          )}
          {!isVisible && (
            <>
              &nbsp;
              <Icon icon="eye-off" style={{ opacity: 0.5, color: "inherit" }} />
            </>
          )}
        </ControlGroup>
      </Button>
    </ControlGroup>
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
  hasTypeIcon?: boolean;
}) {
  const {
    node,
    editable,
    nameOfOnlyShownTab,
    detailsButtonCaption,
    hasTypeIcon,
  } = props;
  const context = React.useContext(ODKSurveyContext);
  const nodeEvaluationResults = context.context?.evaluationResults.get(node);
  const firstColumnNameWithError = getFirstColumnNameWithError(
    nodeEvaluationResults
  );
  const { row } = node;
  const isInternalField = internalFields.includes(node.type);
  const columnNames = isInternalField
    ? without(evaluatableColumnNames, "relevant", "readonly")
    : evaluatableColumnNames;
  const firstColumnNameWithContent = columnNames.find((n) => {
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

  const references = React.useMemo(
    () =>
      context?.xlsForm && findOrReplaceFieldReferences(context.xlsForm, node),
    [context, node]
  );

  const { nodeActionMenuItems, nodeActionDialogs } = useNodeActionMenuItems(
    node
  );
  if (!context.context) {
    return null;
  }

  const path = getNodeAbsolutePath(node, context.context).slice(1);

  const referencesButton = ReferencesButton({ references, editable });

  const editHeader = (
    <ControlGroup
      style={{
        margin: "-20px",
        marginBottom: "12px",
        backgroundColor: Colors.LIGHT_GRAY5,
        // padding: "20px",
        background: `linear-gradient(
          ${alpha(Colors.BLUE3, 0.0)} 0px,
          ${alpha(Colors.BLUE3, 0.05)} 22px,
          ${alpha(Colors.BLUE3, 0.06)} 32px)`,
        borderBottom: `solid 1px ${Colors.LIGHT_GRAY3}`,
        gap: "8px",
      }}
    >
      <FieldConfigurationButton node={node} showType={true} />

      <div className={Classes.FLEX_EXPANDER} />

      {referencesButton}

      <ButtonGroup fill={false}>
        <Popover2 content={<Menu>{nodeActionMenuItems}</Menu>} lazy={true}>
          <Button icon={"more"} minimal={true} title="Actions" />
        </Popover2>
      </ButtonGroup>
    </ControlGroup>
  );

  const detailsContent = (
    <ControlGroup vertical={true}>
      {editable && editHeader}

      <ResizeSensor onResize={handleResize} observeParents={true}>
        <ControlGroup style={{ width: "100%", marginBottom: "8px" }}>
          <FieldPathBreadcrumbs {...{ path, width }} />
        </ControlGroup>
      </ResizeSensor>

      {nameOfOnlyShownTab ? (
        <ExpressionPanel
          {...{ node, columnName: nameOfOnlyShownTab, nodeEvaluationResults }}
          style={{ margin: "0 -20px 0 -20px" }}
        />
      ) : (
        <Tabs
          onChange={setTabId}
          selectedTabId={tabId}
          renderActiveTabPanelOnly={false}
        >
          {columnNames.map((columnName) =>
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
      {nodeActionDialogs}
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
        fill={false}
        targetTagName="span"
      >
        <RenderTarget {...{ detailsButtonCaption, hasTypeIcon }} />
      </Popover2>
    </ODKNodeContext.Provider>
  );
}

function ReferencesButton({
  references,
  editable,
}: {
  references: DependentNodeWithReplacedRow[] | undefined;
  editable: boolean;
}) {
  const referencesButtonTitle =
    references &&
    (references.length === 1
      ? "One dependency"
      : `${references.length} dependencies`);
  const referencesButton = editable && references && references.length > 0 && (
    <Popover2
      content={<NodeReferencesMenu references={references} />}
      lazy={true}
    >
      <Button
        icon="link"
        // rightIcon={"caret-down"}
        fill={false}
        minimal={true}
        title={referencesButtonTitle}
        aria-label={referencesButtonTitle}
      >
        {references.length}
      </Button>
    </Popover2>
  );
  return referencesButton;
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
