// Задание 1

let array1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < array1.length; i++) {
    if (array1[i] == 10) break;
    console.log(array1[i]);
}
const numbers = [1, 5, 4, 10, 0, 3];
let i = 0;
while (i < numbers.length) {
    console.log(numbers[i]);

    if (numbers[i] === 10) {
        break;
    }

    i++;
}
// Задание 2 
const array2 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array2.length; i++) {
    if (array2[i] === 4) {
        console.log(i);
        break;
    }
}
// Задание 3
const array3 = [1, 3, 5, 10, 20];
const joinArray3 = array3.join(` `);
console.log(joinArray3);

// Задание 4
const array = [];

for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
        row.push(1);
    }
    array.push(row);
}

console.log(array);


// Задание 5
const array4 = [1, 1, 1];
array4.push(2, 2, 2);
console.log(array4);

// Задание 6
const array5 = [9, 8, 7, `a`, 6, 5];
array5.sort();
const result = array5.filter(item => item !== `a`);
console.log(result);

// Задание 7
const array6 = [9, 8, 7, 6, 5];
function guessNumber() {
    const num = prompt('угадай число');
    if (array6.includes(+num)) {
        alert(`Угадал`);
    } else {
        alert(`Не угадал`)
    }

}
// alert(`${array6.includes(+num) ? 'У' : 'Не у'}гадал`)

//Задание 8 
const str = 'abcdef';
const reversed = str.split('').reverse().join('');
console.log(reversed);

// Задание 9
const array7 = [[1, 2, 3], [4, 5, 6]];
const array8 = array7.spread
console.log(array8);

// const array7 = [[1, 2, 3], [4, 5, 6]];
// const array8 = array7.flat();
// console.log(array8);

//Задание 10
const array9 = [3, 7, 1, 9, 4, 6, 2, 8, 5, 10];
for (let i = 0; i < array9.length - 1; i++) {
    const sum = array9[i] + array9[i + 1];
    console.log(`${array9[i]} + ${array9[i + 1]} = ${sum}`);
}

// Задача 11
function getSquares(arr) {
    return arr.map(num => num * num);
}

const array10 = [2, 4, 6, 8, 10];
const squares = getSquares(array10);
console.log(squares);

// Задача 12 
function getStringLengths(arr) {
    return arr.map(str => str.length);
}

const strings = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const lengths = getStringLengths(strings);
console.log(lengths);

// Задача 13
function getNegativeNumbers(arr) {
    return arr.filter(num => num < 0);
}

const array11 = [5, -3, 10, -8, 0, -2, 7, -1];
const negatives = getNegativeNumbers(array11);
console.log(negatives);

// Задача 14 
const array12 = [];
for (let i = 0; i < 10; i++) {
    array12.push(Math.floor(Math.random() * 11));
}
const evenNumbers = array12.filter(num => num % 2 === 0);

console.log('Исходный массив:', array12);
console.log('Чётные числа:', evenNumbers);

// Задача 15 
const array13 = [];
for (let i = 0; i < 6; i++) {
    array13.push(Math.floor(Math.random() * 10) + 1);
}

const sum = array13.reduce((acc, num) => acc + num, 0);

const average = sum / array13.length;

console.log('Массив:', array13);
console.log('Сумма:', sum);
console.log('Среднее арифметическое:', average);