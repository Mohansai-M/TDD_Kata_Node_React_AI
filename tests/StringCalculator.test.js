const { StringCalculator } = require("../src/StringCalculator");

describe("StringCalculator Step 2", () => {
  it("returns 0 for empty string", () => {
    const calc = new StringCalculator();
    expect(calc.add("")).toBe(0);
  });

  it("returns 1 for '1'", () => {
    const calc = new StringCalculator();
    expect(calc.add("1")).toBe(1);
  });

  it("returns 3 for '1,2'", () => {
    const calc = new StringCalculator();
    expect(calc.add("1,2")).toBe(3);
  });

  it("returns 10 for '1,2,3,4'", () => {
    const calc = new StringCalculator();
    expect(calc.add("1,2,3,4")).toBe(10);
  });

  it("returns 55 for numbers 1 to 10", () => {
    const calc = new StringCalculator();
    expect(calc.add("1,2,3,4,5,6,7,8,9,10")).toBe(55);
  });

  it("supports custom single-character delimiter ';'", () => {
    const calc = new StringCalculator();
    expect(calc.add("//;\n1;2")).toBe(3);
  });

  it("supports custom delimiter with multiple numbers", () => {
    const calc = new StringCalculator();
    expect(calc.add("//;\n1;2;3")).toBe(6);
  });

  it("supports default delimiters with multiple numbers", () => {
    const calc = new StringCalculator();
    expect(calc.add("1\n2,3")).toBe(6);
  });
});