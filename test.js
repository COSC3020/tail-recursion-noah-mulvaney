// COSC3020 Tail Recursion Exercise
// Noah Mulvaney, nmulvane@uywo.edu
// 26 Mar 2024

// Test code.js

const code = require("./code.js");
const assert = require("assert");

function slow_fib(n) {
  if (n < 2) return 1;
  return slow_fib(n - 1) + slow_fib(n - 2);
}

for (let i = 0; i < 10; ++i) {
  let n = Math.floor(Math.random() * 50);
  assert(slow_fib(n) == code.fib(n));
}
