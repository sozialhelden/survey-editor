import { Button, ControlGroup, NonIdealState } from "@blueprintjs/core";
import * as React from "react";
import { ODKSurveyContext } from "../../../lib/ODKSurveyContext";
import addExampleChoices from "../../../xlsform-simple-schema/functions/editing/addExampleChoices";
/**
 * Shown when no choice lists are defined in the survey, allowing to create an example choice list.
 */
export function NoChoicesState() {
  const context = React.useContext(ODKSurveyContext);

  const onAddExampleChoices = React.useCallback(() => {
    if (!context.xlsForm) {
      return;
    }
    context.setXLSFormWithPatches(
      "Add example choices",
      ...addExampleChoices(context.xlsForm)
    );
  }, [context]);

  const addExampleChoicesButton = (
    <Button large={true} intent="primary" onClick={onAddExampleChoices}>
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
