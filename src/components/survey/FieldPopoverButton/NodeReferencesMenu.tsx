import { Menu, MenuItem } from "@blueprintjs/core";
import * as React from "react";
import { ODKSurveyContext } from "../../../lib/ODKSurveyContext";
import { fieldTypesToIcons } from "../../../xlsform-simple-schema/field-types/fieldTypesToIcons";
import { NodeDependency } from "../../../xlsform-simple-schema/functions/editing/findOrReplaceFieldReferences";
import { getNodeAbsolutePathString } from "../../../xlsform-simple-schema/functions/odk-formulas/evaluation/XPath";

/**
 * Displays a menu showing all fields that reference the given field.
 */
export function NodeReferencesMenu(props: { references: NodeDependency[] }) {
  const context = React.useContext(ODKSurveyContext);

  return (
    <Menu>
      <li className="bp3-menu-header">
        <h6 className="bp3-heading">
          This field influences{" "}
          {props.references.length === 1
            ? "one other field."
            : `${props.references?.length} other fields.`}
        </h6>
      </li>

      {props.references?.map((reference) => {
        if (!context.evaluationContext) {
          return null;
        }
        const href = `#//${getNodeAbsolutePathString(
          reference.node,
          context.evaluationContext.survey,
          "/"
        )}`;

        return (
          <MenuItem
            text={<code>{reference.node?.row.name}</code>}
            icon={fieldTypesToIcons[reference.node.type]}
            href={href}
            label={reference.columnName}
          />
        );
      })}
    </Menu>
  );
}
