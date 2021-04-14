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
import { useDarkMode } from "../../../components/core/DarkModeContainer";
import { alpha } from "../../../lib/colors";
import { ODKNodeContext } from "../../../lib/ODKNodeContext";
import { ODKSurveyContext } from "../../../lib/ODKSurveyContext";
import { fieldTypesToIcons } from "../../../xlsform-simple-schema/field-types/fieldTypesToIcons";
import { internalFieldTypes } from "../../../xlsform-simple-schema/field-types/internalFieldTypes";
import findOrReplaceFieldReferences, {
  NodeDependency,
} from "../../../xlsform-simple-schema/functions/editing/findOrReplaceFieldReferences";
import { getFirstColumnNameWithError } from "../../../xlsform-simple-schema/functions/getFirstColumnNameWithError";
import ODKFormulaEvaluationResult from "../../../xlsform-simple-schema/functions/odk-formulas/evaluation/ODKFormulaEvaluationResult";
import { getNodeAbsolutePath } from "../../../xlsform-simple-schema/functions/odk-formulas/evaluation/XPath";
import {
  EvaluatableColumnName,
  evaluatableColumnNames,
  isNodeRelevant,
  ODKNode,
} from "../../../xlsform-simple-schema/types/ODKNode";
import { useNodeDragAndDrop } from "../useNodeDragAndDrop";
import { ExpressionPanel } from "./ExpressionPanel";
import { FieldPathBreadcrumbs } from "./FieldPathBreadcrumbs";
import { FieldTypeButtonGroup } from "./FieldTypeButtonGroup";
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
    color: inherit;
    margin: -1px;
    padding: 2px 4px;
    background-color: rgba(255, 255, 255, 0.3);
    @media (prefers-color-scheme: dark) {
      background-color: rgba(0, 0, 0, 0.1);
    }
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
  style,
}: {
  detailsButtonCaption?: React.ReactNode;
  hasTypeIcon?: boolean;
  style?: React.CSSProperties;
}) {
  const context = React.useContext(ODKSurveyContext);
  const { node, nodeEvaluationResults } = React.useContext(ODKNodeContext);
  const isInternalFieldType = internalFieldTypes.includes(node.type);
  const isVisible =
    !isInternalFieldType && isNodeRelevant(node, context.evaluationContext);
  const hasMissingParameters =
    node.type.match(/^select/) && node.typeParameters.length === 0;
  const firstColumnNameWithError = getFirstColumnNameWithError(
    nodeEvaluationResults
  );
  const hasError = !!firstColumnNameWithError;
  const [isDraggedOver, setIsDraggedOver] = React.useState(false);
  const dragProps = useNodeDragAndDrop({
    evaluationContext: context.evaluationContext,
    node,
    setIsDraggedOver,
  });

  const isDarkMode = useDarkMode();
  const violetColor = isDarkMode ? Colors.VIOLET5 : Colors.VIOLET3;

  return (
    <ControlGroup
      style={{
        display: "inline-flex",
        flex: "none",
        position: "relative",
        overflow: "visible",
        ...style,
      }}
      {...dragProps}
    >
      {isDraggedOver && <DragStripe />}
      <Button
        minimal={true}
        small={true}
        lang="en"
        intent={
          hasError ? "danger" : hasMissingParameters ? "warning" : undefined
        }
        rightIcon={hasError ? "error" : undefined}
        icon={
          hasTypeIcon ? (
            <Icon
              icon={fieldTypesToIcons[node.type]}
              color={hasError || hasMissingParameters ? undefined : violetColor}
            />
          ) : undefined
        }
        style={{
          color: hasError || hasMissingParameters ? undefined : violetColor,
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
              <Icon
                icon="eye-off"
                style={{ opacity: 0.5, color: "inherit" }}
                title="Invisible"
                htmlTitle="Invisible"
              />
            </>
          )}
        </ControlGroup>
      </Button>
    </ControlGroup>
  );
}

export default function FieldPopoverButton(props: {
  detailsButtonCaption?: React.ReactNode;
  detailsContent?: string | JSX.Element | undefined;
  node: ODKNode;
  controlGroupProps?: HTMLDivProps;
  showJumpButton?: boolean;
  editable: boolean;
  nameOfOnlyShownTab?: EvaluatableColumnName;
  hasTypeIcon?: boolean;
  buttonStyle?: React.CSSProperties;
}) {
  const {
    node,
    editable,
    nameOfOnlyShownTab,
    detailsButtonCaption,
    hasTypeIcon,
  } = props;
  const context = React.useContext(ODKSurveyContext);
  const nodeEvaluationResults = context.evaluationContext?.evaluationResults.get(
    node
  );
  const firstColumnNameWithError = getFirstColumnNameWithError(
    nodeEvaluationResults
  );
  const { row } = node;
  const isInternalField = internalFieldTypes.includes(node.type);
  const columnNames = isInternalField
    ? without(evaluatableColumnNames, "relevant", "readonly")
    : evaluatableColumnNames;
  const firstColumnNameWithContent = columnNames.find((n) => {
    const value = row[n];
    return typeof value === "string" && value.length > 0;
  });
  const isDarkMode = useDarkMode();

  const [width, setWidth] = React.useState(100);
  const handleResize = React.useCallback(
    (entries: IResizeEntry[]) => {
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
  if (!context.evaluationContext) {
    return null;
  }

  const path = getNodeAbsolutePath(node, context.evaluationContext).slice(1);

  const referencesButton = ReferencesButton({ references, editable });

  const editHeader = (
    <ControlGroup
      style={{
        margin: "-20px",
        marginBottom: "24px",
        backgroundColor: Colors.LIGHT_GRAY5,
        // padding: "20px",
        background: `linear-gradient(
          ${alpha(Colors.BLUE3, 0.0)} 0px,
          ${alpha(Colors.BLUE3, 0.05)} 22px,
          ${alpha(Colors.BLUE3, 0.06)} 32px)`,
        borderBottom: `solid 1px ${
          isDarkMode ? Colors.DARK_GRAY2 : Colors.LIGHT_GRAY3
        }`,
        gap: "8px",
      }}
    >
      <FieldTypeButtonGroup node={node} showType={true} />

      <div className={Classes.FLEX_EXPANDER} />

      {referencesButton}

      <ButtonGroup fill={false}>
        <Popover2
          content={<Menu>{nodeActionMenuItems}</Menu>}
          lazy={true}
          placement="right-start"
        >
          <Button icon={"more"} minimal={true} text="Actions" />
        </Popover2>
      </ButtonGroup>
    </ControlGroup>
  );

  const detailsContent = (
    <ControlGroup vertical={true}>
      {editHeader}

      <ResizeSensor onResize={handleResize} observeParents={true}>
        <ControlGroup style={{ width: "100%", margin: "-12px 8px 8px 0px" }}>
          <FieldPathBreadcrumbs {...{ path, width }} />
        </ControlGroup>
      </ResizeSensor>

      {nameOfOnlyShownTab ? (
        <ExpressionPanel
          {...{
            node,
            columnName: nameOfOnlyShownTab,
            nodeEvaluationResult: nodeEvaluationResults?.get(
              nameOfOnlyShownTab
            ),
          }}
          style={{ margin: "0 -20px -20px -20px" }}
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
        placement="top"
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
        <RenderTarget
          {...{ detailsButtonCaption, hasTypeIcon, style: props.buttonStyle }}
        />
      </Popover2>
    </ODKNodeContext.Provider>
  );
}

function ReferencesButton({
  references,
  editable,
}: {
  references: NodeDependency[] | undefined;
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
  const nodeEvaluationResult = nodeEvaluationResults?.get(columnName);
  const panel = (
    <ExpressionPanel
      {...{ node, columnName, nodeEvaluationResult }}
      style={{ margin: "-20px" }}
    />
  );

  return (
    <Tab
      id={columnName}
      key={columnName}
      panel={panel}
      title={
        <>
          {columnName}
          {nodeEvaluationResult?.state === "error" && (
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
