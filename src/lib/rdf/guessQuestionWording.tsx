import { humanize, singularize, underscore } from "inflection";
import { capitalize, isEqual } from "lodash";
import { addIndefiniteArticle } from "../addIndefiniteArticle";
import { getHumanEnumeration } from "../getHumanEnumeration";

export default function guessQuestionWording(
  isClass: boolean,
  className: string,
  propertyOrAncestorClassName: string,
  propertyTypes: string[]
) {
  const humanClassName = humanize(underscore(className)).toLowerCase();
  const humanPropertyOrAncestorClassName = humanize(
    underscore(propertyOrAncestorClassName)
  )
    .toLowerCase()
    .replaceAll(/\b(\w)(?: |\b)/g, (m) => m.toUpperCase().trim());

  if (isClass) {
    if (className === propertyOrAncestorClassName) {
      return `Let’s collect information about this ${humanClassName}.`;
    }
    if (propertyOrAncestorClassName === "Thing") {
      return `Let’s collect some basic information.`;
    }
    return `Let’s describe this ${humanClassName} as ${addIndefiniteArticle(
      humanPropertyOrAncestorClassName
    )}.`;
  }

  const humanPropertyName = humanPropertyOrAncestorClassName;

  if (isEqual(propertyTypes.sort(), ["DateTime", "Time"])) {
    return `When is the ${humanPropertyName}?`;
  }

  if (
    isEqual(propertyTypes.sort(), ["Number", "QuantitativeValue"]) ||
    isEqual(propertyTypes.sort(), ["Integer", "QuantitativeValue"]) ||
    isEqual(propertyTypes, ["Integer"]) ||
    isEqual(propertyTypes, ["Number"])
  ) {
    return `What is the ${humanPropertyName}?`;
  }

  const isBoolean = propertyTypes.includes("Boolean");

  const propertyWords = humanPropertyName.split(" ");
  const firstPropertyWord = propertyWords[0];
  const lastPropertyWord = propertyWords[propertyWords.length - 1];

  const simpleMappings: Record<string, () => string> = {
    sameAs: () =>
      `Under which web addresses can a search engine find Linked Data about this ${humanClassName}?`,
    url: () =>
      `What is the main web address of this specific ${humanClassName}?`,
    mainEntityOfPage: () =>
      `Which websites describe this specific ${humanClassName}?`,
  };
  const simpleMapping = simpleMappings[propertyOrAncestorClassName]?.();
  if (simpleMapping) {
    return simpleMapping;
  }

  if (["of", "in", "by"].includes(lastPropertyWord)) {
    return `Is this ${humanClassName} ${addIndefiniteArticle(
      propertyWords.join(" ")
    )} some ${getHumanEnumeration(
      propertyTypes.map((t) => humanize(underscore(t)).toLowerCase()),
      "or"
    )}?`;
  }

  if (firstPropertyWord === "has") {
    if (isBoolean) {
      return `Does this ${humanClassName} have ${addIndefiniteArticle(
        propertyWords.slice(1).join(" ")
      )}?`;
    }
    return `Add ${addIndefiniteArticle(propertyWords.slice(1).join(" "))}`;
  }

  if (firstPropertyWord === "knows") {
    if (isBoolean) {
      return `Does this ${humanClassName} know ${propertyWords
        .slice(1)
        .join(" ")}?`;
    }
    return `Add that this ${humanClassName} knows ${propertyWords
      .slice(1)
      .join(" ")}…`;
  }

  if (firstPropertyWord === "makes") {
    if (isBoolean) {
      return `Does this ${humanClassName} make ${propertyWords
        .slice(1)
        .join(" ")}?`;
    }
    return `Add ${addIndefiniteArticle(
      propertyWords.slice(1).join(" ")
    )} that this ${humanClassName} makes`;
  }

  if (isBoolean) {
    if (firstPropertyWord === "is") {
      return `Is this ${humanClassName} ${propertyWords.slice(1).join(" ")}?`;
    }
    return `${capitalize(humanPropertyName)}?`;
  }

  const isPlural = singularize(firstPropertyWord) !== firstPropertyWord;

  if (isPlural) {
    return `Add ${humanPropertyName}`;
  }

  return `Add ${humanPropertyName}`;
}
