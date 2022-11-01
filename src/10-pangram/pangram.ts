export function isPangram(sentence: string): boolean {
  const regex = /([a-z])(?!.*\1)/g;

  return (sentence.toLowerCase().match(regex) || []).length === 26;
}
