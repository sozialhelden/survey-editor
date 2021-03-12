import { Classes, Text } from "@blueprintjs/core";
import * as React from "react";
import { EvaluatableColumnName } from "../../xlsform-simple-schema/types/ODKNode";

export function DefaultValueExplanation({
  answer,
  columnName,
  nodeName,
}: {
  answer: unknown;
  columnName: EvaluatableColumnName;
  nodeName: string;
}) {
  return (
    <Text className={Classes.TEXT_MUTED}>
      {
        {
          calculation:
            answer === undefined || answer === "" ? (
              <>
                This survey field has no entered answer yet, and the{" "}
                <code>{columnName}</code> cell is empty.
              </>
            ) : (
              <>
                This is the answer value entered in the <code>{nodeName}</code>{" "}
                field.
              </>
            ),
          required: (
            <>
              This means users are not required to enter this field. This is the
              default when the <code>{columnName}</code> cell is empty.
            </>
          ),
          relevant: (
            <>
              This means the survey field is always shown. This is the default
              when the <code>{columnName}</code> cell is empty.
            </>
          ),
          readonly: (
            <>
              This means the survey field is not read-only. This is the default
              when the <code>{columnName}</code> cell is empty.
            </>
          ),
          constraint: (
            <>
              If the cell contains a formula that evaluates to <code>true</code>
              , the field accepts any input. This is the default when the{" "}
              <code>{columnName}</code> cell is empty.
            </>
          ),
        }[columnName]
      }
    </Text>
  );
}
