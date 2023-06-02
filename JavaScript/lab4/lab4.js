// 1-3
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

//4. Методы addClass и removeClass для объекта obj:

let obj = {
    className: 'open menu'
}

obj.addClass = function addClass(cls) {
    let arr = this.className.split(" ");
    if (!arr.includes(cls)) {
        arr.push(cls)
    }
    this.className = arr.join(" ");// присваеваем свойству объекта, новый список классов.
}

obj.addClass('NEW'); // open menu new
obj.addClass('Zdravstvyite'); // open menu new Zdravstvyite
obj.addClass('open');  // без изменений 

console.log(obj.className);

obj.removeClass = function removeClass(cls) {
    let arr = this.className.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == cls) {
            arr.splice(i, 1);
            i--;
        }
    }
    obj.className = arr.join(' ');
}

obj.removeClass('Sashenykaaa'); // без изменений
obj.removeClass('NEW'); // open menu Zdravstvyite
obj.removeClass('open'); // menu Zdravstvyite

console.log(obj.className);

//5. Сортировка массива объектов people по полю age:
let vasya = { name: "Вася", age: 23 };
let masha = { name: "Маша", age: 18 };
let vova = { name: "Вова", age: 12 };
let people = [ vasya , masha , vova ];
function Sorted(a, b) {
            return a.age - b.age;
        }
        people.sort(Sorted);

        for (let i in people) console.log(people[i]);

//6. Функция getSecondsToday для получения количества секунд с начала текущего дня:

function getSecondsToday() {
    let now = new Date();
  
    // создаём объект с текущими днём/месяцем/годом
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
    let diff = now - today; // разница в миллисекундах
    return Math.round(diff / 1000); // получаем секунды
  }
  
  console.log( getSecondsToday() );
  // 7
  function formatDate(date) {

    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
  
    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
  
    var yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;
  
    return dd + '.' + mm + '.' + yy;
  }
  
  var d = new Date(2003, 08, 29); // 29 Сент 2003
  console.log( formatDate(d) ); // '29.09.03'
  let now = new Date();
let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
console.log(`Сегодня ${formatDate(today)}`)
