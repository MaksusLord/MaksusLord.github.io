"use strict";

function getDecimal(num) {
  return Math.abs(num - Math.trunc(num));
}

alert(getDecimal(1.23));
alert(getDecimal(-1.23));
alert(getDecimal(1));


function ucFirst(str) {
  if (!str) {
    return '';
  }

  return str[0].toUpperCase() + str.slice(1);
}

alert(ucFirst(''));
alert(ucFirst('привет'));


function checkSpam(str) {
  return str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx');
}

alert(checkSpam('_XxX_'));
alert(checkSpam('__Viagra__'));
alert(checkSpam('test'));


function truncate(str, maxlength) {
  if (str.length <= maxlength) {
    return str;
  }

  return str.slice(0, maxlength - 1) + '…';
}

alert(truncate('Мама мыла раму.', 100));
alert(truncate('Мама мыла раму.', 10));

function camelize(str) {
  return str.split('-').map((word, index) => index === 0 ? word : ucFirst(word)).join('');
}

alert(camelize('var-test-text'));

import { fib } from './lab2.js';

function fibs(n) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(fib(i));
  }

  return arr;
}

alert(fibs(5));

function arrReverseSorted(arr) {
  return arr.slice().sort((a, b) => b - a);
}

alert(arrReverseSorted([1, 3, 2]));

function unique(arr) {
  return [...new Set(arr)];
}

alert(unique([0, 1, 1, 2]));
alert(unique(['a', 'b', 'c', 'c']));