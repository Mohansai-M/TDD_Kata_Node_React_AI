const { StringCalculator } = require("../src/StringCalculator");

describe("StringCalculator Step 1", () => {
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
});
