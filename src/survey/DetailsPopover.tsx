import * as React from "react";
import { Popover2, Classes as PopoverClasses } from "@blueprintjs/popover2";
import { Button, Code, ControlGroup } from "@blueprintjs/core";
import { FieldProps } from "./FieldProps";
import { ODKSurveyContext } from "./XLSFormSurvey";

export default function DetailsPopover(
  props: FieldProps & {
    detailsButtonCaption: React.ReactNode;
  }
) {
  const { schema, schemaKey, node } = props;
  const label = schema.get(schemaKey, "label");
  const context = React.useContext(ODKSurveyContext);
  const definition = schema.getDefinition(
    schemaKey,
    undefined,
    context.context
  );
  const { quickType } = props;
  const { row, answer } = node;
  const detailsContent = (
    <div lang="en">
      <header>
        <Code>{schemaKey}</Code>
      </header>
      <pre style={{ overflow: "auto" }}>
        {JSON.stringify({ row, answer, quickType, label, definition }, null, 2)}
      </pre>
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
              outlined={true}
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
