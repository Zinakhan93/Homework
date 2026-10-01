// Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'оксана', age: 27 },

]
console.log(people.sort((a, b) => a.age - b.age));
// Задача 2
// Функция-правило: проверяет, что число положительное
function isPositive(number) {
    return number > 0;
}

// Функция-правило: проверяет, что человек мужского пола
function isMale(person) {
    return person.gender === 'male';
}

// Аналог Array.prototype.filter
function filter(arr, ruleFunction) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(filter([3, -4, 1, 9], isPositive));
// [3, 1, 9]

const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale));

// Задача 3 
const intervalId = setInterval(() => {
    console.log(new Date());
}, 3000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log('30 секунд прошло');
}, 30000);

// Задача 4
function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});

// Задача 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000)
}
function sayHi(name) {
    console.log('Привет, ${name}!');
}

delayForSecond(() => sayHi('Глеб'));

// Задание 6
/// Игра "Загадка"
// Компьютер загадывает загадку, пользователь пытается отгадать с подсказками

const correctAnswer = "марка";


const riddle = "Что может путешествовать по свету, оставаясь в одном и том же углу?";

// Функция для нормализации ответа (убираем пробелы, приводим к нижнему регистру)
function normalize(answer) {
    return answer ? answer.trim().toLowerCase() : "";
}
let answer1 = prompt(riddle);

if (normalize(answer1) === correctAnswer) {
    alert("Поздравляем! Вы угадали! Правильный ответ — марка. ");
} else {

    let answer2 = prompt("Неверно. Подсказка: Это что-то маленькое, что можно наклеить.");

    if (normalize(answer2) === correctAnswer) {
        alert("Поздравляем! Вы угадали! Правильный ответ — марка. ");
    } else {

        let answer3 = prompt("Неверно. Подсказка: Это используется для отправки писем.");

        if (normalize(answer3) === correctAnswer) {
            alert("Поздравляем! Вы угадали! Правильный ответ — марка. ");
        } else {
            alert("К сожалению, вы проиграли. Правильный ответ — марка.");
        }
    }
}