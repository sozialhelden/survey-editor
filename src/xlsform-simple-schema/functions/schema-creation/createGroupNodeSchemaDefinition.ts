import { SchemaDefinition } from "simpl-schema";
import createLeafNodeSchemaDefinition from "./createLeafNodeSchemaDefinition";
import { ODKNode } from "../../types/ODKNode";
import XLSForm from "../../types/XLSForm";
import ODKFormulaEvaluationContext from "../odk-formulas/evaluation/ODKFormulaEvaluationContext";
import { getStringInterpolationFunctionOrString } from "./getStringInterpolationFunctionOrString";
import { getNodeOptionalFunction } from "./getNodeOptionalFunction";

export default function createGroupNodeSchemaDefinition(options: {
  node: ODKNode;
  language: string;
  xlsForm: XLSForm;
  context: ODKFormulaEvaluationContext;
  key: string;
}): Record<string, SchemaDefinition<unknown>> {
  const { node, language, xlsForm, context, key } = options;
  let schemaDefinitions: Record<string, SchemaDefinition<unknown>>;
  const labelString = node.row.label?.[language] || "";
  const definition: Pick<SchemaDefinition<unknown>, "label" | "optional"> = {
    label: getStringInterpolationFunctionOrString(labelString, context, node),
    optional: getNodeOptionalFunction(node, context),
  };
  if (node.row?.type.match(/^begin_repeat$/)) {
    // We're in a repeated section
    const childrenSchemaDefinitions = node.children.map((child) =>
      createGroupNodeSchemaDefinition({
        ...options,
        node: child,
        key: key + ".$." + child.row.name,
      })
    );
    schemaDefinitions = Object.assign(
      { [key]: { ...definition, type: Array } },
      ...childrenSchemaDefinitions
    );
  } else if (
    node.row.type.match(/^begin_group$/) ||
    node === xlsForm.rootSurveyGroup
  ) {
    // We're in a group section or in the root (a special case that has children, but is not of `begin_group` type)
    const childrenSchemaDefinitions = node.children.map((child) =>
      createGroupNodeSchemaDefinition({
        ...options,
        node: child,
        key: key + "." + child.row.name,
      })
    );

    schemaDefinitions = Object.assign(
      { [key]: { ...definition, type: Object } },
      ...childrenSchemaDefinitions
    );
  } else {
    schemaDefinitions = createLeafNodeSchemaDefinition(
      node,
      language,
      xlsForm,
      context,
      key
    );
  }

  console.log(`Schema for key \`${key}\`:`, schemaDefinitions);
  return schemaDefinitions;
}
