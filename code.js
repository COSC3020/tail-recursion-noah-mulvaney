// COSC3020 Tail Recursion Exercise
// Noah Mulvaney, nmulvane@uywo.edu
// 26 Mar 2024

// Fibonacci numbers with tail recursion

function fibr(n, sum, old) {
  if (n < 2) return sum;
  return fibr(n - 1, sum + old, sum);
}

function fib(n) {
  return fibr(n, 1, 1);
}

module.exports = {fib};
