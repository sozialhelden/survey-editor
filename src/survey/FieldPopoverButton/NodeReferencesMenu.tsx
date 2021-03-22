import { Menu, MenuItem } from "@blueprintjs/core";
import * as React from "react";
import { NodeDependency } from "../../lib/findOrReplaceFieldReferences";
import { ODKSurveyContext } from "../../lib/ODKSurveyContext";
import { typesToIcons } from "../../lib/typesToIcons";
import { getNodeAbsolutePathString } from "../../xlsform-simple-schema/functions/odk-formulas/evaluation/XPath";

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
        if (!context.context) {
          return null;
        }
        const href = `#//${getNodeAbsolutePathString(
          reference.node,
          context.context,
          "/"
        )}`;

        return (
          <MenuItem
            text={<code>{reference.node?.row.name}</code>}
            icon={typesToIcons[reference.node.type]}
            href={href}
            label={reference.columnName}
          />
        );
      })}
    </Menu>
  );
}
