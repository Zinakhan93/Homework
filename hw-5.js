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
