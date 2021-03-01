import * as React from "react";
import PaddedContainer from "../components/PaddedContainer";
import XLSForm, { WorksheetName } from "../xlsform-simple-schema";
import { FieldSetForKey } from "./FieldSetForKey";
import { FieldProps } from "./FieldProps";
import { ODKNode } from "../xlsform-simple-schema/types/ODKNode";
import { ODKSurveyContext } from "../lib/ODKSurveyContext";

export default function XLSFormSurvey(props: {
  xlsForm: XLSForm;
  language: string;
  debug: boolean;
  className?: string;
  onChange: (value: unknown, fieldProps: FieldProps) => void;
  onChangeCell: (
    worksheetName: WorksheetName,
    rowIndex: number,
    columnName: string,
    value: unknown,
    node?: ODKNode
  ) => void;
}) {
  const { schema, languageCode } = React.useContext(ODKSurveyContext);

  const fieldSets = schema
    ?.objectKeys()
    .map((k) => (
      <FieldSetForKey
        key={k}
        schemaKey={k}
        onChange={props.onChange}
        onChangeCell={props.onChangeCell}
      />
    ));

  return (
    <PaddedContainer
      horizontal={2}
      vertical={2}
      className={props.className}
      style={{ maxWidth: "50rem", padding: "4rem", margin: "auto" }}
      lang={languageCode}
    >
      <form>{fieldSets}</form>
    </PaddedContainer>
  );
}
