"use strict";

function pow() {
  function pow(x, n) {
    if (n === 0) {
      return 1;
    } else if (n < 0) {
      return 1 / pow(x, -n);
    } else {
      return x * pow(x, n - 1);
    }
  }
  
  let x = prompt("Введите число:");
  let n = prompt("Введите степень:");
  
  alert(pow(x, n));
}

function sumTo() {
  function sumTo(n) {
    if (n === 1) {
      return 1;
    } else {
      return n + sumTo(n - 1);
    }
  }
  
  alert(sumTo(n));
}

function factorial() {
  function factorial(n) {
    if (n === 0) {
      return 1n;
    } else {
      return BigInt(n) * factorial(n - 1);
    }
  }
  
  alert(factorial(n));
}

function fib() {
  function fib(n) {
    if (n === 0 || n === 1) {
      return BigInt(n);
    } else {
      return fib(n - 1) + fib(n - 2);
    }
  }
  
  alert(fib(100));
}

function compare() {
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
  
  alert(compare(5)(4));
  alert(compare(5)(5));
  alert(compare(5)(6));
}

function sum() {
  function sum(...args) {
    return args.reduce((acc, cur) => acc + cur, 0);
  }
  
  alert(sum());
  alert(sum(1));
  alert(sum(1, 2));
}