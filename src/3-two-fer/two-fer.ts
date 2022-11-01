export function twoFer(name?: string): string {
  const result = name ?? "you";
  return `One for ${result}, one for me.`;
}
