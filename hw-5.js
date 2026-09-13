// Задание 1
const getMin = (a, b) => a < b ? a : b;
// Задание 2
function nam(a) {
    if (a % 2 == 0) {
        return `Число четное`
    } else {
        return `Число нечетное`
    }
}
let num = a => {
    return a % 2 === 0 ? 'Число четное' : 'Число нечетное';
};
// const oddOrEven2 = n => `Число ${n % 2 ? 'не' : ''}четное`;
// const result2 = oddOrEven2(); 
// console.log(result2);

// Задание 3
const bi = (a) => console.log(a * a);
const m = (t) => t ** 2;
// console.log(m(3) + 1);

// Задание 4
function getAge() {
    const age = parseInt(prompt('Сколько вам лет?'));

    if (age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!');
    }
}
// Задание 5
function getNum(a, b) {
    a = Number(a);
    b = Number(b);
    if (isNaN(a) || isNaN(b)) {
        return ('Одно или оба значения не являются числом');
    } else {
        return a * b;
    }
}
// Задание  6
function numberСheck() {
    const z = prompt(`Введите число`);
    if (isNaN(z)) {
        return `Переданный параметр не является числом`; s
    } else {
        return `${z} в кубе равняется ${z ** 3}`;

    }
}
for (let i = 0; i <= 10; i++) {
    alert(numberCheck()); // каждый раз вводим число вручную
}
// Задание 7 
const circle1 = {
    radius: 5,
    pi: 3.14,
    getArea() {
        return this.pi * this.radius ** 2;
    },
    getPerimeter() {
        return 2 * this.pi * this.radius
    }
}

const circle2 = {
    radius: 6,
    pi: 3.14,
    getArea() {
        return this.pi * this.radius ** 2;
    },
    getPerimeter() {
        return 2 * this.pi * this.radius
    }
}
// Задание 8
function getSeason(month) {
    month = Number(month);

    if (isNaN(month) || !Number.isInteger(month) || month < 1 || month > 12) {
        return 'Недопустимое значение';
    } else if (month === 12 || month === 1 || month === 2) {
        return 'Зима';
    } else if (month >= 3 && month <= 5) {
        return 'Весна';
    } else if (month >= 6 && month <= 8) {
        return 'Лето';
    } else {
        return 'Осень';
    }
}
for (let i = 0; i <= 13; i++) {
    console.log(`${i} — ${getSeason(i)}`);
}

