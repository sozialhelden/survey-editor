import { compact } from "lodash";
import { SemanticError } from "../../types/Errors";
import { NodeToDefinitionFunctionOptions } from "./createLeafNodeSchemaDefinition";
import { evaluateDynamicChoiceListName } from "./evaluateDynamicChoiceListName";
import { evaluateFilteredChoiceNames } from "./evaluateFilteredChoiceNames";

export default function getAllowedChoiceValues(
  options: NodeToDefinitionFunctionOptions
): string[] | (() => string[]) {
  const choiceListStrings = options.node.typeParameters;
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

  let choiceListNames = compact(
    choiceListStrings.map((choiceListString) => {
      if (choiceListString.trim().startsWith("$")) {
        return evaluateDynamicChoiceListName(
          choiceListString,
          options,
          choicesByName
        );
      } else {
        return choiceListString;
      }
    })
  ).filter((n) => n !== undefined && n !== "");

  // const hasDefinedChoiceListName = choiceListNames.length > 0;
  // if (!hasDefinedChoiceListName) {
  //   const possibleStrings = availableListNames
  //     .map((cl) => `- \`${type} ${cl}\``)
  //     .join("\n");
  //   throw new SemanticError(
  //     `Node \`${options.key}\` is missing a reference to the set of possible answer choices. Its \`type\` cell contains \`${type}\`, but it should be one of these:\n\n${possibleStrings}`
  //   );
  // }

  const choiceObjects = choiceListNames
    .map((n) => choicesByName[n])
    .filter((o) => o !== undefined);
  if (choiceObjects.length !== choiceListNames.length) {
    throw new SemanticError(
      `Node \`${options.key}\` (row #${
        options.node.rowIndex + 2
      }) refers to list names \`${choiceListNames}\`. One of these lists is either not defined in the ‘choices’ worksheet, or could not be loaded correctly. Found list names:\n\n${availableListNames
        .map((n) => `\`${n}\``)
        .join(", ")}`
    );
  }

  const choiceFilterString = options.node.row.choice_filter?.trim();
  if (!choiceFilterString || choiceFilterString === "") {
    return choiceObjects.flatMap((choiceObject) => Object.keys(choiceObject));
  }

  return evaluateFilteredChoiceNames(
    choiceFilterString,
    choiceObjects,
    options.node,
    options.context
  );
}
