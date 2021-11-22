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

  // const addLinkedDataBlock = useCallback(() => {
  //   context.onSpliceRows(
  //     "survey",
  //     getRowsForRDFClass("https://schema.org/Hotel", context.evaluationContext?.survey, xlsForm),
  //     "Add ‘Hotel’ Linked Data block"
  //   );
  // }, [context]);

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
        {/* <Button
          text="Add a Linked Data block"
          intent="none"
          onClick={addLinkedDataBlock}
        /> */}
      </p>
    </>
  );

  return <NonIdealState title="This survey is empty." action={actions} />;
}
