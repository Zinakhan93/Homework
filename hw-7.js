// задание 1
let m = 'js';
console.log(m.toUpperCase());
//console.log('js'.toUpperCase())

// Задание 2
function filterByStart(arr, str) {
    const lowerStr = str.toLowerCase();
    const result = [];

    for (const item of arr) {
        if (item.toLowerCase().startsWith(lowerStr)) {
            result.push(item);
        }
    }

    return result;
}

// Пример использования:
const words = ['Apple', 'banana', 'Apricot', 'grape', 'avocado'];
console.log(filterByStart(words, 'ap'));
// ['Apple', 'Apricot']  (регистр не важен)


// Использование filter
// const filterByStart = (arr, str) => {
//   const lowerStr = str.toLowerCase();
//   return arr.filter(item => item.toLowerCase().startsWith(lowerStr));
// };

// // Использование:
// const fruits = ['Apple', 'Banana', 'Apricot', 'Avocado', 'Grape'];
// console.log(filterByStart(fruits, 'ap')); // ['Apple', 'Apricot']


//Задача 3 
let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

// Задача 4 
let much = [52, 53, 49, 77, 21, 32];
console.log(Math.max(...much));
console.log(Math.min(...much));

// Задача 5
function getRandomNumber() {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    console.log(randomNum);
}

// Задача 6

function generateRandomArray(number) {
    if (!Number.isInteger(number) || number <= 0) {
        return [];
    }
    const length = Math.floor(number / 2);
    const result = [];
    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * (number + 1));
        result.push(randomNumber);
    }

    return result;
}

//  function random(m) {
//     if (!Number.isInteger(m)) {
//         alert('не подходит условию функции, введите целое число');
//     } else {
//         const length = ~~(m / 2);
//         return Array.from({ length }).map(e => ~~(Math.random() * m));
//     }
// }


// Задание  7

function getRandomInRange(q, w) {
    if (!Number.isInteger(q) || !Number.isInteger(w)) {
        return NaN;
    }
    return Math.floor(Math.random() * (q - w + 1)) + w;
}

// Задание 8
console.log(new Date());

// Задание 9
let currentDate = new Date();
let day73 = 73 * 24 * 60 * 60 * 1000; // 73 дня в миллисекундах
let searchDate = currentDate.getTime() + day73;
let willDay73 = new Date(searchDate);

// Задание 10
function formatDate(date) {
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда',
        'Четверг', 'Пятница', 'Суббота'];
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const weekday = days[date.getDay()];

    return `${weekday}, ${day} ${month} ${year}`;
}

console.log(formatDate(new Date()));

