// A twin of a word is another word that has the same letters, but in a different order.
function isTwin(a, b) {
  const aLetters = a.toLowerCase().split("");
  const bLetters = b.toLowerCase().split("");
  return aLetters.sort().join("") === bLetters.sort().join("");
}

function average(table) {
  if (!table || table.length === 0) {
    return 0;
  }
  const sum = table.reduce((a, b) => a + b);
  return sum / table.length;
}
