export const charCounter = (array: string[]): number => {
  let count = 0;
  array.forEach((element) => {
    const set = new Set(element);
    if (set.size !== element.length) {
      count++;
    }
  });
  return count;
};
