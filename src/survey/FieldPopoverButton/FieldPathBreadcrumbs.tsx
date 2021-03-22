import { Breadcrumbs } from "@blueprintjs/core";
import * as React from "react";

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
