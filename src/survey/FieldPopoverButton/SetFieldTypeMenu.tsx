import * as React from "react";
import { ODKNodeContext } from "../../lib/ODKNodeContext";
import { ODKSurveyContext } from "../../lib/ODKSurveyContext";
import { fieldTypeNames } from "../../xlsform-simple-schema/field-types/fieldTypeNames";
import addExampleChoices from "../../xlsform-simple-schema/functions/editing/addExampleChoices";
import { QuestionRow } from "../../xlsform-simple-schema/types/RowTypes";
import { FieldTypeMenu } from "./FieldTypeMenu";

export function SetFieldTypeMenu() {
  const context = React.useContext(ODKSurveyContext);
  const { node } = React.useContext(ODKNodeContext);

  const onSelectType = React.useCallback(
    (type: keyof typeof fieldTypeNames) => {
      const typeParameters = type?.match(/^select/) ? node.typeParameters : [];
      const newTypeValue = [type, ...typeParameters].join(" ");
      const newRow: QuestionRow = {
        ...node.row,
        type: newTypeValue,
      };

      if (
        type?.match(/^select/) &&
        context.xlsForm?.worksheets.choices?.rows.length === 0
      ) {
        context.setXLSForm(addExampleChoices(context.xlsForm));
      }

      context.onSpliceRows("survey", [
        {
          rowIndex: node.rowIndex,
          numberOfRowsToRemove: 1,
          rowsToAdd: [newRow],
        },
      ]);
    },
    [context, node]
  );

  return (
    <FieldTypeMenu onSelectType={onSelectType} header={"Set a field type."} />
  );
}
