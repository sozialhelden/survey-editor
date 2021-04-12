import { Menu, MenuDivider, MenuItem } from "@blueprintjs/core";
import * as React from "react";
import { fieldCategoriesToIcons } from "../../../xlsform-simple-schema/field-types/fieldCategoriesToIcons";
import { fieldCategoryNames } from "../../../xlsform-simple-schema/field-types/fieldCategoryNames";
import { fieldTypeNames } from "../../../xlsform-simple-schema/field-types/fieldTypeNames";
import { fieldTypesToCategories } from "../../../xlsform-simple-schema/field-types/fieldTypesToCategories";
import { fieldTypesToIcons } from "../../../xlsform-simple-schema/field-types/fieldTypesToIcons";

export function FieldTypeMenu({
  onSelectType,
  header,
}: {
  header: React.ReactNode;
  onSelectType: (fieldType: keyof typeof fieldTypeNames) => void;
}) {
  const onClick = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const type = event.currentTarget.dataset.type;
      if (!type) {
        throw new Error(
          "Encountered a menu item without a set field type. This is a bug – please report this to the developers."
        );
      }
      onSelectType(type);
    },
    [onSelectType]
  );

  return (
    <Menu>
      <li className="bp3-menu-header">
        <h6 className="bp3-heading">{header}</h6>
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
