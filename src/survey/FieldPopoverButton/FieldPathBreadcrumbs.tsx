import { Breadcrumbs } from "@blueprintjs/core";
import * as React from "react";

/**
 * Shows all parent groups of a field and the field’s name in breadcrumb layout.
 */
export function FieldPathBreadcrumbs({
  path,
  width,
}: {
  path: string[];
  width: number;
}) {
  return (
    <Breadcrumbs
      items={path.map((k, i) => ({
        href: `#//${path.slice(0, i + 1).join("/")}`,
        text: k,
      }))}
      collapseFrom="start"
      overflowListProps={{
        minVisibleItems: 1,
        style: {
          transition: "width 0.1s ease-out",
          width: `${width}px`,
        },
      }}
    />
  );
}
