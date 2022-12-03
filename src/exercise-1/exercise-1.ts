export const repeatCharCounter = (listString: string[]): number => {
  let counter = 0;
  listString.forEach((str) => {
    const set = new Set(str);
    if (set.size !== str.length) {
      counter++;
    }
  });
  return counter;
};

export const repeatCharCounter2 = (listString: string[]): number => {
  const counter = listString.reduce((prev, current) => {
    const set = new Set(current);
    if (set.size !== current.length) {
      prev++;
    }
    return prev;
  }, 0);

  return counter;
};

export const repeatCharCounter3 = (listString: string[]): number => {
  const counter = listString.filter((str, index) => {
    const set = new Set(str);
    return set.size !== str.length;
  }).length;

  return counter;
};
