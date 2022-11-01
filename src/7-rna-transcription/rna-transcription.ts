const getRNA: Record<string, string> = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};

export function toRna(dna: string) {
  return dna
    .split("")
    .map((nucleotide) => {
      if (getRNA[nucleotide]) {
        return getRNA[nucleotide];
      } else {
        throw new Error("Invalid input DNA.");
      }
    })
    .join("");
}

const pippo = "CIAO".split("");
console.log(pippo);
