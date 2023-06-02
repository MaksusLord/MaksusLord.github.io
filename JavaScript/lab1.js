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

function vozrast_pol() {


    
}