// Even word, eache letter occurs even number of times

function solution(S: string) {
  const map = new Map();
  for (let i = 0; i < S.length; i++) {
    const char = S[i];
    const count = map.get(char) || 0;
    map.set(char, count + 1);
  }
  const values = Array.from(map.values());
  const odd = values.filter((v) => v % 2 === 1);
  return odd.length <= 1;
}

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solutionSent(S) {
  const map = new Map();
  for (let index = 0; index < S.length; index++) {
    const counter = map.get(S[index]) ?? 0;
    map.set(S[index], counter + 1);
  }
  const array = Array.from(map.values());
  let counter = 0;
  array.forEach((item) => {
    if (item % 2 === 1) {
      counter++;
    }
  });
  return counter;
}
