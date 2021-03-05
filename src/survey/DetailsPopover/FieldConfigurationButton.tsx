import {
  Button,
  ButtonGroup,
  Callout,
  Classes,
  Icon,
  Menu,
  MenuDivider,
  MenuItem,
  Text,
} from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import * as React from "react";
import { ODKSurveyContext } from "../../lib/ODKSurveyContext";
import {
  fieldCategoriesToIcons,
  fieldCategoryNames,
  fieldTypeNames,
  fieldTypesToCategories,
  typesToIcons,
} from "../../lib/typesToIcons";
import { ODKNode } from "../../xlsform-simple-schema/types/ODKNode";
import { NoChoicesState } from "./NoChoicesState";

export function FieldConfigurationButton({ node }: { node: ODKNode }) {
  const isGroup = ["begin_group", "repeat_group"].includes(node.type);

  const typeMenu = (
    <Menu>
      <li className="bp3-menu-header">
        <h6 className="bp3-heading">Collecting data</h6>
      </li>

      {Object.keys(fieldCategoriesToIcons)
        .filter((c) => c !== "special" && c !== "grouping")
        .map((category) => (
          <MenuItem
            text={fieldCategoryNames[category]}
            icon={fieldCategoriesToIcons[category]}
          >
            {Object.keys(fieldTypesToCategories)
              .filter((t) => fieldTypesToCategories[t] === category)
              .map((type) => (
                <MenuItem
                  text={fieldTypeNames[type]}
                  icon={typesToIcons[type]}
                />
              ))}
          </MenuItem>
        ))}

      <MenuDivider />

      {Object.keys(fieldTypesToCategories)
        .filter((t) => fieldTypesToCategories[t] === "special")
        .map((type) => (
          <MenuItem text={fieldTypeNames[type]} icon={typesToIcons[type]} />
        ))}
    </Menu>
  );

  const context = React.useContext(ODKSurveyContext);
  const choicesByName = context.xlsForm?.choicesByName;
  const choiceListNames = choicesByName ? Object.keys(choicesByName) : [];
  const choiceListMenu = (
    <Menu>
      <li className="bp3-menu-header">
        <h6 className="bp3-heading">Choice lists</h6>
      </li>
      {choiceListNames.map((listName) => (
        <MenuItem text={<code>{listName}</code>} icon="list" />
      ))}
      <MenuDivider />
      <Callout intent="primary">
        These lists are defined in the <code>choices</code> sheet.
      </Callout>
    </Menu>
  );

  const noChoicesAvailable = NoChoicesState();

  const typeName = fieldTypeNames[node.type];
  const icon = typesToIcons[node.type];

  return (
    <ButtonGroup>
      {isGroup ? (
        <Text className={Classes.TEXT_MUTED}>
          <Icon icon={icon} />
          &nbsp;{typeName}
        </Text>
      ) : (
        <Popover2 content={typeMenu}>
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

      {node.typeParameters.map((parameter) => (
        <Popover2
          content={
            choiceListNames.length === 0 ? noChoicesAvailable : choiceListMenu
          }
        >
          <Button
            icon="list"
            fill={false}
            minimal={true}
            outlined={true}
            className={Classes.CODE}
            rightIcon={"caret-down"}
          >
            {parameter}
          </Button>
        </Popover2>
      ))}
    </ButtonGroup>
  );
}
