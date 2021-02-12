import { ITreeNode } from "@blueprintjs/core";
import { ODKNode } from "../types/ODKNode";
import { QuestionRow } from "../types/RowTypes";
import XLSForm from "../types/XLSForm";
import evaluateNodeColumn from "./odk-formulas/evaluation/evaluateNodeColumn";
import ODKFormulaEvaluationContext from "./odk-formulas/evaluation/ODKFormulaEvaluationContext";
import ODKFormulaEvaluationResult from "./odk-formulas/evaluation/ODKFormulaEvaluationResult";
import { getNodeAbsolutePath } from "./odk-formulas/evaluation/XPath";

export type NodeToValueFunctionOptions = {
  key: string;
  node: ODKNode;
  xlsForm: XLSForm;
  context: ODKFormulaEvaluationContext;
  evaluatedAnswer: unknown;
};

export type NodeToValueFunction = (
  options: NodeToValueFunctionOptions
) => Record<string, unknown>;

type ColumnName = "relevant" | "calculation" | "required";
const columnNames: ColumnName[] = ["calculation", "required", "relevant"];

// export interface ITreeNode {
//   name: string;
//   childNodes: Array<IResultNode>;
//   results?: Record<ColumnName, ODKFormulaEvaluationResult>;
// }

export function getEvaluatedNodeResult(
  node: ODKNode,
  context: ODKFormulaEvaluationContext,
  transform: (result: ITreeNode<ODKNode>) => ITreeNode<ODKNode>
): ITreeNode<ODKNode> {
  if (node.children.length === 0) {
    const fallbacks = {
      relevant: true,
      calculation: node.answer,
      required: false,
    };

    columnNames.forEach((columnName) => {
      const evaluatedResult = evaluateNodeColumn(
        node,
        context,
        columnName,
        fallbacks[columnName]
      );
      node.evaluatedResults[columnName] = evaluatedResult;
      if (evaluatedResult.state === "success") {
        node.evaluatedResults[columnName] = evaluatedResult;
        if (columnName === "calculation") {
          const result = evaluatedResult.result;
          if (
            typeof result === "string" ||
            typeof result === "number" ||
            typeof result === "boolean" ||
            result === undefined ||
            result instanceof Date
          ) {
            node.answer = evaluatedResult.result;
          }
        }
      }
    });

    return transform({
      id: getNodeAbsolutePath(node).join("."),
      label: node.row.name,
      childNodes: [],
      nodeData: node,
    });
  }

  return transform({
    id: getNodeAbsolutePath(node).join("."),
    label: node.row.name,
    childNodes: node.children.map((childNode) =>
      getEvaluatedNodeResult(childNode, context, transform)
    ),
    nodeData: node,
  });
}

export default function getEvaluatedXLSFormResult(
  xlsForm: XLSForm,
  context: ODKFormulaEvaluationContext,
  transform: (result: ITreeNode<ODKNode>) => ITreeNode<ODKNode>
) {
  return getEvaluatedNodeResult(xlsForm.rootSurveyGroup, context, transform);
}
