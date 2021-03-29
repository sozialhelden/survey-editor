import { Colors, ControlGroup, EditableText, Icon } from "@blueprintjs/core";
import * as React from "react";
import { ODKNodeContext } from "../../lib/ODKNodeContext";
import { ODKSurveyContext } from "../../lib/ODKSurveyContext";
import evaluateNodeColumn from "../../xlsform-simple-schema/functions/odk-formulas/evaluation/evaluateNodeColumn";
import { ExpressionPanel } from "../FieldPopoverButton/ExpressionPanel";
import { FieldProps } from "../FieldProps";

type Props = FieldProps & {
  onInputChange: (event: React.FormEvent<HTMLInputElement>) => void;
  labelElement: React.ReactNode;
  value: unknown;
  defaultValue: unknown;
};

export default function CalculateField(props: Props) {
  const { node } = props;
  const { evaluationContext } = React.useContext(ODKSurveyContext);
  const { nodeEvaluationResults } = React.useContext(ODKNodeContext);
  const surveyContext = React.useContext(ODKSurveyContext);
  const [editedFormula, setEditedFormula] = React.useState<string>();

  const formula = node.row.calculation;
  const value = editedFormula === undefined ? formula : editedFormula;
  const shownValue = value?.trim() === "" ? undefined : value;

  const nodeEvaluationResult =
    editedFormula === undefined
      ? nodeEvaluationResults?.get("calculation")
      : evaluationContext &&
        evaluateNodeColumn(
          node,
          evaluationContext,
          "calculation",
          "",
          shownValue
        );

  const onCancel = React.useCallback(() => {
    setEditedFormula(undefined);
  }, []);

  const changeFormula = React.useCallback(
    (newFormula?: string) => {
      surveyContext.onChangeCell(
        "survey",
        node.rowIndex,
        "calculation",
        newFormula,
        node
      );
      setEditedFormula(undefined);
    },
    [node, surveyContext]
  );

  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setEditedFormula(event.target.value);
    },
    []
  );

  const onBlur = React.useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      changeFormula(editedFormula);
    },
    [changeFormula, editedFormula]
  );

  return (
    <ControlGroup vertical={true}>
      <ControlGroup
        style={{
          fontFamily:
            'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          background: Colors.WHITE,
          padding: "8px",
          border: `1px solid ${Colors.LIGHT_GRAY2}`,
        }}
        fill={true}
      >
        <Icon icon="function" style={{ marginRight: "16px" }} />
        <ControlGroup fill={true}>
          <EditableText
            placeholder="Enter a literal or a formula…"
            onChange={setEditedFormula}
            onCancel={onCancel}
            onConfirm={changeFormula}
            value={shownValue}
            multiline={true}
          />
        </ControlGroup>
      </ControlGroup>
      <ExpressionPanel
        node={node}
        columnName="calculation"
        nodeEvaluationResult={nodeEvaluationResult}
        style={{}}
      ></ExpressionPanel>
    </ControlGroup>
  );
}
