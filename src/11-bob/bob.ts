export function hey(message: string): string {
  const isQuestion = message.trim().endsWith("?");
  const isYelling = message.toUpperCase() === message && /[A-Z]/.test(message);
  const isSilence = message.trim() === "";

  if (isYelling && isQuestion) {
    return "Calm down, I know what I'm doing!";
  } else if (isYelling) {
    return "Whoa, chill out!";
  } else if (isQuestion) {
    return "Sure.";
  } else if (isSilence) {
    return "Fine. Be that way!";
  }

  return "Whatever.";
}
