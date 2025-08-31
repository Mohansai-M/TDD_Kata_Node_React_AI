String Calculator – TDD Implementation

Overview:
This project implements a String Calculator in JavaScript following a Test-Driven Development (TDD) approach. It demonstrates stepwise feature development, from handling simple inputs to supporting complex custom delimiters, negative number handling, and large number exclusions.

This is a clean, test-driven solution to the **String Calculator Kata**, completed as part of the **Incubyte recruitment process**. The implementation strictly follows the TDD cycle (**Red → Green → Refactor**), with a strong focus on:

- Writing small, incremental tests
- Clean and predictable logic
- Readable and maintainable code

This project was completed as part of the Incubyte recruitment process.
## ✅ Features Implemented

1. Empty string returns 0 – Calling `add("")` returns `0`.
2. Single number returns the value – Calling `add("5")` returns `5`.
3. Two numbers, comma-delimited, return the sum – Calling `add("1,2")` returns `3`.
4. Multiple numbers, comma-delimited, return the sum – Handles any number of comma-separated numbers.
5. Newline (\n) as a valid delimiter – Supports inputs like `"1\n2,3"` returning `6`.
6. Custom single-character delimiter – Define a custom delimiter at the start using `"//[delimiter]\n"`, e.g., `"//;\n1;2"`.
7. Numbers greater than 1000 are ignored – e.g., `"2,1001"` returns `2`.
8. Support for custom delimiters of any length – `e.g., "//[***]\n1***2***3"` returns `6`.
9. Negative numbers throw an exception – All negative numbers in the input are listed in the error message, e.g., `"1,-2,-5"` throws `"negatives not allowed: -2, -5"`.
10. Support for multiple delimiters – e.g., `"//[*][%]\n1*2%3"` returns `6`.
11. Support for multiple delimiters of any length – e.g., `"//[**][%%]\n1**2%%3"` returns `6`.

🛠 **Technologies Used**
- JavaScript (Node.js) – Core language
- Jest – Unit testing framework
- TDD (Test-Driven Development) – Development methodology

**🧪 TDD Approach**
- Each feature was implemented step by step, starting with a failing test.
- Tests cover edge cases including negative numbers, multiple delimiters, and numbers > 1000.
- Refactoring was done after each passing test to maintain clean code.



