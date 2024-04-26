// Методы массива forEach, split, join, sort, pop, push, shift, unshift
// Продвинутые методы filter() идет в комбинации со стрелочной функцией

// forEach()
// const numbs = [2, 4, 5, 6, 8];

// numbs.forEach((el) => {
// 	console.log(el);
// });
// -------------------------------------------------------------

// const numbs = [2, 4, 5, 6, 8];

// numbs.forEach((el, index) => {
// 	console.log(`${index}: ${el}`);
// });
// -------------------------------------------------------------

// const numbs = [2, 4, 5, 6, 8];

// numbs.forEach((el, index, arr) => {
// 	console.log(`${index}: ${el}, массив: ${arr}`);
// });
// -------------------------------------------------------------

// for of
// const numbs = [2, 4, 5, 6, 8];

// for (index of numbs) {
// 	console.log(index);
// }
// -------------------------------------------------------------

// for in
// const numbs = [2, 4, 5, 6, 8];

// for (index in numbs) {
// 	console.log(index);
// }
// -------------------------------------------------------------

// forEach() с ошибками
// const numbs = [2, 4, 5, 6, 8];

// numbs.forEach((el) => {
// 	if (el == 5) break;
// 	console.log(el);
// }); // выдаст ошибку, return, break, cintinue не работают в js
// -------------------------------------------------------------


// split() / join()

// let arr = ['hello', 'join', 'split'];
// let res = arr.join(' ').split(' ');
// console.log(res);
// ------------------------------------

// let str = 'привет как дела';
// let arr = str.split(' ');
// console.log(arr);
// let word = arr.join(' ');
// console.log(word);
// ------------------------------------


// filter()
// let age = [12, 15, 13, 56, 34, 32];
// let res = age.filter(item => item >= 15);
// console.log(res);

// map()
// let age = [12, 15, 13, 56, 34, 32];
// let res = age.map(item => item + 4);
// console.log(res);

// reduce()
// тут сложение элементов и возврат суммы
// let numbs = [12, 15, 13, 56, 34, 32];
// let res = numbs.reduce((item, value) => item + value);
// console.log(res);


// Способы узнать длину объекта
// 1
// let dog = {
// 	name: 'Тузик',
// 	name: 'Тузик',
// 	age: 3,
// 	age: 4,
// 	age: 3,
// }
// console.log(Object.keys(dog).length);

// 2
// let dog = {
// 	name: 'Тузик',
// 	name: 'Тузик',
// 	age: 3,
// 	age: 4,
// 	age: 3,
// }
// let count = 0;
// for (key in dog) {
// 	count++;
// }
// console.log(count);
