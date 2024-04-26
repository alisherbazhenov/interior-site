// str_count("Hello", 'o'); // returns 1
// str_count("Hello", 'l'); // returns 2
// str_count("", 'z'); // returns 0

// Создайте функцию, которая принимает строку и один символ и возвращает целое число, соответствующее количеству вхождений второго аргумента в первом.

// Если вхождений не найдено, должно быть возвращено число 0.
// function str_count(a, b) {
// 	let res = a.split('');
// 	let arr = [];
// 	for (let i = 0; i < res.length; i++) {
// 		if (res[i] == b) {
// 			arr.push(b);
// 		}
// 	}
// 	return arr.length;
// }
// console.log(str_count("Hellllllllo", 'l'));


// function strCount(str, letter) {
// 	return str.split('').filter(c => c == letter).length;
// }
// console.log(strCount('hellooo', 'o'));


// с ютуба
// function eachCons(array, n) {
// 	const r = [];
// 	for (let i = 0; i <= array.length - n; i++) {
// 		const chunk = [];
// 		for (let j = 0; j < i + n; j++) {
// 			chunk.push(array[j]);
// 		}
// 		r.push(chunk);
// 	}
// 	return r;
// }
// console.log(eachCons([2, 3, 4, 5], 2));


// Завершите функцию квадратной суммы, чтобы она возводила в квадрат каждое переданное ей число, а затем суммировала результаты. Например, для [1, 2, 2] он должен вернуть 9, потому что 1 2 + 2 2 + 2 2 "=" 9 1 2 +2 2 +2 2 =9.

// function squareSum(numbers) {
// 	let arr = [];
// 	let sum;
// 	for (let i = 0; i < numbers.length; i++) {
// 		if (numbers[i] === 0) {
// 			return 0;
// 		} else {
// 			arr.push(Math.pow(numbers[i], 2));
// 		}
// 	}
// 	sum = arr.reduce((a, b) => a + b);
// 	return sum;
// }
// console.log(squareSum([0, 0, 0]));


// function squareSum(numbers) {
// let square = numbers.map(item => item ** 2);
// const result = square.reduce((a, b) => a + b, 0);

// return result;
// }
// console.log(squareSum([0, 0, 0]));


// 4 задание
// function solution(str) {
// 	let str1 = str.split('').reverse('').join('');
// 	return str1;
// }
// console.log(solution('word'));

// еще решение
// const solution = str => str.split('').reverse().join('');

// 5 задание
// Что, если нам нужно, чтобы длина слов, разделенных пробелом, была добавлена ​​в конце того же слова и возвращена в виде массива? Пример (ввод --> вывод) "яблоко запрет" --> ["яблоко 5", "бан 3"] "вы выиграете" -->["вы 3", "выиграете 4", "выиграете 3"] Ваша задача — написать функцию, которая принимает строку и возвращает массив/список с длиной каждого слова, добавленного к каждому элементу. Примечание. Строка будет содержать как минимум один элемент; слова всегда будут разделены пробелом.

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]

// мое решение
// function output(str) {
// 	let out = str.split(' ');
// 	let out2 = out.map((item) => item + ' ' + item.length);
// 	return out2;
// }

// console.log(output("apple ban"));
// console.log(output("you will win"));

// 5 задание решение от участников кодворс
// function addLength(str){
//   return str.split(" ").map(s => `${s} ${s.length}`)
// }

// 5 задание решение от участников кодворс
// function addLength(str){
//   return str.split(' ').map(function(v){return v+' '+v.length})
// }


// задание 6
// Есть предложение «3 по цене 2» (или «2+1», если хотите) на манго. Для данного количества и цены (за манго) рассчитайте общую стоимость манго.
// mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
// mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
// mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free

// решение с нета
// function mango(unit, price) {
// 	let exit = unit - Math.floor(unit / 3);
// 	return exit * price;
// }
// console.log(mango(9, 5));

// решение с codesars
// function mango(quantity, price){
//   return price * (quantity - Math.floor(quantity / 3));
// }


// задание 7
// Натан любит кататься на велосипеде. Поскольку Натан знает, как важно избегать обезвоживания, он выпивает 0,5 литра воды за час езды на велосипеде. Вам дается время в часах, и вам нужно вернуть количество литров, которые выпьет Натан, округленное до наименьшего значения.

// мое решение
// function natan(time) {
// 	let res = time * 0.5

// 	return Math.floor(res);
// }
// console.log(natan(10.8));

// решение с codewars
// function litres(time) {
//   return Math.floor(time * 0.5);
// }


// задание 8 
// Учитывая набор чисел, верните добавку, обратную каждому из них. Каждое положительное становится отрицательным, а отрицательное становится положительным.
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

// мое решение
// function invert(array) {
// 	let res = array.map(item => item > 0 ? -item : item * -1);
// 	return res;
// }
// console.log(invert([]));

// решение участников codewars
// 1
// const invert = array => array.map(num => -num);

// 2
// function invert(array) {
// 	return array.map(x => x === 0 ? x : -x);
// }
// console.log(invert([1, -2, 3, -4, 5]));


// 9 задание 
// Завершите функцию, которая принимает неотрицательное целое число n в качестве входных данных и возвращает список всех степеней числа 2 с показателем степени от 0 до n (включительно).

// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

// решение из codewars
// function sqrt1(n) {

// 	let result = [];
// 	for (let i = 0; i <= n; i++) {
// 		result.push(2 ** i);
// 	}
// 	return result;
// }
// console.log(sqrt1(5));

// решение с codewars 2
// function powersOfTwo(n) {
// 	let result = [];
// 	for (let i = 0; i <= n; i++) {
// 		result.push(Math.pow(2, i));
// 	}
// 	return result;
// }
// console.log(powersOfTwo(0));
// console.log(powersOfTwo(2));
// console.log(powersOfTwo(4));


// 10 задание 
// Учитывая непустой массив целых чисел, вернуть результат умножения значений вместе по порядку. Пример:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// мое решение
// let arr = [1, 2, 3, 4];
// let newArr = arr.reduce((i, b) => i * b);
// console.log(newArr);

// мое решение 2
// function x(arr) {
// 	let y = arr.reduce((i, b) => i * b);
// 	return y;
// }
// console.log(x([1, 2, 3, 4]));

// решение с codewars
// const grow=x=> x.reduce((a,b) => a*b);

// задание 3
// если кратко:

// нужно найти ближайший квадрат числа n, если n - уже является квадратом , то просто вернуть его же

// в итоге должно быть типо:

// nearestSq(3)); // = 4
// nearestSq(4)); // = 4
// nearestSq(130)); // = 121

// решение с codewars
// function number(n) {
// 	let b = Math.pow(Math.round(Math.sqrt(n)), 2);
// 	return b;
// }
// console.log(number(5));


// Доп задачи 
// задание 11
// Напишите программу, которая находит сумму всех чисел от 1 до num. Число всегда будет положительным целым числом больше 0.

// function number(num) {
// 	result = 0
// 	count = 1

// 1 решение
// 	while (count <= num) {
// 		result += count;
// 		count += 1;
// 	}
// 	return result;
// }
// console.log(number(3));

// 2 решение
// function number(num) {
// 	let res = 0;
// 	for (let i = 0; i <= num; i++) {
// 		res += i;
// 	}
// 	return res;
// }
// console.log(number(8));


// задание 12
// Найти минимальное и максимальное значение массива
// [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// [42, 54, 65, 87, 0]             -> min = 0, max = 87
// [5]                             -> min = 5, max = 5
// const minMax = (array) => {
// 	let max = Math.max(...array);
// 	let min = Math.min(...array);

// 	return console.log(`min = ${min}, max = ${max}`);
// }
// minMax([4, 6, 2, 1, 9, 63, -134, 566]);

// решение с помощью классического цикла
// let arr = [4, 6, 2, 1, 9, 63, -134, 566]
// let min = arr[0];
// let max = min;

// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] > max) {
// 		max = arr[i];
// 	} else if (arr[i] < min) {
// 		min = arr[i];
// 	}
// }
// console.log(`min = ${min}, max = ${max}`);

// задание 14
// Напишите функцию, которая проверяет, является ли заданная строка (без учета регистра) палиндромом. Палиндром — это слово, число, фраза или другая последовательность символов, которая читается так же, как и вперед, и назад, например, мадам или гоночный автомобиль, дата и время 21.12.33 12:21 и предложение: «Человек, план, канал — Панама».

// function palindrom(str) {
// 	str = str.toLowerCase();

// 	if (str == str.split('').reverse().join('')) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// console.log(palindrom('olok'));


// 16 задание
// мое
// function sumStr(a, b) {
// 	let sum;
// 	let str;
// 	sum = Number(a) + Number(b);
// 	str = String(sum);
// 	return str;
// }
// console.log(sumStr('2', ''));

// решение с codewars
// function sumStr(a,b) {
//   return String(Number(a)+Number(b));
// }


// 17 задание
// Напишите функцию bmi, которая вычисляет индекс массы тела (bmi = вес / рост2). если ИМТ <= 18,5, вернуть "Недостаточный вес" если ИМТ <= 25,0, вернуть «Нормальный» если ИМТ <= 30,0 вернуть "Избыточный вес" если ИМТ > 30, верните «Ожирение».

// function bmiCalc(weight, height) {
// 	let bmi = weight / Math.pow(height, 2);
// 	bmi = Number(bmi.toFixed(2));
// 	if (bmi <= 18.5) {
// 		return "Underweight";
// 	} else if (bmi <= 25.0) {
// 		return "Normal";
// 	} else if (bmi <= 30.0) {
// 		return "Overweight";
// 	} else if (bmi > 30) {
// 		return "Obese";
// 	}
// }
// console.log(bmiCalc(96, 1.88));


// 18 задание 
// сделал сразу в codewars
