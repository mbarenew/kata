const getColor: Record<string, number> = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

export function decodedResistorValue(colors: string[]): string {
  const [firstColor, secondColor, thirdColor] = colors.slice(0, 3);
  const duoValue = `${getColor[firstColor]}${getColor[secondColor]}`;
  const thirdValue = getColor[thirdColor];
  const unit = thirdValue >= 2 ? "kiloohms" : "ohms";

  const value = Number(duoValue) * 10 ** thirdValue;

  return Number.isInteger(value / 1000)
    ? `${value / 1000} ${unit}`
    : `${value} ${unit}`;
}
