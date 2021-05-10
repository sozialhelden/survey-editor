import * as React from "react";

type ConjunctionType = "and" | "or";

type ConjunctionMap<T> = {
  and?: {
    withSerialComma: T;
    withoutSerialComma: T;
  };
  or?: {
    withSerialComma: T;
    withoutSerialComma: T;
  };
};

const conjunctionMapReactNodes: ConjunctionMap<React.ReactNode> = {
  or: {
    // translator: In a comma-separated serial enumeration, this string is the ', or' conjunction before the last word, with a serial comma at the beginning if the language has a serial comma (https://en.wikipedia.org/wiki/Serial_comma).
    withSerialComma: (
      <span className="conjunction" key="conjunction">{`, or `}</span>
    ),
    // translator: Conjunction between two words (like the ‘or’ in ‘humans or animals’). Please don't forget to include necessary spaces.
    withoutSerialComma: (
      <span className="conjunction" key="conjunction">{` or `}</span>
    ),
  },
  and: {
    // translator: In a comma-separated serial enumeration, this string is the ', and' conjunction before the last word, with a serial comma at the beginning if the language has a serial comma (https://en.wikipedia.org/wiki/Serial_comma).
    withSerialComma: (
      <span className="conjunction" key="conjunction">{`, and`}</span>
    ),
    // translator: Conjunction between two words (like the ‘and’ in ‘humans and animals’). Please don't forget to include necessary spaces.
    withoutSerialComma: (
      <span className="conjunction" key="conjunction">{` and `}</span>
    ),
  },
};

const conjunctionMap: ConjunctionMap<string> = {
  or: {
    // translator: In a comma-separated serial enumeration, this string is the ', or' conjunction before the last word, with a serial comma at the beginning if the language has a serial comma (https://en.wikipedia.org/wiki/Serial_comma).
    withSerialComma: `, or `,
    // translator: Conjunction between two words (like the ‘or’ in ‘humans or animals’). Please don't forget to include necessary spaces.
    withoutSerialComma: ` or `,
  },
  and: {
    // translator: In a comma-separated serial enumeration, this string is the ', and' conjunction before the last word, with a serial comma at the beginning if the language has a serial comma (https://en.wikipedia.org/wiki/Serial_comma).
    withSerialComma: `, and`,
    // translator: Conjunction between two words (like the ‘and’ in ‘humans and animals’). Please don't forget to include necessary spaces.
    withoutSerialComma: ` and `,
  },
};

/**
 * Allows to enumerate a list of words as human-readable sentence, localizable. This can allow for
 * easier screen reader accessibility.
 *
 * Inserts a serial comma (‘Oxford’ comma) if appropriate. For this, you need to add localizations
 * to ttag's locales.
 *
 * You can supply your own conjunction used before the last word. If you do that, be sure to
 * translate it!
 *
 * Example usage:
 *
 *     import { getHumanEnumerationReactNode, andConjunction } from './getHumanEnumeration';
 *
 *     <div>
 *       {getHumanEnumerationReactNode([
 *         <strong>t`humans`</strong>,
 *         <em>t`animals`</em>,
 *       ], 'or')}
 *     </div>
 *
 *     => <div><strong>humans</strong> and <em>animals</em></div>
 */
export function getHumanEnumerationReactNode(
  elements: React.ReactNode[],
  conjunctionType: ConjunctionType = "and"
): React.ReactNode[] {
  if (!elements) return [];

  const count = elements.length;

  if (count === 0) {
    return [];
  }

  if (count === 1) {
    return elements;
  }

  if (count === 2) {
    const firstElement = elements[0];
    const secondElement = elements[1];
    const conjunction =
      conjunctionMapReactNodes[conjunctionType]?.withoutSerialComma;
    return [firstElement, conjunction, secondElement];
  }

  const lastElement = elements[elements.length - 1];
  const elementsBeforeLastElement = elements.slice(0, elements.length - 1);
  const commaJoinedElements = elementsBeforeLastElement.reverse().join(", ");
  const conjunction =
    conjunctionMapReactNodes[conjunctionType]?.withSerialComma;
  return [commaJoinedElements, conjunction, lastElement];
}

/**
 * Allows to enumerate a list of words as human-readable sentence, localizable. This can allow for
 * easier screen reader accessibility.
 *
 * Inserts a serial comma (‘Oxford’ comma) if appropriate. For this, you need to add localizations
 * to ttag's locales.
 *
 * You can supply your own conjunction used before the last word. If you do that, be sure to
 * translate it!
 *
 * Example usage:
 *
 *     import { getHumanEnumerationReactNode, andConjunction } from './getHumanEnumeration';
 *
 *     <div>
 *       {getHumanEnumerationReactNode([
 *         'humans',
 *         'animals',
 *       ], 'or')}
 *     </div>
 *
 *     => 'humans and animals'
 */
export function getHumanEnumeration(
  elements: string[],
  conjunctionType: ConjunctionType = "and"
): string {
  if (!elements) return "";

  const count = elements.length;

  if (count === 0) {
    return "";
  }

  if (count === 1) {
    return elements[0];
  }

  if (count === 2) {
    const firstElement = elements[0];
    const secondElement = elements[1];
    const conjunction = conjunctionMap[conjunctionType]!.withoutSerialComma;
    return [firstElement, conjunction, secondElement].join(" ");
  }

  const lastElement = elements[elements.length - 1];
  const elementsBeforeLastElement = elements.slice(0, elements.length - 1);
  const commaJoinedElements = elementsBeforeLastElement.reverse().join(", ");
  const conjunction = conjunctionMap[conjunctionType]!.withSerialComma;
  return [commaJoinedElements, conjunction, lastElement].join(" ");
}
