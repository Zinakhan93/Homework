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

    if (age <= 0) {
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
    } Ы
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
    if (month < 1 || month > 12) {
        return 'Некорректный номер месяца. Введите число от 1 до 12.';
    }
    if (month === 12 || month === 1 || month === 2) {
        return 'Зима';
    } else if (month >= 3 && month <= 5) {
        return 'Весна';
    } else if (month >= 6 && month <= 8) {
        return 'Лето';
    } else if (month >= 9 && month <= 11) {
        return 'Осень';
    }
}

