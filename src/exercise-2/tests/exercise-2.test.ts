import { isWalkValid } from "../exercise-2";

describe("Given a fuction that checks if a walk of people is valid", () => {
  describe("When the walk is valid", () => {
    it("Then should return true", () => {
      const isValid = isWalkValid(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]);
      expect(isValid).toBeTruthy();
    });
  });
  describe("When the walk is invalid", () => {
    it("Then should return false", () => {
      const isValid = isWalkValid(["n", "s", "n", "s", "n", "s", "n", "s", "n", "n"]);
      expect(isValid).toBeFalsy();
    });
  });
});
