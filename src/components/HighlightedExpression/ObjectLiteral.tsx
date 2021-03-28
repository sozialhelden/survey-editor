import { Colors } from "@blueprintjs/core";
import { Classes as PopoverClasses, Popover2 } from "@blueprintjs/popover2";
import { get } from "lodash";
import Inspector, { chromeLight } from "react-inspector";
import styled from "styled-components";
import { alpha } from "../../lib/colors";

const StyledCode = styled.button`
  display: inline-block;
  padding: 0.2em 0.4em;
  cursor: pointer;
  background: linear-gradient(
    ${alpha(Colors.BLUE4, 0.1)},
    ${alpha(Colors.BLUE4, 0.1)}
  );
  border: 0.1em ${alpha(Colors.BLUE1, 0.4)} solid;
  color: ${Colors.BLUE1};
  border-radius: 1em;
`;

/**
 * Shows a JavaScript object literal like Chrome inspector would show it.
 */
export default function ObjectLiteralButtonWithPopover({
  object,
}: {
  object: unknown;
}) {
  const isDate = object instanceof Date;
  const linkedDataType = get(object, "@type");
  const type = linkedDataType || (isDate && "Date");
  const inspector = (
    <div style={{ margin: "-20px", padding: "20px", overflow: "auto" }}>
      <Inspector
        data={object}
        name={type}
        expandLevel={0}
        theme={{
          ...chromeLight,
          TREENODE_FONT_FAMILY:
            'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          TREENODE_FONT_SIZE: "14px",
          TREENODE_LINE_HEIGHT: "1.5",
          BASE_FONT_SIZE: "14px",
          BASE_LINE_HEIGHT: "1.5",
          OBJECT_NAME_COLOR: Colors.VIOLET3,
          OBJECT_VALUE_NULL_COLOR: Colors.RED4,
          OBJECT_VALUE_UNDEFINED_COLOR: Colors.RED4,
          OBJECT_VALUE_REGEXP_COLOR: Colors.RED4,
          OBJECT_VALUE_STRING_COLOR: Colors.RED4,
          OBJECT_VALUE_SYMBOL_COLOR: Colors.RED4,
          OBJECT_VALUE_NUMBER_COLOR: Colors.RED4,
          OBJECT_VALUE_BOOLEAN_COLOR: Colors.RED4,
          OBJECT_VALUE_FUNCTION_PREFIX_COLOR: Colors.RED4,
        }}
      />
    </div>
  );
  if (type === undefined && !isDate) {
    return inspector;
  }
  return (
    <Popover2
      lazy={true}
      interactionKind="click"
      popoverClassName={PopoverClasses.POPOVER2_CONTENT_SIZING}
      minimal={false}
      placement="top"
      rootBoundary="viewport"
      modifiers={{
        arrow: { enabled: true },
        preventOverflow: { enabled: true },
      }}
      content={inspector}
      fill={false}
      targetTagName="span"
    >
      <StyledCode>{String(type)}</StyledCode>
    </Popover2>
  );
}
