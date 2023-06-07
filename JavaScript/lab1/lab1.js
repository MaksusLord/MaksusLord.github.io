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
  let num = prompt("Введите целое число", "");
  if (num % 100 >= 11 && num % 100 <= 14) {
    switch (num % 100) {
      case 11:
      case 12:
      case 13:
      case 14:
        alert(`На ветке сидит ${num} ворон`)
        break;
    }
  }
  else {
    switch (num % 10) {
      case 0:
        alert(`На ветке сидит ${num} ворон`)
        break;
      case 1:
        alert(`На ветке сидит ${num} ворона`)
        break;
      case 2:
      case 3:
      case 4:
        alert(`На ветке сидит ${num} вороны`)
        break;
      case 5:
      case 6:
      case 7:
      case 9:
        alert(`На ветке сидит ${num} ворон`)
        break;
      default:
        alert(`Число нецелое или это не число`)
        break;
    }
  }
}

function number() {
  let number;

  do {
    number = prompt("Введите число больше 100:", "");
  } while (number <= 100 && number != null && number);

  if (number !== null) {
    alert("Спасибо, вы ввели число больше 100: " + number);
  } else {
    alert("Вы отменили ввод.");
  }
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