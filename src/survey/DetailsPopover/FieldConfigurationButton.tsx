import {
  Boundary,
  Button,
  ButtonGroup,
  Classes,
  Code,
  Icon,
  OverflowList,
  Text,
} from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import * as React from "react";
import { ODKSurveyContext } from "../../lib/ODKSurveyContext";
import { fieldTypeNames, typesToIcons } from "../../lib/typesToIcons";
import { ODKNode } from "../../xlsform-simple-schema/types/ODKNode";
import { ChoiceListMenu } from "./ChoiceListMenu";
import { FieldTypeMenu } from "./FieldTypeMenu";
import { NoChoicesState } from "./NoChoicesState";

export function FieldConfigurationButton({
  node,
  showType,
}: {
  node: ODKNode;
  showType: boolean;
}) {
  const isGroup = ["begin_group", "repeat_group"].includes(node.type);
  const context = React.useContext(ODKSurveyContext);
  const { xlsForm } = context;
  const surveyHasChoiceLists =
    !!xlsForm && Object.keys(xlsForm?.choicesByName).length > 0;
  const choiceListMenu = xlsForm && (
    <ChoiceListMenu xlsForm={xlsForm} node={node} />
  );
  const noChoicesAvailable = NoChoicesState();
  const typeName = fieldTypeNames[node.type];
  const icon = typesToIcons[node.type];
  const hasItems = node.typeParameters.length > 0;

  return (
    <ButtonGroup>
      {showType && (
        <>
          {isGroup ? (
            <Text className={Classes.TEXT_MUTED}>
              <Icon icon={icon} />
              &nbsp;{typeName}
            </Text>
          ) : (
            <Popover2 content={<FieldTypeMenu />} lazy={true}>
              <Button
                icon={icon || "blank"}
                fill={false}
                minimal={isGroup}
                disabled={isGroup}
                small={isGroup}
                rightIcon={!isGroup && "caret-down"}
              >
                {typeName}
              </Button>
            </Popover2>
          )}
        </>
      )}

      {node.type.match(/^select/) && (
        <Popover2
          lazy={true}
          content={surveyHasChoiceLists ? choiceListMenu : noChoicesAvailable}
        >
          <Button
            fill={true}
            outlined={false}
            rightIcon={"caret-down"}
            intent={hasItems ? "none" : "warning"}
          >
            {!hasItems && "Set visible choices"}
            {hasItems && (
              <OverflowList
                observeParents={true}
                minVisibleItems={2}
                collapseFrom={Boundary.END}
                items={node.typeParameters}
                visibleItemRenderer={(p) => <Code>{p}</Code>}
                overflowRenderer={(overflowItems) => (
                  <span>{`+ ${overflowItems.length}`}</span>
                )}
                style={{
                  transition: "width 0.1s ease-out",
                  maxWidth: `200px`,
                }}
              />
            )}
          </Button>
        </Popover2>
      )}
    </ButtonGroup>
  );
}
