// Задание 1
const getMin = (a, b) => a < b ? a : b;
// Задание 2
function nam(a) {
    if (a % 2 == 0) {
        console.log(`Число четное`)
    } else {
        console.log(`Число нечетное`)
    }
}

let num = a => a % 2 == 0 ? console.log(`Число четное`) : console.log(`Число нечетное`);

const oddOrEven = n => console.log(`Число ${n % 2 ? 'не' : ''}четное`);
// Задание 3
const bi = (a) => console.log(a * a);
const m = (t) => t ** 2;

// Задание 4
function getAge() {
    const age = parseInt(prompt('Сколько вам лет?'))
    if (age <= 0) {
        alert('Вы ввели неправильное значение')
    } else if (age >= 0 || age <= 12) {
        alert('Привет, друг!')

    } else {
        alert('Добро пожаловать!')

    }
}
// Задание 5
function getNum(a, b) {
    a = Number(a);
    b = Number(b);
    if (isNaN(a) || isNaN(b)) {
        return console.log('Одно или оба значения не являются числом');
    } else {
        return a + b;
    }
}
// Задание  6
function numberСheck() {
    const z = prompt(`Введите число`);
    if (isNaN(z)) {
        return `Переданный параметр не является числом`;
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

