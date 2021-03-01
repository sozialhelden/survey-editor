import {
  Breadcrumbs,
  Button,
  Callout,
  Classes,
  Code,
  Colors,
  ControlGroup,
  Icon,
  Tab,
  Tabs,
  Text,
} from "@blueprintjs/core";
import { Classes as PopoverClasses, Popover2 } from "@blueprintjs/popover2";
import * as React from "react";
import styled from "styled-components";
import HighlightedExpression from "../components/HighlightedExpression";
import StyledMarkdown from "../components/StyledMarkdown";
import { alpha } from "../lib/colors";
import { ODKSurveyContext } from "../lib/ODKSurveyContext";
import { typesToIcons } from "../lib/typesToIcons";
import { getNodeAbsolutePath } from "../xlsform-simple-schema/functions/odk-formulas/evaluation/XPath";
import {
  evaluatableColumnNames,
  isNodeRelevant,
  ODKNode,
} from "../xlsform-simple-schema/types/ODKNode";

const StyledCodeBlock = styled(Code)`
  overflow: auto;
  word-break: break-all;
  font-size: 20px;
  line-height: 28px;
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

export default function DetailsPopover(props: {
  detailsButtonCaption: React.ReactNode;
  detailsContent?: string | JSX.Element | undefined;
  node: ODKNode;
}) {
  const { node } = props;
  const context = React.useContext(ODKSurveyContext);
  const nodeEvaluationResults = context.context?.evaluationResults.get(node);
  const firstColumnNameWithError =
    nodeEvaluationResults &&
    [...nodeEvaluationResults.keys()].find(
      (k) => nodeEvaluationResults?.get(k)?.error
    );
  const [tabId, setTabId] = React.useState<string | number>(
    firstColumnNameWithError || "calculation"
  );
  if (!context.context) {
    return null;
  }
  const path = getNodeAbsolutePath(node, context.context).slice(1);

  const getPanel = (k: string) => {
    const results = nodeEvaluationResults?.get(k);
    const cellValue = node.row[k];
    const cellIsEmpty = cellValue === undefined;
    const panel = (
      <StyledPanel
        lang="en"
        style={{
          backgroundColor: Colors.LIGHT_GRAY5,
          margin: "-20px",
          padding: "20px",
          background: `linear-gradient(${alpha(
            Colors.DARK_GRAY5,
            0.12
          )}, ${alpha(Colors.DARK_GRAY5, 0.07)} 5px, ${alpha(
            Colors.DARK_GRAY5,
            0.03
          )} 10px, transparent 30px)`,
          borderTop: `solid 1px ${Colors.LIGHT_GRAY3}`,
        }}
      >
        {!cellIsEmpty && (
          <>
            <h4>Formula</h4>
            <StyledCodeBlock>
              <HighlightedExpression
                state={results?.state}
                error={results?.error}
                expression={results?.expression}
                code={String(cellValue)}
                parser={results?.parser}
              />
            </StyledCodeBlock>
            <h4>Result</h4>
          </>
        )}

        {!cellIsEmpty && !results && (
          <Callout intent="none">Not calculated yet.</Callout>
        )}

        {results?.state === "error" && (
          <Callout intent="danger">
            <StyledMarkdown>{results.error.toMarkdown()}</StyledMarkdown>
          </Callout>
        )}

        <StyledCodeBlock>
          {results?.result === undefined
            ? "undefined"
            : JSON.stringify(results.result)}
        </StyledCodeBlock>
        {cellIsEmpty && (
          <Text className={Classes.TEXT_MUTED}>
            {k === "calculation" && (
              <>
                Using the answer value as the <code>{k}</code> cell contains no
                formula.
                {}
              </>
            )}
            {k !== "calculation" && (
              <>
                Using the default value as the <code>{k}</code> cell is empty.
              </>
            )}
          </Text>
        )}
      </StyledPanel>
    );
    return (
      <Tab
        id={k}
        title={
          <>
            {k}
            {results?.state === "error" && " ⚠️"}
          </>
        }
        panel={panel}
      />
    );
  };

  const detailsContent = (
    <>
      <header>
        <Icon icon={typesToIcons[node.type] || "blank"} color={Colors.GRAY3} />
        &nbsp;
        <code className={Classes.TEXT_MUTED}>{node.row.type}</code>
      </header>
      <header style={{ marginBottom: "16px" }}>
        <Breadcrumbs
          items={path.map((k, i) => ({
            href: `#//${path.slice(0, i + 1).join("/")}`,
            text: k,
          }))}
          collapseFrom="start"
          overflowListProps={{
            observeParents: true,
            minVisibleItems: 1,
          }}
        />
      </header>
      <Tabs
        onChange={setTabId}
        selectedTabId={tabId}
        renderActiveTabPanelOnly={true}
      >
        {evaluatableColumnNames.map((k) => getPanel(k))}
      </Tabs>
    </>
  );

  return (
    <Popover2
      interactionKind="click"
      popoverClassName={PopoverClasses.POPOVER2_CONTENT_SIZING}
      minimal={false}
      placement="auto-end"
      rootBoundary="viewport"
      modifiers={{
        arrow: { enabled: true },
        preventOverflow: { enabled: true },
      }}
      content={detailsContent}
      renderTarget={({ isOpen, ref, ...targetProps }) =>
        ref ? (
          <ControlGroup style={{ flex: "none" }}>
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
                !firstColumnNameWithError &&
                !isNodeRelevant(node, context.context)
                  ? Classes.TEXT_MUTED
                  : undefined
              }
            >
              {props.detailsButtonCaption}
            </Button>
          </ControlGroup>
        ) : (
          <div></div>
        )
      }
    />
  );
}
