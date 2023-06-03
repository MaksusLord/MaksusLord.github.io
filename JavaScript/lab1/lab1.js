"use strict";

function vozrast_pol() {
  let age = prompt("Введите ваш возраст:");
  let gender = prompt("Введите ваш пол (мужчина или женщина):");

  if (age >= 0 && age <= 17) {
    alert("Вам работать ещё рано — учитесь");
  } else if ((age >= 18 && age <= 59 && gender === "мужчина") || (age >= 18 && age <= 54 && gender === "женщина")) {
    alert("Вам ещё работать и работать");
  } else if ((age >= 60 && age <= 64 && gender === "мужчина") || (age >= 55 && age <= 59 && gender === "женщина")) {
    alert("Скоро пенсия!");
  } else if (age > 65 && gender === "мужчина" || age > 60 && gender === "женщина") {
    alert("Вам пора на пенсию");
  } else {
    alert("Да кто ты такой?");
  }
}

function crow() {
    let num = parseInt(prompt("Введите число:"));

    if (num === 1) {
      alert(`На ветке сидит ${num} ворона`);
    } else if (num >= 2 && num <= 4) {
      alert(`На ветке сидят ${num} вороны`);
    } else {
      alert(`На ветке сидит ${num} ворон`);
    }    
}

function number() {
    let num;

    do {
      num = prompt("Введите число больше 100:", "");
    } while (num <= 100 && num !== null);
    
    alert(`Вы ввели число ${num}`);
}

function simple() {
    let n = prompt("Введите число:");

    for (let i = 2; i <= n; i++) {
      let isPrime = true;

      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }

    if (isPrime) {
      console.log(i);
    }
  }
}

function cat_dog() {
  let num = prompt("Введите количество строк: ");
  let k = Math.floor(num / 5);
  let l = num - 5 * k;
  let one = "dog dog dog cat cat dog";
  let two = "dog dog cat cat dog dog";
  let three = "dog cat cat dog dog dog";
  let four = "cat cat dog dog dog dog";
  let five = "cat dog dog dog dog cat";
  var list = [one, two, three, four, five]
  for (let i = 1; i <= k; i++) {
      for (let j = 0; j < 5; j++) console.log(list[j]);
  }
  for (let j = 0; j < l; j++) console.log(list[j]);
}