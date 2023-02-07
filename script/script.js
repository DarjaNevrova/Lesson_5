//1 TASK
const value_1 = +prompt('Укажите число');

if (value_1 % 2 === 0) {
    console.log('Четное')
} else {
    console.log('Нечетное')
}

//2 TASK
const value_2 = +prompt('Укажите число');
const value_3 = +prompt('Укажите число');

if (value_2 % value_3 === 0) {
    console.log('Yes')
} else {
    console.log('No')
}

//3 TASK
const a = +prompt('Укажите первую сторону');
const b = +prompt('Укажите вторую сторону');

console.log(a * b / 2)

//4 TASK
const c = +prompt('Укажите первый катет');
const d = +prompt('Укажите второй катет');

console.log(Math.sqrt(c * c + d * d));

//5 TASK
const value = +prompt('Укажите число');

if (value % 3 === 0 || value % 7 === 0 || value % 10 > 0) {
    console.log('YES')
} else {
    console.log('NO')
}