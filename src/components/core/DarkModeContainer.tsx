import { HTMLDivProps } from "@blueprintjs/core";
import * as React from "react";

function getDarkModeSetting(): boolean {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

export default function DarkModeContainer(props: HTMLDivProps) {
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
