import { Classes, Code, Icon, ITreeNode, Text, Tree } from "@blueprintjs/core";
import * as React from "react";
import DetailsPopover from "../survey/DetailsPopover";
import XLSForm from "../xlsform-simple-schema";
import getEvaluatedXLSFormResult from "../xlsform-simple-schema/functions/getEvaluatedXLSFormResult";
import { knownLiteralsWithoutDollarSign } from "../xlsform-simple-schema/functions/odk-formulas/evaluation/ODKFormulaEvaluationContext";
import { ODKNode } from "../xlsform-simple-schema/types/ODKNode";

function SecondaryLabel(props: { node: ODKNode }) {
  const { node } = props;
  const results = node.evaluatedResults;
  const keysWithErrors = Object.keys(results).filter((k) => results[k].error);
  const caption = <span>{JSON.stringify(node.answer)}</span>;
  const error = `Node has errors in the following columns: ${keysWithErrors
    .map((k) => `‘${k}’`)
    .join(", ")}`;
  const icon = keysWithErrors.length ? (
    <Icon icon="error" intent="danger" title={error} htmlTitle={error} />
  ) : null;
  return (
    <DetailsPopover
      node={node}
      detailsButtonCaption={
        <>
          {caption}&nbsp;{icon}
        </>
      }
    />
  );
}

export default function ResultCodeTree(props: {
  lastEvaluationDate: Date;
  xlsForm: XLSForm;
}) {
  const { xlsForm, lastEvaluationDate } = props;

  const result = React.useMemo(() => {
    return xlsForm
      ? getEvaluatedXLSFormResult(
          xlsForm,
          {
            survey: xlsForm?.rootSurveyGroup,
            stackDepth: 0,
            knownLiteralsWithoutDollarSign: knownLiteralsWithoutDollarSign,
          },
          (result) => {
            const relevant =
              result.nodeData?.evaluatedResults.relevant.result === true;
            return {
              ...result,
              label: relevant ? (
                result.label
              ) : (
                <span className="bp3-text-disabled">{result.label}</span>
              ),
              key: result.nodeData?.row.name,
              isExpanded: true,
              hasCaret: !(result.childNodes?.length === 0),
              secondaryLabel: result.nodeData && (
                <SecondaryLabel node={result.nodeData} />
              ),
            } as ITreeNode<ODKNode>;
          }
        )
      : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [xlsForm, lastEvaluationDate]);

  return result ? <Tree contents={[result]} /> : <div></div>;
}
