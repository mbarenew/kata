import { repeatCharCounter3 } from "../exercise-1";

describe("Give a char counter function", () => {
  describe("When the string array has not occurrences", () => {
    it("Should return 0", () => {
      const result = repeatCharCounter3(["a", "b", "c"]);
      expect(result).toBe(0);
    });
  });

  describe("When the string array has 1 occurrence", () => {
    it("Should return 1", () => {
      const result = repeatCharCounter3(["a", "b", "cc"]);
      expect(result).toBe(1);
    });
  });

  describe("When the string array has 2 occurrences", () => {
    it("Should return 2", () => {
      const result = repeatCharCounter3([
        "AABBCCDDDDD",
        "123",
        "xyz",
        "qwertt",
      ]);
      expect(result).toBe(2);
    });
  });
});
