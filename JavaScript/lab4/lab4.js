
let book1 = {}; // создание пустого объекта
book1.title = 'Book One';
book1.pubYear = 2021;
book1.price = 10.99;

let book2 = { // создание объекта с заданными свойствами
  title: 'Book Two',
  pubYear: 2022,
  price: 12.99
};

for (let prop in book1) { // вывод свойств объекта book1
  console.log(prop + ': ' + book1[prop]);
}

for (let prop in book2) { // вывод свойств объекта book2
  console.log(prop + ': ' + book2[prop]);
}

//2. Добавление метода show к объектам book1 и book2:

book1.show = function() { // добавление метода show к объекту book1
  console.log('Title: ' + this.title + ', Price: ' + this.price);
}

function showBook() { // объявление функции showBook()
  console.log('Title: ' + this.title + ', Price: ' + this.price);
}

book2.show = showBook; // добавление метода show к объекту book2

book1.show(); // вызов метода show() у объекта book1
book2.show(); // вызов метода show() у объекта book2

//3. Функция isEmpty для проверки наличия свойств в объекте:


function isEmpty(obj) {
  for (let prop in obj) {
    return false; // если хоть одно свойство есть, вернуть false
  }
  return true; // если свойств нет, вернуть true
}

console.log(isEmpty(book1)); // false
console.log(isEmpty(book2)); // false

//4. Методы addClass и removeClass для объекта obj:


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

//5. Сортировка массива объектов people по полю age:

let vasya = { name: "Вася", age: 23 };
let masha = { name: "Маша", age: 18 };
let vova = { name: "Вова", age: 12 };
let people = [vasya, masha, vova];

people.sort((a, b) => a.age - b.age); // сортировка по возрасту

console.log(people); // [{name: 'Вова', age: 12}, {name: 'Маша', age: 18}, {name: 'Вася', age: 23}]


//6. Функция getSecondsToday для получения количества секунд с начала текущего дня:

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