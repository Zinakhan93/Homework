// Задание 1

const hi = 'привет';
let i = 0;
while (i < 2) {
    console.log(`${hi}`);
    i++;
}

// Задание 2
let a = 1;
while (a <= 5) {
    console.log(a);
    a++;
}

// задание 3
let b = 7;
while (a <= 22) {
    console.log(a);
    a++;
}

// задание 4
const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
}
for (let key in obj) {
    console.log(`${key}- заплата : ${obj[key]} долларов`);
}

// задание 5 
let n = 1000;
let num = 0;

while (n >= 50) {
    n = n / 2;
    num++;
}

console.log(`Полученное число: ${n}`);
console.log(`Количество итераций (num): ${num}`);

// задание 6
let fridayDate = 5;
for (let i = fridayDate; i < 32; i += 7) {
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
}