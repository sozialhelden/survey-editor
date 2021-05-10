export function addIndefiniteArticle(noun: string) {
  const article = ["a", "e", "i", "o", "u"].includes(noun.slice(0, 1))
    ? "an"
    : "a";

  return `${article} ${noun}`;
}
