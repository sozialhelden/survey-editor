import {
  Callout,
  Checkbox,
  Classes,
  Code,
  ControlGroup,
  Menu,
  Text,
} from "@blueprintjs/core";
import { sortBy, without } from "lodash";
import * as React from "react";
import { ODKSurveyContext } from "../../lib/ODKSurveyContext";
import { XLSForm } from "../../xlsform-simple-schema";
import { ODKNode } from "../../xlsform-simple-schema/types/ODKNode";
import { QuestionRow } from "../../xlsform-simple-schema/types/RowTypes";

/** Displays all defined XLSForm survey choice lists as selectable checkboxes. */
export function ChoiceListMenu({
  xlsForm,
  node,
}: {
  xlsForm: XLSForm;
  node: ODKNode;
}) {
  const choiceListsByName = xlsForm?.choicesByName;
  const choiceListNames = choiceListsByName
    ? Object.keys(choiceListsByName)
    : [];
  const context = React.useContext(ODKSurveyContext);

  const onChange = React.useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      const checked = event.currentTarget.checked;
      const choiceListName = event.currentTarget.value;
      let typeParameters = [...node.typeParameters];
      if (checked) {
        typeParameters.push(choiceListName);
      } else {
        typeParameters = without(typeParameters, choiceListName);
      }
      const newTypeValue = [node.type, ...typeParameters].join(" ");
      const newRow: QuestionRow = {
        ...node.row,
        type: newTypeValue,
      };
      context.onSpliceRows("survey", [
        {
          rowIndex: node.rowIndex,
          numberOfRowsToRemove: 1,
          rowsToAdd: [newRow],
        },
      ]);
    },
    [context, node]
  );

  const choiceListMenu = (
    <Menu>
      <li className="bp3-menu-header">
        <h6 className="bp3-heading">
          Set which choice lists should be visible.
        </h6>
      </li>
      <ControlGroup style={{ margin: "16px 8px 4px" }} vertical={true}>
        {choiceListNames.map((listName) => {
          const isSelected = node.typeParameters.includes(listName);
          const nameElement = listName;
          const choiceNamesToRows = choiceListsByName[listName];
          const choiceNames = Object.keys(choiceNamesToRows);

          const sortedChoiceRows = sortBy(
            choiceNames.map((n) => choiceNamesToRows[n]),
            (r) => r.name.toLowerCase()
          );

          const maxChoicesCount = 4;
          const shownChoices = sortedChoiceRows
            .slice(0, maxChoicesCount)
            .map((row) => (
              <li>
                <Code
                  key={row.name}
                  style={{
                    marginInline: "1px",
                  }}
                >
                  {row.name}
                </Code>
              </li>
            ));
          const restElement = sortedChoiceRows.length > maxChoicesCount && (
            <span
              className={Classes.UI_TEXT}
              style={{
                lineHeight: "24px",
                marginLeft: "4px",
                paddingRight: "2px",
              }}
              aria-label={`and ${
                sortedChoiceRows.length - maxChoicesCount
              } more`}
            >
              +{sortedChoiceRows.length - maxChoicesCount}
            </span>
          );
          const shownLabel = (
            <ControlGroup fill={true} style={{ display: "inline-flex" }}>
              <header aria-label={`Choice list ${listName}, allowed values:`}>
                <Text>{nameElement}</Text>
              </header>
              <ul className={Classes.LIST_UNSTYLED}>
                <ControlGroup
                  style={{
                    justifyContent: "flex-end",
                    marginLeft: "16px",
                  }}
                >
                  {shownChoices}
                  {restElement}
                </ControlGroup>
              </ul>
            </ControlGroup>
          );

          return (
            <Checkbox
              value={listName}
              onChange={onChange}
              large={true}
              checked={isSelected}
              disabled={
                node.typeParameters.length === 1 &&
                listName === node.typeParameters[0]
              }
            >
              {shownLabel}
            </Checkbox>
          );
        })}
      </ControlGroup>

      <Callout intent="primary">
        The content of these lists is defined in the <code>choices</code> Excel
        sheet.
      </Callout>
    </Menu>
  );
  return choiceListMenu;
}
