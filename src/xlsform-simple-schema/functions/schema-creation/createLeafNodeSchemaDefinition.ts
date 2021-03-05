import { SchemaDefinition } from "simpl-schema";
import { ODKNode } from "../../types/ODKNode";
import { XLSForm } from "../../types/XLSForm";
import ODKFormulaEvaluationContext from "../odk-formulas/evaluation/ODKFormulaEvaluationContext";
import { getNodeOptionalFunction } from "./getNodeOptionalFunction";
import { getStringInterpolationFunctionOrString } from "./getStringInterpolationFunctionOrString";
import { questionTypesToSchemaGenerators } from "./questionTypesToSchemaGenerators";

export type NodeToDefinitionFunctionOptions = {
  key: string;
  node: ODKNode;
  xlsForm: XLSForm;
  context: ODKFormulaEvaluationContext;
};

export type NodeToDefinitionFunction<T> = (
  options: NodeToDefinitionFunctionOptions
) => Record<string, SchemaDefinition<T>>;

export default function createLeafNodeSchemaDefinition(
  node: ODKNode,
  language: string,
  xlsForm: XLSForm,
  context: ODKFormulaEvaluationContext,
  key: string
): Record<string, SchemaDefinition<unknown>> {
  const { row } = node;

  if (!row) {
    throw new Error("Node needs an associated row for creating a schema.");
  }

  const labelString = row.label?.[language] || "";
  const defaults = {
    type: String,
    label: getStringInterpolationFunctionOrString(labelString, context, node),
    optional: getNodeOptionalFunction(node, context),
  };

  const schemaGeneratorFunction = questionTypesToSchemaGenerators[node.type];
  if (!schemaGeneratorFunction) {
    throw new Error(
      `Could not find schema generator for node type ${JSON.stringify(row)}`
    );
  }
  const schema = schemaGeneratorFunction({ key, node, xlsForm, context });
  const firstField = schema[Object.keys(schema)[0]];
  Object.assign(firstField, defaults, { ...firstField });
  // console.log('Schema for node', JSON.stringify(node.row.name), ':', schema);
  return schema;
}
