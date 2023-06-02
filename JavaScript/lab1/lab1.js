"use strict";

function vozrast_pol() {
    let age,gender;
let age = prompt("Введите ваш возраст:");
let gender = prompt("Введите ваш пол (мужской или женский):");

if (age >= 0 && age <= 17) {
  alert("Вам работать еще рано - учитесь");
} else if (age >= 18 && age <= 59 && gender === "мужской" || age >= 18 && age <= 54 && gender === "женский") {
  alert("Вам еще работать и работать");
} else if (age >= 60 && age <= 64 && gender === "мужской" || age >= 55 && age <= 59 && gender === "женский") {
  alert("Скоро пенсия!");
} else if (age > 65 && gender === "мужской" || age > 60 && gender === "женский") {
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
    let numRows = prompt("Введите количество строк:");

    let row = "";
    
    for (let i = 0; i < numRows; i++) {
      row += "dog\t";
      row += "dog\t";
      row += "dog\t";
      row += "cat\t";
      row += "cat\t";
      row += "dog\t\n";
    
      row += "dog\t";
      row += "dog\t";
      row += "cat\t";
      row += "cat\t";
      row += "dog\t";
      row += "dog\t\n";
    
      row += "dog\t";
      row += "cat\t";
      row += "cat\t";
      row += "dog\t";
      row += "dog\t";
      row += "dog\t\n";
    
      row += "cat\t";
      row += "cat\t";
      row += "dog\t";
      row += "dog\t";
      row += "dog\t";
      row += "dog\t\n";
    }
    
    console.log(row);
}