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
    
  let num=prompt("Введите число");
  let k;
  var lst=[];
  for( let i = 2;  i<=num; i++)
  {
      k=0
      for (let j=2; j<i; j++)
      {
          if (i%j==0) k+=1;
      }
      if (k==0)
      {
          lst.push(i)
      }
  }
  alert("Все простые числа до " +num+ ": " +lst);
  
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