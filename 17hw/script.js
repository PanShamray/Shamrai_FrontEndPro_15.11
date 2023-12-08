// Дано масив з елементами різних типів.
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
console.log("    1 завдання");

const arrWithRandItems = [23, 'fdgfg', 2, 332, 'weee', 'next', 1488, 'true', 'false', 555];
console.log(arrWithRandItems);

function calcArithmeticMean(arr){
    let numArr = arr.filter(function(item) {
        return typeof item === 'number';
    });
    console.log(numArr);
    let sum = numArr.reduce(function(acc, num){return acc + num}, 0);
    let arithmetic = sum / numArr.length;
    return "Середнє арифметичне масиву = " + arithmetic;
}
console.log(calcArithmeticMean(arrWithRandItems));

//Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. 
//У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
//Вивести результат математичної дії, вказаної в змінній znak.
//Обидва числа і знак виходять від користувача.

console.log("\n    2 завдання");

function doMath(x, znak, y){
    let res;
    switch (znak){
        case '+' :
            res = `${x} + ${y} = ${x + y}`;
            break;
        case '-' :
            res = `${x} - ${y} = ${x - y}`;
            break;
        case '*' :
            res = `${x} * ${y} = ${x * y}`;
            break;
        case '/' :
            res = `${x} / ${y} = ${x / y}`;
            break;
        case '%' :
            res = `${x} % ${y} = ${x % y}`;
            break;    
        case '^' :
            res = `${x} ^ ${y} = ${x ** y}`;
            break;
        default :
            res = 'У змінній znak може бути лише: +, -, *, /, %, ^ (ступінь)'           
    }
    return res;
}
console.log(doMath(2, '^', 5));

//Написати функцію заповнення даними користувача двомірного масиву. 
//Довжину основного масиву і внутрішніх масивів задає користувач. 
//Значення всіх елементів всіх масивів задає користувач.

console.log("\n    3 завдання");

let numOfArrays= + prompt("Введіть кількість масивів:");
let itemsOfEveryArray = + prompt("Введіть кількість елементів для кожного масиву:");

function fillingOfArray(numOfArrays, itemsOfEveryArray) {
    let twoDArray = [];
    for (let i = 0; i < numOfArrays; i++){
        let oneDArray = [];
        for (let j = 0; j < itemsOfEveryArray; j++){
            let fillingOfItems = prompt(`Заповніть ${j + 1} елемент для масиву №${i + 1}`);
            oneDArray.push(fillingOfItems);
        }
        twoDArray.push(oneDArray);
    }
    return twoDArray;
}
let resultOfThirdTask = fillingOfArray(numOfArrays, itemsOfEveryArray);

console.log(resultOfThirdTask);

//Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
//func(" hello world", ['l', 'd']) поверне нам "heo wor". 
//Вихідний рядок та символи для видалення задає користувач.

console.log("\n    4 завдання");

const str = 'hello world';
const symToDel = ['d','o','e'];

function delItemsFromStr(str, symToDel){
    let arrFromStr = str.split("");
    symToDel.forEach(item => {
        let index = arrFromStr.indexOf(item);
        while (index !== -1){
            arrFromStr.splice(index, 1);
            index = arrFromStr.indexOf(item);
        }
    });
    let res = arrFromStr.join("");
    return res;
}
console.log(delItemsFromStr(str, symToDel));