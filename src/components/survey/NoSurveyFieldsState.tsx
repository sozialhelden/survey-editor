import { Button, NonIdealState } from "@blueprintjs/core";
import { useCallback, useContext } from "react";
import { ODKSurveyContext } from "../../lib/ODKSurveyContext";

export default function NoSurveyFieldsState() {
  const context = useContext(ODKSurveyContext);

  const addNode = useCallback(() => {
    context.onAddNode({ position: "after", group: false, fieldType: "text" });
  }, [context]);

  const addGroup = useCallback(() => {
    context.onAddNode({ position: "after", group: true, fieldType: "text" });
  }, [context]);

  const addLinkedDataModel = useCallback(() => {
    context.onAddNode({ position: "after", group: true, fieldType: "text" });
  }, [context]);

  const actions = (
    <>
      <p>
        <Button
          text="Add a field"
          large={true}
          intent="primary"
          onClick={addNode}
        />
      </p>
      <p>
        <Button text="Add a group of fields" intent="none" onClick={addGroup} />
      </p>
      <p>
        <Button
          text="Add a Linked Data model"
          intent="none"
          onClick={addLinkedDataModel}
        />
      </p>
    </>
  );

  return <NonIdealState title="This survey is empty." action={actions} />;
}
