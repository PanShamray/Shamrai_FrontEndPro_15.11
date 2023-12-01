console.log("    1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5…)");

let firstTask = '';

for (let i = 20; i <= 30; i += 0.5){
    firstTask += i + ' ';
}

console.log(firstTask);

//////////////////////////////////////

console.log("    2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів");

const oneDollarInUah = 27;
let price = 1;

for (let i = 10; i <= 100; i += 10){
    price = oneDollarInUah * i;
    console.log(i+"$ = "+price+" гривень");
}

//////////////////////////////////////

console.log("    3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N");

const valueN = 68;

for (let i = 1; i <= 100; i++){
    if(i**2 <= valueN){
        console.log(i);
    }
}

//////////////////////////////////////

console.log("    4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе)");

const numForTask4 = 13;
    
for (let i = 2; i <= numForTask4; i++) {
    if (numForTask4 % i === 0) {
        console.log("Число "+ numForTask4 +" не є простим");
        break;
    } else {
        console.log("Число "+ numForTask4 +" є простим");
        break;
    }
}

//////////////////////////////////////

console.log("    5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна)");

const numForTask5 = 27;
let stupin = 0;
let result = 1;

while (result < numForTask5) {
    stupin++;
    result = 3**stupin;
}

if (result === numForTask5) {
    console.log(numForTask5 + " = 3^" + stupin);
} else {
    console.log(numForTask5 + " не можна отримати шляхом зведення числа 3 у будь-який ступінь");
}