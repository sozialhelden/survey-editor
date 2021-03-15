import * as React from "react";
import PaddedContainer from "../components/PaddedContainer";
import { ODKSurveyContext } from "../lib/ODKSurveyContext";
import { XLSForm } from "../xlsform-simple-schema";
import { FieldSetForKey } from "./FieldSetForKey";
import NoSurveyFieldsState from "./NoSurveyFieldsState";

export default function XLSFormSurvey(props: {
  xlsForm: XLSForm;
  language: string;
  debug: boolean;
  className?: string;
}) {
  const { languageCode, debug } = React.useContext(ODKSurveyContext);

  // const fieldSets = schema
  //   ?.objectKeys()
  //   .map((k) => <FieldSetForKey key={k} schemaKey={k} />);
  const isSurveyEmpty = props.xlsForm.flatNodes.length === 0;
  const noSurveyFieldsState = <NoSurveyFieldsState />;

  return (
    <PaddedContainer
      horizontal={2}
      vertical={2}
      className={props.className}
      style={{
        maxWidth: debug ? "60rem" : "50rem",
        padding: "4rem",
        margin: "auto",
      }}
      lang={languageCode}
    >
      {isSurveyEmpty ? (
        noSurveyFieldsState
      ) : (
        <form>
          <FieldSetForKey key={"data"} schemaKey={"data"} />
        </form>
      )}
    </PaddedContainer>
  );
}
