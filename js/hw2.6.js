// задание 1
// let numbers = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < numbers.length; i++) {
// 	console.log(numbers[i]);
// 	if (numbers[i] == 10) break;
// }


// --------------------------------------------------------------
// задание 2
// let numbers = [1, 5, 4, 10, 0, 3];
// 1 вариант
// let i = numbers.indexOf(4);
// console.log(i);

// 2 вариант
// numbers.forEach((el, index) => {
// 	if (el == 4)
// 		console.log(`${index}`);
// });


// --------------------------------------------------------------
// задание 3
// const numbers = [1, 3, 5, 10, 20];

// let joinNumbers = numbers.join(' ');
// console.log(joinNumbers);


// --------------------------------------------------------------
// задание 4
// let arr = [];
// for (let i = 0; i <= 2; i++) {
// 	let arr2 = [];
// 	for (let index = 0; index <= 2; index++) {
// 		arr2.push(1);
// 	}
// 	arr.push(arr2);
// }
// console.log((arr));


// --------------------------------------------------------------
// задание 5
// let arr = [1, 1, 1];
// arr.push(2, 2, 2);
// console.log(arr);


// --------------------------------------------------------------
// задание 6
// const arr = [9, 8, 7, 'a', 6, 5];
// arr.sort().pop();
// console.log(arr);


// --------------------------------------------------------------
// задание 7     не работает
// const array = [9, 8, 7, 6, 5];
// let userAnswer = +prompt('Угадайте число');
// for (let i = 0; i < array.length; i++) {
// 	if (array[i] === userAnswer) {
// 		console.log('угадал');
// 		break;
// 	} else {
// 		console.log('не угадал');
// 		break;
// 	}
// }


// --------------------------------------------------------------
// задание 8
// let word = 'abcdef';
// let wordRverce = word.split('').reverse().join('');
// console.log(wordRverce);


// --------------------------------------------------------------
// задание 9
// const array = [[1, 2, 3,], [4, 5, 6]];
// const arrayConcat = array[0].concat(array[1]);
// console.log(arrayConcat);