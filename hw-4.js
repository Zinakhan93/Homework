// Задание 1
const hi = 'привет';
for (i = 1; i <= 2; i++) {
    console.log(`${hi}`)
}

/*const hi = 'привет';
let i = 0;
while (i < 2) {
    console.log(`${hi}`);
    i++;
}*/

// Задание 2
/*let a = 1;
while (a <= 5) {
    console.log(a);
    a++;
}*/
for (i = 1; i <= 5; i++) {
    console.log(`${i}`)

}

// задание 3
/*let a = 7;
while (a <= 22) {
    console.log(a);
    a++;
}*/
for (i = 7; i <= 22; i++) {
    console.log(`${i}`)
}


// задание 4
const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
}
for (let key in obj) {
    console.log(`${key} — зарплата ${obj[key]} долларов`);
}

// задание 5 
let n = 1000;
let num = 0;

do {
    n = n / 2;
    num++;
} while (n >= 50);

console.log(`Результат: ${n}`);
console.log(`Количество итераций: ${num}`);

// задание 6
let fridayDate = 5;
for (let i = fridayDate; i < 32; i += 7) {
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
}

let j = fridayDate;
while (j <= 32) {
    console.log(`Сегодня пятница, ${j}-е число. Необходимо подготовить отчет.`);
    j += 7;
}

let k = fridayDate;
do {
    console.log(`Сегодня пятница, ${k}-е число. Необходимо подготовить отчет.`);
    k += 7;
} while (k <= 32);

