const { StringCalculator } = require("../src/StringCalculator");

describe("StringCalculator Tests", () => {
  let calc;

  beforeEach(() => {
    calc = new StringCalculator();
  });

  // Step 1
  it("returns 0 for empty string", () => {
    expect(calc.add("")).toBe(0);
  });

  it("returns number for single input", () => {
    expect(calc.add("1")).toBe(1);
  });

  it("returns sum of two numbers", () => {
    expect(calc.add("1,2")).toBe(3);
  });

  // Step 2
  it("returns sum for multiple numbers", () => {
    expect(calc.add("1,2,3,4")).toBe(10);
    expect(calc.add("1,2,3,4,5,6,7,8,9,10")).toBe(55);
  });

  // Step 3
  it("supports new line as delimiter along with commas", () => {
    expect(calc.add("1\n2,3")).toBe(6);
  });

  // Step 4
  it("supports custom single-character delimiter", () => {
    expect(calc.add("//;\n1;2")).toBe(3);
    expect(calc.add("//;\n1;2;3")).toBe(6);
  });

  // Step 5
  it("throws error when one negative number is passed", () => {
    expect(() => calc.add("1,-2,3")).toThrow("negatives not allowed: -2");
  });

  // Step 6
  it("throws error when multiple negatives are passed", () => {
    expect(() => calc.add("1,-2,3,-5")).toThrow(
      "negatives not allowed: -2, -5"
    );
  });

  it("works fine if no negatives are present", () => {
    expect(calc.add("1,2,3")).toBe(6);
  });

  // Step 7
  it("tracks how many times add() was called", () => {
    expect(calc.getCalledCount()).toBe(0);
    calc.add("1,2");
    calc.add("3,4");
    expect(calc.getCalledCount()).toBe(2);
  });

  // Step 8
  test("ignores numbers bigger than 1000", () => {
    expect(calc.add("2,1001")).toBe(2);
    expect(calc.add("1000,2,3")).toBe(1005);
  });
});
