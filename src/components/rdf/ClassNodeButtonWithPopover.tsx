import { Button, Colors } from "@blueprintjs/core";
import { Classes as PopoverClasses, Popover2 } from "@blueprintjs/popover2";
import { ClassMetadataKey } from "../../lib/rdf/getClassMetadata";
import { PropertyMetadataKey } from "../../lib/rdf/getPropertyMetadata";
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
  children,
  visibleSections,
}: {
  name: string;
  contextPrefix: string;
  children?: React.ReactNode;
  visibleSections?: Partial<
    Record<ClassMetadataKey | PropertyMetadataKey, boolean>
  >;
}) {
  const isDarkMode = useDarkMode();
  const violetColor = isDarkMode ? Colors.VIOLET5 : Colors.VIOLET3;
  const content = (
    <ErrorBoundary>
      <RDFClassMetadata
        name={name}
        contextPrefix={contextPrefix}
        visibleSections={visibleSections}
      />
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
          {children}
        </Button>
      </span>
    </Popover2>
  );
}
