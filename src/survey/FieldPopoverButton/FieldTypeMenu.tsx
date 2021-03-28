import { Menu, MenuDivider, MenuItem } from "@blueprintjs/core";
import * as React from "react";
import { ODKNodeContext } from "../../lib/ODKNodeContext";
import { ODKSurveyContext } from "../../lib/ODKSurveyContext";
import { fieldCategoriesToIcons } from "../../xlsform-simple-schema/field-types/fieldCategoriesToIcons";
import { fieldCategoryNames } from "../../xlsform-simple-schema/field-types/fieldCategoryNames";
import { fieldTypeNames } from "../../xlsform-simple-schema/field-types/fieldTypeNames";
import { fieldTypesToCategories } from "../../xlsform-simple-schema/field-types/fieldTypesToCategories";
import { fieldTypesToIcons } from "../../xlsform-simple-schema/field-types/fieldTypesToIcons";
import addExampleChoices from "../../xlsform-simple-schema/functions/editing/addExampleChoices";
import { QuestionRow } from "../../xlsform-simple-schema/types/RowTypes";

export function FieldTypeMenu() {
  const context = React.useContext(ODKSurveyContext);
  const { node } = React.useContext(ODKNodeContext);

  const onClick = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const type = event.currentTarget.dataset.type;
      const typeParameters = type?.match(/^select/) ? node.typeParameters : [];
      const newTypeValue = [type, ...typeParameters].join(" ");
      const newRow: QuestionRow = {
        ...node.row,
        type: newTypeValue,
      };

      if (
        type?.match(/^select/) &&
        context.xlsForm?.worksheets.choices?.rows.length === 0
      ) {
        context.setXLSForm(addExampleChoices(context.xlsForm));
      }

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

  return (
    <Menu>
      <li className="bp3-menu-header">
        <h6 className="bp3-heading">Set a field type.</h6>
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
                  icon={fieldTypesToIcons[type]}
                  onClick={onClick}
                  data-type={type}
                />
              ))}
          </MenuItem>
        ))}

      <MenuDivider />

      {Object.keys(fieldTypesToCategories)
        .filter((t) => fieldTypesToCategories[t] === "special")
        .map((type) => (
          <MenuItem
            text={fieldTypeNames[type]}
            icon={fieldTypesToIcons[type]}
            onClick={onClick}
            data-type={type}
          />
        ))}
    </Menu>
  );
}
