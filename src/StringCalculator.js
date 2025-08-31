class StringCalculator {
  constructor() {
    this.callCount = 0;
  }

  add(numbers) {
    this.callCount++;
    if (!numbers) return 0;

    let delimiters = [",", "\n"];
    let numStr = numbers;


    if (numbers.startsWith("//")) {
      const delimiterSection = numbers.match(/^\/\/(.+)\n/)[1];
      numStr = numbers.split("\n").slice(1).join("\n");

      const customDelimiters = delimiterSection.match(/\[.*?\]/g);
      if (customDelimiters) {
        delimiters = delimiters.concat(
          customDelimiters.map((d) => d.slice(1, -1))
        );
      } else {
        delimiters.push(delimiterSection);
      }
    }


    const delimiterRegex = new RegExp(
      delimiters.map((d) => escapeRegex(d)).join("|")
    );

    const nums = numStr.split(delimiterRegex).map(Number);

    const negatives = nums.filter((n) => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
    }

    return nums
      .filter(n => n <= 1000) 
      .reduce((a, b) => a + b, 0);
  }

  getCalledCount() {
    return this.callCount;
  }
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

module.exports = { StringCalculator };
