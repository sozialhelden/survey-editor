import * as React from "react";
import { Popover2, Classes as PopoverClasses } from "@blueprintjs/popover2";
import { Button, Code, ControlGroup, Pre, Tab, Tabs } from "@blueprintjs/core";
import { ODKNode } from "../xlsform-simple-schema/types/ODKNode";
import { getNodeAbsolutePath } from "../xlsform-simple-schema/functions/odk-formulas/evaluation/XPath";

export default function DetailsPopover(props: {
  detailsButtonCaption: React.ReactNode;
  detailsContent?: string | JSX.Element | undefined;
  node: ODKNode;
}) {
  const { node } = props;
  const { row, answer } = node;
  const path = getNodeAbsolutePath(node).join("/");
  const rowPanel = (
    <pre style={{ overflow: "auto" }}>
      {JSON.stringify({ row, answer }, null, 2)}
    </pre>
  );

  const getPanel = (k: string) => {
    const results = node.evaluatedResults[k];
    const panel = (
      <>
        <Pre style={{ overflow: "auto", whiteSpace: "normal" }}>
          {node.row[k]}
        </Pre>
        <Pre style={{ overflow: "auto" }}>
          {JSON.stringify(
            {
              state: results.state,
              error: results.error?.toMarkdown(),
              result: results.result,
              expression: results.expression,
            },
            null,
            2
          )}
        </Pre>
      </>
    );
    return <Tab id={k} title={<Code>{k}</Code>} panel={panel} />;
  };

  const [tabId, setTabId] = React.useState<string | number>("row");

  const detailsContent = (
    <div lang="en">
      <header>
        <code>{path}</code>
      </header>

      <Tabs onChange={setTabId} selectedTabId={tabId}>
        <Tab id="row" title="Row" panel={rowPanel} />
        <Tabs.Expander />
        {Object.keys(node.evaluatedResults).map((k) => getPanel(k))}
      </Tabs>
    </div>
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
              small={true}
              lang="en"
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
