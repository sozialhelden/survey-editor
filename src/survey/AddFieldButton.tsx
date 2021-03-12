import { Button } from "@blueprintjs/core";
import { useCallback, useContext } from "react";
import { createLabelInAllLanguages } from "../lib/createLabelInAllLanguages";
import { ODKSurveyContext } from "../lib/ODKSurveyContext";
import { ODKNode } from "../xlsform-simple-schema/types/ODKNode";
import { QuestionRow } from "../xlsform-simple-schema/types/RowTypes";

let rowIndex = 0;

export default function AddFieldButton({
  node,
  position,
}: {
  node: ODKNode;
  position: "before" | "after" | "inside";
}) {
  const context = useContext(ODKSurveyContext);

  const caption = (
    <>
      Add field {position} ‘<code>{node.row.name}</code>’
    </>
  );

  const onClick = useCallback(() => {
    const { xlsForm } = context;
    if (!xlsForm) {
      return;
    }

    const row: QuestionRow = {
      type: "text",
      name: `untitled_field_${rowIndex++}`,
      label: createLabelInAllLanguages(``, xlsForm.languages),
    };
    context.onSpliceRows("survey", [
      {
        rowIndex: node.rowIndex,
        numberOfRowsToRemove: 0,
        rowsToAdd: [row],
      },
    ]);
  }, [context, node]);

  return (
    <>
      <Button
        icon="plus"
        intent="primary"
        style={
          {
            // height: "44px",
            // width: "44px",
          }
        }
        onClick={onClick}
      >
        {caption}
      </Button>
    </>
  );
}
