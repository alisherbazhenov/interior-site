// const answerUser = prompt('Без рук, а рисует. Без зубов, а кусает'); // сохраняем
// // ответ пользователя в переменную answerUser
// const answer = 'мороз'; // храним правильный ответ в переменной answer

// if (answerUser === answer) { // проверяем, совпадает ли строка, полученная от пользователя, с правильным ответом
// 	alert('Это правильный ответ!'); // это сообщение, если совпала
// } else {
// 	alert('Не угадал, правильный ответ: ${answer}'); // а это, если не совпала
// }

// =============================================
// const answerUser = prompt('Без рук, а рисует. Без зубов, а кусает'); // сохраняем
// // ответ пользователя в переменную answerUser
// const answer = 'мороз'; // храним правильный ответ в переменной answer

// if (answerUser.toLowerCase() === answer.toLowerCase()) { // проверяем, совпадает ли строка, полученная от пользователя, с правильным ответом
// 	// и теперь нам не важно, в каком регистре какие буквы ввел пользователь, мы все приводим к нижнему регистру
// 	alert('Это правильный ответ!'); // это сообщение, если совпала
// } else {
// 	alert('Не угадал, правильный ответ: ${answer}'); // а это, если не совпала
// }


// --------------------------------
// str.indexOf
// Первый метод — str.indexOf(substr, pos).
// const str = 'Поезд едет далеко'; // строка, в которой будем осуществлять поиск
// str.indexOf('едет'); // 6, 'едет' — это подстрока, которую мы ищем, метод вернет
// // 6, т. к. «едет» есть в искомой строке str, и совпадение начинается с 6-го индекса
// // позиции в строках начинаются с 0
// str.indexOf('едит'); // -1, т. к. «едит» — нет полного совпадения подстроки


// str.includes
// const products = ['Хлеб Бородинский', 'Молоко Молочник', 'Коровка Молоко', 'Груша Конференция'];
// const search = 'молоко';

// products.forEach((product) => {
// 	// проходимся по массиву products и проверяем каждый элемент на наличие 
// 	// подстроки 'молоко', не забыв привести элемент и искомую подстроку
// 	// к одному регистру
// 	if (product.toLowerCase().includes(search.toLowerCase())) {
// 		console.log(product);
// 	}
// });
// в результате будет выведено 'Молоко Молочник', 'Коровка Молоко'


// let welcome; // переменная, в которой будем хранить наше приветствие
// let myDate = new Date(); // получаем текущую дату
// let hour = myDate.getHours(); // получаем час из нашей даты
// let minute = myDate.getMinutes(); // получаем минуты
// let second = myDate.getSeconds(); // получаем секунды

// // если минуты и секунды у нас будут меньше 10, то в результате формат времени
// // будет не очень красивым — 12:1:34 или 3:1:6
// // намного приятнее следующие записи: 12:01:34 или 3:01:06
// // чтобы добиться формата, как в последних примерах, будем осуществлять
// // проверку на < 10
// if (minute < 10) { // если минут будет меньше 10,
// 	minute = "0" + minute; // то перед ними поставим 0
// }
// if (second < 10) { // если секунд будет меньше 10,
// 	second = "0" + second; // то перед ними поставим 0
// }

// // здесь мы проверяем, который час, и в зависимости от этого в переменную welcom
// // сохраняем приветствие, зависящее от времени суток
// if (hour < 12) {
// 	welcome = "Доброе утро";
// } else if (hour < 17) {
// 	welcome = "Добрый день";
// } else {
// 	welcome = "Добрый вечер";
// }

// console.log(welcome + ", текущее время: " + hour + ":" + minute + ":" + second);



// ------------------------------
// регулярные выражения
// let regexp = new RegExp('^[а-яА-Я]*$'); // без флагов
// let regexpFlag = new RegExp('^[а-яА-Я]*$', 'gmi'); // с флагами gmi
// let regexp = /^[а-яА-Я]*$/; // без флагов
// let regexpFlag = /^[а-яА-Я]*$/gmi; // с флагами gmi


// let regexp = /^[а-яА-Я]*$/; // что означает эта запись, мы разберем чуть ниже
// let name = prompt('Введите ваше имя. Используйте только кириллические символы');

// if (regexp.test(name)) {
// 	alert('Ваше имя сохранено');
// } else {
// 	alert('Введены некорректные символы');
// }


// ---------------------------------------------
// Дата (день)
// const currentDate = new Date()
// console.log(currentDate.toLocaleDateString('ru-RU', { weekday: 'long' }));


// ---------------------------------------------
// Дата на русском
// const currentDate = new Date();
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// console.log(currentDate.toLocaleDateString('ru-RU', options));