import * as React from "react";
import { ODKNodeContext } from "../../../lib/ODKNodeContext";
import { ODKSurveyContext } from "../../../lib/ODKSurveyContext";
import { mergeCommands } from "../../../lib/undo/mergeCommands";
import { fieldTypeNames } from "../../../xlsform-simple-schema/field-types/fieldTypeNames";
import addExampleChoices from "../../../xlsform-simple-schema/functions/editing/addExampleChoices";
import spliceRowsInWorksheet from "../../../xlsform-simple-schema/functions/editing/spliceRowsInWorksheet";
import { QuestionRow } from "../../../xlsform-simple-schema/types/RowTypes";
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

      if (!context.xlsForm) {
        return;
      }

      const commands = [];
      if (
        type?.match(/^select/) &&
        !context.xlsForm?.worksheets.choices?.rows.length
      ) {
        commands.push(addExampleChoices(context.xlsForm));
      }

      commands.push(
        spliceRowsInWorksheet(commands[0]?.[0] || context.xlsForm, "survey", [
          {
            rowIndex: node.rowIndex,
            numberOfRowsToRemove: 1,
            rowsToAdd: [newRow],
          },
        ])
      );
      context.setXLSFormWithPatches(
        `Set \`${node.row.name}\` type to \`${type}\``,
        ...mergeCommands(commands)
      );
    },
    [context, node]
  );

  return (
    <FieldTypeMenu onSelectType={onSelectType} header={"Set a field type."} />
  );
}
