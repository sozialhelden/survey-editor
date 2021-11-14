import { HTMLDivProps } from "@blueprintjs/core";
import * as React from "react";

function getDarkModeSetting(): boolean {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

/**
 * A React Hook returning a boolean value that is `true` when the user switched on dark mode,
 * `false` otherwise.
 */
export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = React.useState(getDarkModeSetting());

  const handleChange = React.useCallback((e) => {
    setIsDarkMode(getDarkModeSetting());
  }, []);

  React.useEffect(() => {
    if (window.matchMedia === undefined) {
      return;
    }
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleChange);
  }, [handleChange]);

  return isDarkMode;
}

/**
 * A React component wrapper with a Blueprint CSS class that controls if the container's children
 * are rendered in dark-mode style or not.
 *
 * Wrap your Blueprint.js components in this React component to adapt them to the user's dark mode
 * setting automatically.
 */
export default function BlueprintDarkModeContainer(props: HTMLDivProps) {
  const isDarkMode = useDarkMode();
  return (
    <div
      {...props}
      className={isDarkMode ? `${props.className} bp3-dark` : props.className}
    >
      {props.children}
    </div>
  );
}
