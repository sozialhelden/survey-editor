import { Classes, EditableText } from "@blueprintjs/core";
import * as React from "react";
import { ODKSurveyContext } from "../../../lib/ODKSurveyContext";

/** Displays the survey’s configured title (and file name), editable. */

export default function EditableSurveyTitle() {
  const context = React.useContext(ODKSurveyContext);
  const surveyName = context.xlsForm?.worksheets.settings?.rows[0].form_title;
  const [editedSurveyName, setEditedSurveyName] = React.useState<string>();

  const onChangeSurveyName = React.useCallback(
    (_: string) => {
      if (editedSurveyName === undefined || editedSurveyName === "") {
        return;
      }
      context.onChangeCell("settings", 0, "form_title", editedSurveyName);
      setEditedSurveyName(undefined);
    },
    [editedSurveyName, context]
  );

  const surveyTitleString =
    context.xlsForm?.worksheets.settings?.rows[0].form_title;
  const hasTitle =
    surveyTitleString !== undefined && surveyTitleString.trim() !== "";
  // const surveyTitle = (
  //   <Text
  // className={[!hasTitle && Classes.TEXT_MUTED, Classes.TEXT_LARGE]
  //   .filter(Boolean)
  //   .join(" ")}
  //   >
  //     {surveyTitleString || "Untitled survey"}
  //   </Text>
  // );

  return (
    <EditableText
      onChange={setEditedSurveyName}
      onConfirm={onChangeSurveyName}
      confirmOnEnterKey={true}
      className={[!hasTitle && Classes.TEXT_MUTED, Classes.TEXT_LARGE]
        .filter(Boolean)
        .join(" ")}
      placeholder={`Enter a survey title…`}
      value={editedSurveyName === undefined ? surveyName : editedSurveyName}
      minWidth={100}
    />
  );
}
