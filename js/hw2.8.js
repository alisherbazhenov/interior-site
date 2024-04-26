// Hw2.8
// Из урока
// Метод map()
// const fibonacci = [1, 1, 2, 3, 5, 8];

// TODO: Допишите код, чтобы в консоль ниже выводились правильные значения
// Используйте метод map, чтобы получить массив fibonacci, в котором все числа умножены на 2

// const multipleByTwoFib = fibonacci.map(function (currentValue, index, array) {
// 	return currentValue * 2;
// });

// короткая версия
// const multipleByTwoFib = fibonacci.map((el) => el * 2);
// ---------------------------------------------------------------------------------

// Используйте метод map, чтобы получить массив fibonacci, в котором к каждому числу добавили 10

// const plusTenFib = fibonacci.map(function (el) {
// 	return el + 10;
// });

// короткая версия
// const plusTenFib = fibonacci.map((el) => el + 10);
// ---------------------------------------------------------------------------------

// Используйте метод filter, чтобы получить массив, в который входят числа Фибоначчи больше 3

// const onlyBigFib = fibonacci.filter(function (currentValue, indexElem, array) {
// 	return currentValue > 3;
// });

// короткая версия
// const onlyBigFib = fibonacci.filter((el) => el > 3);

// console.log(multipleByTwoFib); // => [2, 2, 4, 6, 10, 16]
// console.log(plusTenFib); // => [11, 11, 12, 13, 15, 18]
// console.log(onlyBigFib); // => [5, 8]

// const greet = () => {
// 	console.log("Привет из именованной стрелочной функции");
// };
// greet();


