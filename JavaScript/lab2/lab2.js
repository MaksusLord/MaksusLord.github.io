"use strict";

function pow(x, n) {
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    return 1 / pow(x, -n);
  } else {
    return x * pow(x, n - 1);
  }
}


function sumTo(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sumTo(n - 1);
  }
}


function factorial(n) {
  if (n === 0) {
    return 1n;
  } else {
    return BigInt(n) * factorial(n - 1);
  }
}


function fib(n) {
  if (n === 0 || n === 1) {
    return BigInt(n);
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

function compare(x) {
  return function(y) {
    if (y > x) {
      return true;
    } else if (y < x) {
      return false;
    } else {
      return null;
    }
  };
}

function sum(...args) {
  return args.reduce((acc, cur) => acc + cur, 0);
}

