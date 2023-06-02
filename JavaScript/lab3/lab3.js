"use strict";

import { fib } from './lab2.js';

export function getDecimal(num) {
  return Math.abs(num - Math.trunc(num));
}

export function ucFirst(str) {
  if (!str) {
    return '';
  }

  return str[0].toUpperCase() + str.slice(1);
}

export function checkSpam(str) {
  return str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx');
}

export function truncate(str, maxlength) {
  if (str.length <= maxlength) {
    return str;
  }

  return str.slice(0, maxlength - 1) + '…';
}

export function camelize(str) {
  return str.split('-').map((word, index) => index === 0 ? word : ucFirst(word)).join('');
}

export function fibs(n) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(fib(i));
  }

  return arr;
}

export function arrReverseSorted(arr) {
  return arr.slice().sort((a, b) => b - a);
}


export function unique(arr) {
  return [...new Set(arr)];
}
