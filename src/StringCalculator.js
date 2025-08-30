class StringCalculator {
  constructor() {
    this.callCount = 0;
  }

  add(numbers) {
    this.callCount++;
    if (!numbers) return 0;
    const nums = numbers.split(/,|\n/).map(Number);
    return nums.reduce((a, b) => a + b, 0);
  }

  getCalledCount() {
    return this.callCount;
  }
}

module.exports = { StringCalculator };
