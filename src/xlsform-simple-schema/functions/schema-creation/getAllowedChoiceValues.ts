import { compact } from "lodash";
import { SemanticError } from "../../types/Errors";
import { ODKNode } from "../../types/ODKNode";
import { XLSForm } from "../../types/XLSForm";
import ODKFormulaEvaluationContext from "../odk-formulas/evaluation/ODKFormulaEvaluationContext";
import { evaluateDynamicChoiceListName } from "./evaluateDynamicChoiceListName";
import { evaluateFilteredChoiceNames } from "./evaluateFilteredChoiceNames";

export default function getAllowedChoiceValues({
  node,
  xlsForm,
  context,
  key,
}: {
  node: ODKNode;
  xlsForm: XLSForm;
  context: ODKFormulaEvaluationContext;
  key: string;
}): string[] | (() => string[]) {
  const choiceListStrings = node.typeParameters;
  const availableListNames = Object.keys(xlsForm.choicesByName);
  const { type } = node.row;
  const firstList = availableListNames[0];
  const hasAvailableChoiceList = firstList !== undefined;
  if (!hasAvailableChoiceList) {
    throw new SemanticError(
      `Node \`${key}\` uses \`${type}\` as its \`type\`, but the ‘choices’ worksheet seems to be empty or invalid. Please define some valid choice lists first.`
    );
  }

  const { choicesByName } = xlsForm;

  let choiceListNames = compact(
    choiceListStrings.map((choiceListString) => {
      if (choiceListString.trim().startsWith("$")) {
        return evaluateDynamicChoiceListName(
          choiceListString,
          { node, xlsForm, context, key },
          choicesByName
        );
      } else {
        return choiceListString;
      }
    })
  ).filter((n) => n !== undefined && n !== "");

  const choiceObjects = choiceListNames
    .map((n) => choicesByName[n])
    .filter((o) => o !== undefined);
  if (choiceObjects.length !== choiceListNames.length) {
    throw new SemanticError(
      `Node \`${key}\` (row #${
        node.rowIndex + 2
      }) refers to list names \`${choiceListNames}\`. One of these lists is either not defined in the ‘choices’ worksheet, or could not be loaded correctly. Found list names:\n\n${availableListNames
        .map((n) => `\`${n}\``)
        .join(", ")}`
    );
  }

  const choiceFilterString = node.row.choice_filter?.trim();
  if (!choiceFilterString || choiceFilterString === "") {
    return choiceObjects.flatMap((choiceObject) => Object.keys(choiceObject));
  }

  return evaluateFilteredChoiceNames(
    choiceFilterString,
    choiceObjects,
    node,
    context
  );
}
