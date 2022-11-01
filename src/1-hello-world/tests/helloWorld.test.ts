import { hello } from "../helloWorld";

describe("Given a hello function", () => {
  describe("When the function is called", () => {
    it("should prints Hello, World!", () => {
      expect(hello()).toEqual("Hello, World!");
    });
  });
});
