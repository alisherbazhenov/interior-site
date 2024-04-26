// let i = 0;
// let sum = 0;
// while (i < 10) {
// 	i++;
// 	if (i % 4 === 0) {
// 		continue;
// 	}
// 	sum += i;
// }
// console.log(sum);
// while (true) {
// 	const msg = prompt('Введите сообщение');
// 	if (msg === 'continue') {
// 		continue;
// 	}
// 	console.log(msg);
// 	if (msg === 'break') {
// 		break;
// 	}
// }

// for (let mounthNumber = 1; mounthNumber <= 12; mounthNumber++) {
// 	if (mounthNumber >= 1 && mounthNumber <= 2 || mounthNumber === 12) {
// 		console.log('зима');
// 	} else if (mounthNumber >= 3 && mounthNumber <= 5) {
// 		console.log('весна');
// 	} else if (mounthNumber >= 6 && mounthNumber <= 8) {
// 		console.log('лето');
// 	} else if (mounthNumber >= 9 && mounthNumber <= 11) {
// 		console.log('осень');
// 	}
// }


// let result = 0;
// while (true) {
// 	let value = Number(prompt('Введите число'));
// 	if (!value) {
// 		break;
// 	}
// 	result += value;
// }
// console.log(result);

// var some = 0; // Изначально ноль

// while (some < 10) { // Работает пока меньше 10
// 	some++; // В каждой итерации увеличиваем на 1
// 	if (some % 2 == 0) // Если четное, то пропускаем число
// 		continue; // Выход из цикла

// 	console.log(some); // Вывод в консоль
// }

// let day = 7;
// for (let i = 1; i < 31; i++) {
// 	if (i % day !== 0) {
// 		continue;
// 	}
// 	console.log(`сегодня пятница, число ${i}`);
// }

// for (let i = 0; i < 10; i++) {
// 	if (i % 2 === 0) {
// 		continue;
// 	}
// 	console.log(i);
// }


// Загадки функции
// function riddle(question, answer) {
// 	let userAnswer = prompt(question);
// 	if (userAnswer === answer) {
// 		console.log('угадал');
// 	} else {
// 		console.log('не угадал');
// 	}
// }
// riddle('1', 'Luk');
// riddle('2', 'Elka');

// -------
// function setName(name = 'Пользователь') {
// 	console.log(name);
// }
// setName('Петя');
// setName('');
// setName('Вася');


// ---------------------------------
// стрелочные функции
// nfn  +  Tab
// вариант 1
// const sum = (a, b) => {
// 	let res = a + b;
// 	return res;
// }
// console.log(sum(4, 5));

// вариант 2
// const sum = (a, b) => a + b;
// console.log(sum(5, 7));


// let name = 'fil';
// let showmMassage = () => {
// 	let massage = `Привет ${name}`;
// 	console.log(massage);
// }
// showmMassage();

// nfn  +  Tab
// задачка
// const puzzle = (a, b) => {
// 	if (a < b) {
// 		return a + b;
// 	} else {
// 		return a * b;
// 	}
// }
// console.log(puzzle(45, 50));


// Практика
// Обычный обьект и обычная функция
// const dog = {
// 	name: 'Шарик',
// 	breed: 'корги',
// 	weight: 6,
// 	age: 2
// }

// const bark = (dog) => {
// 	console.log(`${dog.name} любит лаять: Гав!`);
// }
// bark(dog);

// Обьеденяем их двоих в Методы обьекта
// const dog = {
// 	name: 'Шарик',
// 	breed: 'корги',
// 	weight: 6,
// 	age: 2,
// 	bark: function () {
// 		console.log(`${dog.name} любит лаять: Гав!`);
// 	}
// }
// dog.bark();

// Метод того же обьекта в сокращенном варианте
// const dog = {
// 	name: 'Шарик',
// 	breed: 'корги',
// 	weight: 6,
// 	age: 2,
// 	bark() {
// 		console.log(`${dog.name} любит лаять: Гав!`);
// 	}
// }
// dog.bark();

// const user = {
// 	name: 'Alisher',
// 	age: 35,
// 	city: 'Saint-Petersburg',
// 	getInfo() {
// 		console.log(`Пользователь ${user.name}, возраст ${user.age}, проживает в городе ${user.city}`);
// 	}
// }
// user.getInfo();

// либо так 
// const user = {
// 	name: 'Alisher',
// 	age: 35,
// 	city: 'Saint-Petersburg',
// 	getInfo() {
// 		return `Пользователь ${user.name}, возраст ${user.age}, проживает в городе ${user.city}`;
// 	}
// }
// console.log(user.getInfo());

// ---------------------

// function getRectangleArea() {
// 	return this.width * this.height;
// }
// function getRectanglePerimeter() {
// 	return this.width * 2 + this.height * 2;
// }

// const square1 = {
// 	width: 4,
// 	height: 5,

// 	getArea: getRectangleArea,
// 	getPerimeter: getRectanglePerimeter,
// };

// const square2 = {
// 	width: 7,
// 	height: 3,

// 	getArea: getRectangleArea,
// 	getPerimeter: getRectanglePerimeter,
// };

// console.log(square1.getArea());
// console.log(square1.getPerimeter());
// console.log(square2.getArea());
// console.log(square2.getPerimeter());


// -------------------------------------------------------------
// 2.6 Массивы

// let userAdmin = {
// 	age: 35,
// 	name: 'Alisher'
// };
// userAdmin.isAdmin = true;
// delete userAdmin.age;
// console.log(userAdmin);


// Также в JS существует метод forEach(), с помощью которого мы можем перебирать элементы массива:

// const numbs = [2, 4, 5, 6, 8];
// numbs.forEach((el) => {
// 	console.log(el);
// });

// --------------------------------------------
/*До этого мы выводили в консоль значение, которое хранится в массиве. Но что делать, если нам необходимо вывести индекс элемента?
Это можно сделать так:*/

// const numbs = [2, 4, 5, 6, 8];
// numbs.forEach((el, index) => {
// 	console.log(`${index}: ${el}`);
// });

// --------------------------------------------
// Рассмотрим случай, когда нам нужно выводить не только элемент и индекс, но и полностью сам массив на каждой итерации:
// const numbs = [2, 4, 5, 6, 8];
// numbs.forEach((el, index, arr) => {
// 	console.log(`${index}: ${el}, массив: ${arr}`);
// });


// ------------------------------------
// const numbs = [2, 4, 5, 6, 8];

// for (let i = 0; i < numbs.length; i++) {
// 	if (numbs[i] == 5) break;
// 	console.log(numbs[i]);
// }


// методы split() sort() join()
// let greetings = 'Hello!';
// let arrGreetings = greetings.split('');
// console.log(arrGreetings);
// склейка
// greetings = arrGreetings.join('');
// console.log(greetings);

// let numbs = [2, 4, 5, 8];
// let numbsJoin = numbs.join(' ');
// console.log(numbsJoin);

// ------------------------------------
// методы массива pop() push() shift() unshift()
// products.pop() - удаляет последний элемент массива и возвращает его
// products.push('Комод') - добавляет элемент в конец массива
// products.unshift('Комод') - добавляет элемент в начало массива
// products.shift('Комод') - удаляет начальный элемент и возвращает его


// ------------------------------------
// Продвинутый методы массива

// filter() map() reduce()
// filter()
// новый массив с числами меньше либо равно 12
// const age = [11, 10, 9, 12, 14, 17, 5, 21];

// const result = age.filter(item => item >= 12);
// console.log(result);

// map()
// зарплата с вычетом налога в 13%
// const salary = [110000, 10000, 90000, 120000, 140000, 170000, 50000, 210000];
// let withoutTax = salary.map(item => (item - item * 0.13));
// console.log(withoutTax);

// reduce() перебор все значений
// Допустим хочу сложить все элементы массива
// const arr = [11, 10, 9, 12, 14, 13, 5, 21];

// let result = arr.reduce((intermedite, value) => intermedite + value);
// console.log(result);

// ------------------------------------
// многомерный массив
// let arr = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ];
// console.log(arr[1][2]);


// ------------------------------------
// перебор массива с помощью for of
// let products = ['кресло', 'стул', 'стол'];

// for (let item of products) {
// 	console.log(item);
// }

// ------------------------------------
// перебор многомерного массива с помощью for of
// let arr = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ];

// for (item of arr) {
// 	for (element of item) {
// 		console.log(element);
// 	}
// }

// ------------------------------------
// метод includes 
// let numbers = [1, 2, 3, 4, 5, 6];

// let search = numbers.includes(5);
// console.log(search); // true


// ------------------------------------
// Оператор spread (...)
// let arrSum = [4, 7];
// const sum = (a, b) => {
// 	let result = a + b;
// 	return result;
// }
// console.log(sum(...arrSum));

// ------------------------------------
// let arr = [1, 2, 3, 4, 5]
// let max = Math.max(...arr);
// console.log(max);

// ------------------------------------
// function funcSum(...arrSum) {
// 	let sum = 0;
// 	for (item of arrSum) {
// 		sum += item;
// 	}
// 	return sum;
// }
// funcSum(3, 4, 5);

// ------------------------------------
// оператор (...rest)
// const arrSum = [3, 45, 65, 5, 4];

// const sum = (a, b, ...rest) => {
// 	let result = a + b;
// 	console.log(result);
// 	console.log(rest);
// }

// sum(...arrSum); // 47, [65, 5, 4]



// ------------------------------------
// Задача с урока 2.6

/* Сейчас в нашем объекте newspaper есть свойства:
sports и sportsWriters, эта пара свойств относится к одному разделу - sports.
Объедините их внутри newspaper в один объект sports со свойствами title и writers.
То же самое нужно проделать и с парами business и businessWriters, movies и moviesWriters. */

// const newspaper = {
// 	sports: 'ARod Hits Home Run',
// 	sportsWriters: ['Miramon Nuevo', 'Rick Reilly', 'Woddy Paige'],
// 	business: 'GE Stock Dips Again',
// 	businessWriters: ['Adam Smith', 'Albert Humphrey', 'Charles Handy'],
// 	movies: 'Superman Is A Flop',
// 	moviesWriters: ['Rogert Ebert', 'Andrew Sarris', 'Wesley Morris'],
// }

// const newspaper = {
// 	sports: {
// 		title: 'ARod Hits Home Run',
// 		writers: ['Miramon Nuevo', 'Rick Reilly', 'Woddy Paige']
// 	},
// 	business:
// 	{
// 		title: 'GE Stock Dips Again',
// 		writers: ['Adam Smith', 'Albert Humphrey', 'Charles Handy']
// 	},
// 	movies: {
// 		title: 'Superman Is A Flop',
// 		writers: ['Rogert Ebert', 'Andrew Sarris', 'Wesley Morris']
// 	},
// }

// newspaper.sports.title; // ARod Hits Home Run
// newspaper.business.writers[0]; // Adam Smith
// newspaper['movies']['title']; // Superman Is A Flop



// Простой цикл перебора массива 
// let a = [2, 5, 6, -12, 10, -5, -3];
// let b = [];

// for (let i = 0; i < a.length; i++) {
// 	if (a[i] < 0) {
// 		// b[i] = a[i];
// 		// вернет пустые элементы массива в том числе
// 		b.push(a[i]);
// 		// вернет массив только с элементами отвечающие условию
// 	}
// }
// console.log(a);
// console.log(b);


// Метод filter()
// let arr = [1, -3, 4, 2];

// let arrOdd = arr.filter(function (el, i, arr) {
// 	// нужно вернуть четные числа
// 	// return проверяет на true или false
// 	// не надо писать if
// 	// в return прописывать нужно условие, если условие true, то тек эл присваевается в новый массив
// 	// если условие false, то пропускается
// 	return el % 2 == 0; // true
// })
// console.log(arrOdd);

// Задача 1
// Дана функция 
// callbackWithArrayLength
// , первым аргументом она принимает массив, а вторым — колбэк.

// Код функции не дописан, и она всегда вызывает callback с числом −1, а должна вызывать колбэк с длиной переданного первым аргументом массива.

// Скопируйте этот код в консоль браузера и допишите тело функции так, чтобы код ниже вывел в консоль 
// 1 2 5
//  . Сейчас он выводит 
// -1 -1 -1

// function callbackWithArrayLength(arr, callback) {
// 	console.log(arr);
// 	/* Писать код тут */
// 	callback(arr.length);
// }

// callbackWithArrayLength([1], (length) => {
// 	console.log(length);
// });

// callbackWithArrayLength([1, 1], (len) => {
// 	console.log(len);
// });
// callbackWithArrayLength([1, 1, 1, 1, 1], (l) => {
// 	console.log(l);
// });


// Задача 2
// Колбэк может быть вызван внутри функции несколько раз. Исправьте код функции

// each
// , чтобы в консоль выводились не индексы элементов в массиве, а сами элементы массива. То есть «Глеб», «Олег» и так далее.
// function log(arrItem) {
// 	console.log("Элемент массива:", arrItem);
// }

// function each(arr, cb) {
// 	for (let i = 0; i < arr.length; i++) {
// 		cb(arr[i]);
// 	}
// }

// each(["Глеб", "Олег", "Татьяна", "Платон"], log);


// -----------------------------
// 1
// function square(number) {
// 	return number * number;
// }

// function squareRoot(number) {
// 	return Math.sqrt(number);
// }

// console.log(square(5));
// console.log(squareRoot(36));

// function getSquareArrayElem(arr) {
// 	let output = [];

// 	for (let i = 0; i < arr.length; i++) {
// 		output.push(square(arr[i]))
// 	}

// 	return output;
// }
// console.log(getSquareArrayElem([4, 5, 6]));

// 2
// function getSquareRootArrayElem(arr) {
// 	let result = [];

// 	for (let j = 0; j < arr.length; j++) {
// 		result.push(squareRoot(arr[j]));
// 	}

// 	return result;
// }
// console.log(getSquareRootArrayElem([36, 25, 49]));
// ------------------------------------

// Например, с ее помощью можно решить задачу из начала урока:
// console.log(map([1, 1, 2, 3, 5, 8], (number) => number * 2)); // => [2, 2, 4, 6, 10, 16]
// console.log(map([1, 1, 2, 3, 5, 8], (number) => number + 10)); // => [11, 11, 12, 13, 15, 18]

// ------------------------------------
// Чтобы избавиться от дублирующегося кода, повторим тот же трюк, что мы делали с функцией сложения на предыдущем шаге, вытащим различие в параметр:
// function square(number) {
// 	return number * number;
// }

// function squareRoot(number) {
// 	return Math.sqrt(number);
// }

// function map(arr, ruleFunction) {
// 	const output = [];

// 	for (let i = 0; i < arr.length; i++) {
// 		output.push(ruleFunction(arr[i]));
// 	}

// 	return output;
// }

// console.log(map([1, 4, 9, 16], square)); // => [ 1, 16, 81, 256 ]
// console.log(map([1, 4, 9, 16], squareRoot)); // => [ 1, 2, 3, 4 ]


// setTimeOut()   /   setInterval
// function showAdd() {
// 	alert('купи этот товар по скидке в 90%!!!');
// }
// setTimeout(showAdd, 1000 * 60);

// отмена setTimeout()
// let timerId = setTimeout(...);
// clearTimeout(timerId);

// пример отмены на напоминание о записи
// let timerId = setTimeout(() => console.log("ничего не происходит"), 1000);
// console.log(timerId); // идентификатор таймера

// clearTimeout(timerId);



// Функция для двух объектов (Метод объекта)
// function bark() {
// 	console.log(`${this.name} лает: Гав`);
// }

// let dog1 = {
// 	name: 'Шарик',
// 	age: 4,
// 	bark: bark,
// }
// let dog2 = {
// 	name: 'Тузик',
// 	age: 4,
// 	bark: bark,
// }

// dog1.bark();
// dog2.bark();

