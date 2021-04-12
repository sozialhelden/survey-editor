import { Callout, EditableText } from "@blueprintjs/core";
import * as React from "react";
import { ODKSurveyContext } from "../../../lib/ODKSurveyContext";
import { ODKNode } from "../../../xlsform-simple-schema/types/ODKNode";

export function EditableFieldHint({
  node,
  debug,
}: {
  node: ODKNode;
  debug: boolean;
}) {
  const context = React.useContext(ODKSurveyContext);
  const { onChangeCell, language } = context;

  const [editedHintString, setEditedHintString] = React.useState<string>();

  const onChangeHint = React.useCallback(
    (value) => {
      onChangeCell("survey", node.rowIndex, "hint", value, node);
      setEditedHintString(undefined);
    },
    [node, onChangeCell]
  );

  if (language === undefined) {
    return null;
  }

  const hintString = node.row.hint?.[language];
  const value = editedHintString === undefined ? hintString : editedHintString;
  const shownValue = value?.trim() === "" ? undefined : value;
  const hintElement = hintString !== undefined && hintString !== "" && (
    <Callout intent="primary">
      {debug && (
        <EditableText
          multiline={true}
          onChange={setEditedHintString}
          onConfirm={onChangeHint}
          placeholder={`Enter a hint text in ${context.languageName}…`}
          value={shownValue}
          minWidth={100}
        />
      )}
      {!debug && hintString}
    </Callout>
  );

  return hintElement || null;
}
