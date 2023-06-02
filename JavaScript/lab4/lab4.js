// 1-3
function endBook {
"use strict";
    function isEmpty(obj) {
      return obj.hasOwnProperty()
    }
    let book1 = new Object(); // синтаксис "конструктор объекта"
    book1 = {
      title: "13 drygalei oyshena",
      pubYear: 2009,
      price: 2847,
      show: function () {
        console.log(this.title);
        console.log(this.price);
      }
    };
    console.log(isEmpty(book1));
    let book2 = new Object();
    book2.title = '10 negritat';
    book2.pubYear = 1908;
    book2.price = 200;
    for (let i in book2) console.log(book2[i]);
    console.log(isEmpty(book2));
    book1.show();
    book2.show = function showBook() {
      console.log(this.title);
      console.log(this.price);
    }
    book2.show();
} 

//4. Методы addClass и removeClass для объекта obj:

    function className {
let obj = {
  className: 'open menu'
};

obj.addClass = function(cls) { // метод добавления класса
  let classes = this.className.split(' '); // получаем массив классов
  if (classes.indexOf(cls) === -1) { // если класс еще не добавлен
    classes.push(cls); // добавляем класс в массив
    this.className = classes.join(' '); // сохраняем изменения в объекте
  }
  return this; // возвращаем сам объект
};

obj.removeClass = function(cls) { // метод удаления класса
  let classes = this.className.split(' '); // получаем массив классов
  let index = classes.indexOf(cls); // ищем индекс класса
  if (index !== -1) { // если класс найден
    classes.splice(index, 1); // удаляем класс из массива
    this.className = classes.join(' '); // сохраняем изменения в объекте
  }
  return this; // возвращаем сам объект
};

obj.addClass('new'); // добавляем класс
console.log(obj.className); // 'open menu new'
obj.addClass('open'); // класс уже есть, не добавляем
console.log(obj.className); // 'open menu new'
obj.removeClass('menu'); // удаляем класс
console.log(obj.className); // 'open new'

    }

//5. Сортировка массива объектов people по полю age:
function people_age {
let vasya = { name: "Вася", age: 23 };
let masha = { name: "Маша", age: 18 };
let vova = { name: "Вова", age: 12 };
let people = [vasya, masha, vova];

people.sort((a, b) => a.age - b.age); // сортировка по возрасту

console.log(people); // [{name: 'Вова', age: 12}, {name: 'Маша', age: 18}, {name: 'Вася', age: 23}]
}

//6. Функция getSecondsToday для получения количества секунд с начала текущего дня:

function getDate(date) {

    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
  
    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
  
    var yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;
  
    return dd + '.' + mm + '.' + yy;
  }
  // 7
  function formatDate(){
  var d = new Date(2003, 08, 29); // 29 Сент 2003
  console.log( formatDate(d) ); // '29.09.03'
  let now = new Date();
let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
console.log(`Сегодня ${formatDate(today)}`)
}