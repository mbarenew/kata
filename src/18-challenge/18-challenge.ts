// Implement the findSmallestInterval(numbers) function which returns the smallest interval between two numbers in the array.

function findSmallestInterval(numbers: number[]): number {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  let smallestInterval = sortedNumbers[1] - sortedNumbers[0];
  for (let i = 2; i < sortedNumbers.length; i++) {
    const interval = sortedNumbers[i] - sortedNumbers[i - 1];
    if (interval < smallestInterval) {
      smallestInterval = interval;
    }
  }
  return smallestInterval;
}
