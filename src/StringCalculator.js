class StringCalculator {
  constructor() {
    this.callCount = 0;
  }

  add(numbers) {
    this.callCount++;
    if (!numbers) return 0;

    let delimiterRegex = /,|\n/;
    let numStr = numbers;


    const longDelimiterMatch = numbers.match(/^\/\/\[(.+)\]\n/);
    if (longDelimiterMatch) {
      const customDelimiter = longDelimiterMatch[1];
      delimiterRegex = new RegExp(
        customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      ); 
      numStr = numbers.slice(longDelimiterMatch[0].length);
    } else {
      
      const customDelimiterMatch = numbers.match(/^\/\/(.)\n/);
      if (customDelimiterMatch) {
        const customDelimiter = customDelimiterMatch[1];
        delimiterRegex = new RegExp(`[${customDelimiter}\n]`);
        numStr = numbers.slice(customDelimiterMatch[0].length);
      }
    }

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

module.exports = { StringCalculator };
