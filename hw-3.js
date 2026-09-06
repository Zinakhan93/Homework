// Задание 1
const password = 'пароль';
const pw = prompt("Введите пароль");

if (pw === password) {
    console.log("Пароль введен верно");
} else {
    console.log("Пароль введен неправильно");
}

// Задание 2
const c = 2;
if (c > 0 && c < 10) {
    console.log("Верно");
} else {
    console.log("Неверно")
}

// Задание 3
const d = 15;
const e = 20;
if (d > 100 || e > 100) {
    console.log("Верно");
} else {
    console.log("Неверно")
}

// Задание 4
const a = '2';
const b = '3';
alert(+a + +b);

// Задание 5
const monthNumber = 12;
if (monthNumber > 13) {
    console.log("программа не будет выполняться");
} else {
    switch (monthNumber) {
        case 1:
        case 2:
        case 12: {
            console.log("Зима");
            break;
        }
        case 3:
        case 4:
        case 5: {
            console.log("Весна");
            break;
        }
        case 6:
        case 7:
        case 8: {
            console.log("Лето");
            break;
        }
        case 9:
        case 10:
        case 11: {
            console.log("Осень");
            break;
        }
    }
}
// Задание 6

// Задание 7
const num = prompt("Пожалуйста, введите любое число");

if (Number(num)) {
    if (num % 2) {
        alert("Число нечетное");
    } else {
        alert("Число четное");
    }
} else {
    alert("Не число");
}

// Задание 8
/*
let clientOS = 1;
alert(clientOS === 1 ? "Установите версию приложения для iOS по ссылке" : clientOS === 0 ? "Установите версию приложения для Android по ссылке" : "");
*/
const clientOS = 1;
if (clientOS === 0) {
    alert('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 1) {
    alert('Установите версию приложения для Android по ссылке');
}

// Задание 9
const clientOS1 = 1;
const clientDeviceYear = 2015;
if (clientOS === 0 && clientDeviceYear >= 2015) {
    alert('Установите версию приложения для iOS по ссылке')
} else if (clientOS === 0 && clientDeviceYear < 2015) {
    alert('Установите облегченную версию приложения для iOS по ссылке')
} else if (clientOS === 1 && clientDeviceYear >= 2015) {
    alert("Установите версию приложения для Android по ссылке")
} else if (clientOS === 1 && clientDeviceYear < 2015) {
    alert('Установите облегченную версию приложения для Android по ссылке')
}





