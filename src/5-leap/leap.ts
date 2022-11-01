const isDivisibleBy = (divisor: number, year: number) => year % divisor === 0;

export function isLeap(year: number): boolean {
  return (
    isDivisibleBy(4, year) &&
    (!isDivisibleBy(100, year) || isDivisibleBy(400, year))
  );
}
