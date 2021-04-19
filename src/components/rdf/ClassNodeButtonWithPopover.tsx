import { Button, Colors } from "@blueprintjs/core";
import { Classes as PopoverClasses, Popover2 } from "@blueprintjs/popover2";
import { useDarkMode } from "../core/DarkModeContainer";
import ErrorBoundary from "../core/ErrorBoundary";
import { RDFClassMetadata } from "./metadata/RDFClassMetadata";
import PrefixedNodeName from "./PrefixedNodeName";

/**
 * Shows a RDF class node with a popover containing the class meta information.
 */
export default function ClassNodeButtonWithPopover({
  name,
  contextPrefix,
}: {
  name: string;
  contextPrefix: string;
}) {
  const isDarkMode = useDarkMode();
  const violetColor = isDarkMode ? Colors.VIOLET5 : Colors.VIOLET3;
  const content = (
    <ErrorBoundary>
      <RDFClassMetadata name={name} contextPrefix={contextPrefix} />
    </ErrorBoundary>
  );

  return (
    <Popover2
      lazy={true}
      interactionKind="click"
      popoverClassName={PopoverClasses.POPOVER2_CONTENT_SIZING}
      minimal={false}
      placement="bottom"
      rootBoundary="viewport"
      modifiers={{
        arrow: { enabled: true },
        preventOverflow: { enabled: true },
      }}
      content={content}
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
          {<PrefixedNodeName name={name} contextPrefix={contextPrefix} />}
        </Button>
      </span>
    </Popover2>
  );
}
