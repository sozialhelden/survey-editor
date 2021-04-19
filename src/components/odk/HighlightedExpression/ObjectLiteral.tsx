import { Button, Colors } from "@blueprintjs/core";
import { Classes as PopoverClasses, Popover2 } from "@blueprintjs/popover2";
import { get, isEmpty } from "lodash";
import Inspector, { chromeLight } from "react-inspector";
import { useDarkMode } from "../../core/DarkModeContainer";
import { RDFClassMetadata } from "../../rdf/metadata/RDFClassMetadata";

/**
 * Shows a JavaScript object literal like Chrome inspector would show it.
 */
export default function ObjectLiteralButtonWithPopover({
  object,
  contextPrefix,
}: {
  object: unknown;
  contextPrefix: string;
}) {
  const isDate = object instanceof Date;
  const linkedDataType = get(object, "@type");
  const type =
    linkedDataType === undefined
      ? isDate
        ? "Date"
        : undefined
      : linkedDataType;
  const isEmptyObject = type === undefined && isEmpty(object);

  const isDarkMode = useDarkMode();
  const violetColor = isDarkMode ? Colors.VIOLET5 : Colors.VIOLET3;

  const inspector = (
    <div style={{ margin: "-20px", padding: "20px", overflow: "auto" }}>
      {linkedDataType && (
        <RDFClassMetadata name={linkedDataType} contextPrefix={contextPrefix} />
      )}
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
          OBJECT_NAME_COLOR: violetColor,
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
  if (isEmptyObject) {
    return null;
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
      <span>
        <Button
          minimal={true}
          style={{
            fontWeight: "bold",
            color: violetColor,
          }}
        >
          {String(type === undefined ? "{}" : type)}
        </Button>
      </span>
    </Popover2>
  );
}
