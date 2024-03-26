// COSC3020 Tail Recursion Exercise
// Noah Mulvaney, nmulvane@uywo.edu
// 26 Mar 2024

// Test code.js

const code = require("./code.js");
const assert = require("assert");

assert(code.fib(1) == 1);
assert(code.fib(2) == 2);
assert(code.fib(3) == 3);
assert(code.fib(4) == 5);
assert(code.fib(5) == 8);
assert(code.fib(6) == 13);
assert(code.fib(1) == 0); // Should fail