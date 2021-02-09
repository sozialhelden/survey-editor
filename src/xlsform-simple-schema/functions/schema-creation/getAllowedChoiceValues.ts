import { SemanticError } from "../../types/Errors";
import { NodeToDefinitionFunctionOptions } from "./createLeafNodeSchemaDefinition";
import { evaluateDynamicChoiceListName } from "./evaluateDynamicChoiceListName";
import { evaluateFilteredChoiceNames } from "./evaluateFilteredChoiceNames";

export default function getAllowedChoiceValues(
  options: NodeToDefinitionFunctionOptions
): string[] | (() => string[]) {
  const choiceListString = options.node.typeParameters[0];
  const availableListNames = Object.keys(options.xlsForm.choicesByName);
  const { type } = options.node.row;
  const firstList = availableListNames[0];
  const hasAvailableChoiceList = firstList !== undefined;
  if (!hasAvailableChoiceList) {
    throw new SemanticError(
      `Node \`${options.key}\` uses \`${type}\` as its \`type\`, but the ‘choices’ worksheet seems to be empty or invalid. Please define some valid choice lists first.`
    );
  }

  const { choicesByName } = options.xlsForm;

  let choiceListName = choiceListString;
  if (choiceListString.trim().startsWith("$")) {
    choiceListName = evaluateDynamicChoiceListName(
      choiceListString,
      options,
      choiceListName,
      choicesByName
    );
  }

  const hasDefinedChoiceListName =
    choiceListName !== undefined && choiceListName !== "";
  const choiceObject = choicesByName[choiceListName];

  if (!hasDefinedChoiceListName) {
    const possibleStrings = availableListNames
      .map((cl) => `- \`${type} ${cl}`)
      .join("\n");
    throw new SemanticError(
      `Node \`${options.key}\` is missing a reference to the set of possible answer choices. Its \`type\` cell contains \`${type}\`, but it should be one of these:\n\n${possibleStrings}`
    );
  }

  if (!choiceObject) {
    throw new SemanticError(
      `Node ${
        options.key
      } references to list name \`${choiceListName}\`. This list is either not defined in the ‘choices’ worksheet, or could not be loaded correctly. Found list names:\n\n${availableListNames
        .map((n) => `\`${n}\``)
        .join(", ")}`
    );
  }

  const choiceFilterString = options.node.row.choice_filter?.trim();
  if (!choiceFilterString || choiceFilterString === "") {
    return Object.keys(choiceObject);
  }

  return evaluateFilteredChoiceNames(
    choiceFilterString,
    choiceObject,
    options.node,
    options.context
  );
}
