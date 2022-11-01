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

export function decodedValue(colors: string[]): number {
  const initialValue = 0;
  const filteredColors: number[] = colors.slice(0, 2).map((c: string) => {
    return getColor[c] ?? 0;
  });

  try {
    return filteredColors.reduce((prev, current) => {
      const concat = `${prev}${current}`;
      return Number(concat);
    }, initialValue);
  } catch (e) {
    throw e;
  }
}
