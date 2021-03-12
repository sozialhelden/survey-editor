import {
  Callout,
  Classes,
  Code,
  Colors,
  H4,
  Menu,
  MenuDivider,
  MenuItem,
} from "@blueprintjs/core";
import { ContextMenu2, Popover2 } from "@blueprintjs/popover2";
import * as React from "react";
import styled from "styled-components";
import { alpha } from "../lib/colors";
import { ODKSurveyContext } from "../lib/ODKSurveyContext";
import useNodeDeletionDialog from "../lib/useNodeDeletionDialog";
import useRenameNodeDialog from "../lib/useRenameNodeDialog";
import { findNodeByPathRelativeToScope } from "../xlsform-simple-schema/functions/odk-formulas/evaluation/XPath";
import AddFieldOrGroupMenuItem from "./AddFieldMenuItem";
import NodeActionMenuItems from "./DetailsPopover/NodeActionMenuItems";
import { FieldProps } from "./FieldProps";
import ObjectArrayField from "./fields/ObjectArrayField";
import ObjectField from "./fields/ObjectField";
import ValueField from "./fields/ValueField";

const Stripe = styled.div`
  &:after {
    content: "";
    position: absolute;
    left: 0px;
    width: 1px;
    bottom: 0;
    top: 0;
    background-color: transparent;
  }
`;

const CornerButton = styled.div`
  position: absolute;
  left: 0px;
  height: 44px;
  width: 44px;
  background-color: transparent;
  cursor: pointer;
`;

const TopCornerButton = styled(CornerButton)`
  top: 0;
  &:hover {
    background: linear-gradient(
      135deg,
      ${alpha(Colors.BLUE3, 0.1)},
      ${alpha(Colors.BLUE3, 0.0)} 50%
    );
  }
`;

const BottomCornerButton = styled(CornerButton)`
  bottom: 0;
  &:hover {
    background: linear-gradient(
      45deg,
      ${alpha(Colors.BLUE3, 0.1)},
      ${alpha(Colors.BLUE3, 0.0)} 50%
    );
  }
`;

const Hoverable = styled.div`
  padding: 16px 16px 8px;
  margin: 0;
  position: relative;

  &:not(:hover):not(:focus-within) {
    ${Stripe} {
      background: none;
    }
  }
  &:hover,
  :focus-within {
    background: ${alpha(Colors.BLUE3, 0.03)};

    ${Stripe} {
      &:after {
        background: ${alpha(Colors.BLUE3, 0.1)};
      }
    }
  }
`;

export function FieldSetForKey(props: {
  schemaKey: string;
  relevant?: boolean;
  readonly?: boolean;
}) {
  const { schemaKey } = props;
  const {
    schema,
    context,
    debug,
    onNestNode,
    onUngroupNode,
  } = React.useContext(ODKSurveyContext);
  const { alert, showRemoveConfirmationDialog } = useNodeDeletionDialog();
  const { dialog: renameDialog, showRenameDialog } = useRenameNodeDialog();
  if (!context || !schema) {
    return null;
  }
  const quickType = schema.getQuickTypeForKey(schemaKey);
  const schemaKeyPath = [".", ...schemaKey.replace(/\.\$/g, "").split(".")];

  const node = findNodeByPathRelativeToScope(
    schemaKeyPath,
    context,
    context.survey
  );

  if (node instanceof Array) {
    if (!debug) {
      return null;
    }
    return (
      <Callout intent="warning">
        <H4>
          Found multiple nodes with path <Code>{schemaKeyPath.join("/")}</Code>.
          This should not happen.
        </H4>
        {/* <p></p> */}
      </Callout>
    );
  }
  if (!node) {
    if (!debug) {
      return null;
    }
    return (
      <Callout intent="warning">
        <H4>
          No node found for{" "}
          <Code>{schemaKeyPath[schemaKeyPath.length - 1]}</Code>
        </H4>
        {/* <p></p> */}
      </Callout>
    );
  }

  let relevant = props.relevant;
  if (typeof relevant !== "boolean" || relevant === true) {
    const evaluationResult = context.evaluationResults
      .get(node)
      ?.get("relevant");

    if (typeof evaluationResult?.result === "boolean") {
      relevant = evaluationResult.result;
    } else if (evaluationResult?.result === null) {
      relevant = false;
    } else {
      relevant = true;
    }
  }

  let readonly = false;
  if (typeof props.readonly !== "undefined" || props.readonly === true) {
    const evaluationResult = context.evaluationResults
      .get(node)
      ?.get("readonly");
    readonly =
      typeof evaluationResult?.result === "boolean"
        ? evaluationResult.result
        : props.readonly;
  }
  // TODO: Add warning for evaluation failure

  const fieldProps: FieldProps = {
    schema,
    node,
    schemaKey,
    quickType,
    relevant,
    readonly,
  };

  if (!debug && !relevant) {
    return null;
  }

  let field;
  switch (quickType) {
    case "object":
      field = <ObjectField {...fieldProps} />;
      break;
    case "objectArray":
      field = <ObjectArrayField {...fieldProps} />;
      break;
    default:
      field = <ValueField {...fieldProps} />;
      break;
  }

  if (debug && node !== context.survey) {
    const nodeActionMenuItems = (
      <NodeActionMenuItems
        node={node}
        onRemove={showRemoveConfirmationDialog}
        onRename={showRenameDialog}
        onNestField={onNestNode}
        onUngroupField={onUngroupNode}
      />
    );
    const nodeActionMenu = <Menu>{nodeActionMenuItems}</Menu>;
    return (
      <>
        {alert}
        {renameDialog}
        <ContextMenu2 content={nodeActionMenu}>
          <Hoverable>
            <Stripe />

            <Popover2
              content={
                <ul className={Classes.LIST_UNSTYLED}>
                  <AddFieldOrGroupMenuItem
                    icon="arrow-up"
                    node={node}
                    position="before"
                    group={false}
                  />
                  <AddFieldOrGroupMenuItem
                    icon="arrow-up"
                    node={node}
                    position="before"
                    group={true}
                  />
                  <MenuDivider />
                  <MenuItem text="Actions" icon="more">
                    {nodeActionMenuItems}
                  </MenuItem>
                </ul>
              }
              lazy={true}
              interactionKind="click"
              placement="left"
              renderTarget={({ isOpen, ref, ...targetProps }) => (
                <TopCornerButton {...targetProps} ref={ref} />
              )}
              hoverOpenDelay={0}
              hoverCloseDelay={0}
            />

            <Popover2
              content={
                <ul className={Classes.LIST_UNSTYLED}>
                  <MenuItem text="Actions" icon="more">
                    {nodeActionMenuItems}
                  </MenuItem>
                  <MenuDivider />
                  <AddFieldOrGroupMenuItem
                    icon="arrow-down"
                    node={node}
                    position="after"
                    group={false}
                  />
                  <AddFieldOrGroupMenuItem
                    icon="arrow-down"
                    node={node}
                    position="after"
                    group={true}
                  />
                </ul>
              }
              lazy={true}
              interactionKind="click"
              placement="left"
              renderTarget={({ isOpen, ref, ...targetProps }) => (
                <BottomCornerButton {...targetProps} ref={ref} />
              )}
              hoverOpenDelay={0}
              hoverCloseDelay={0}
            />

            {field}
          </Hoverable>
        </ContextMenu2>
      </>
    );
  }

  return field;
}
