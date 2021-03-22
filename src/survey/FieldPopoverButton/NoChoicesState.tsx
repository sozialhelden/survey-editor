import { Button, ControlGroup, NonIdealState } from "@blueprintjs/core";
import * as React from "react";
import { createLabelInAllLanguages } from "../../lib/createLabelInAllLanguages";
import { ODKSurveyContext } from "../../lib/ODKSurveyContext";
import { ChoiceRow } from "../../xlsform-simple-schema/types/RowTypes";

export function NoChoicesState() {
  const context = React.useContext(ODKSurveyContext);

  const addExampleChoices = React.useCallback(() => {
    const languages = context.xlsForm?.languages || new Set(["English (en)"]);
    const choiceRows: ChoiceRow[] = [
      {
        "list name": "yes_no_maybe",
        name: "yes",
        label: createLabelInAllLanguages("yes", languages),
      },
      {
        "list name": "yes_no_maybe",
        name: "no",
        label: createLabelInAllLanguages("no", languages),
      },
      {
        "list name": "yes_no_maybe",
        name: "maybe",
        label: createLabelInAllLanguages("maybe", languages),
      },
    ];
    context.onSpliceRows("choices", [
      {
        rowIndex: 0,
        numberOfRowsToRemove: 0,
        rowsToAdd: choiceRows,
      },
    ]);
  }, [context]);

  const addExampleChoicesButton = (
    <Button large={true} intent="primary" onClick={addExampleChoices}>
      Create example choice list
    </Button>
  );

  return (
    <ControlGroup style={{ padding: "16px" }}>
      <NonIdealState
        icon="selection"
        action={addExampleChoicesButton}
        title="Sometimes, we have no choice."
        description={
          <>
            This survey has no choice lists yet. Please add one first to make it
            available for this survey question.
          </>
        }
      />
    </ControlGroup>
  );
}
