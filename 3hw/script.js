const row1 = prompt("Введіть що небуть1");
const row2 = prompt("Введіть що небуть2");
const row3 = prompt("Введіть що небуть3");

const result = row1 + " " + row2 + " " + row3;

console.log("Result => "+ result);


//завдання 2


let getNumFromUser = prompt("Введіть п'ятизначне число");

let convertStringToNum = Number(getNumFromUser);

const d1 = Math.floor(convertStringToNum / 10000);
    convertStringToNum %= 10000;

const d2 = Math.floor(convertStringToNum / 1000);
    convertStringToNum %= 1000;

const d3 = Math.floor(convertStringToNum / 100);
    convertStringToNum %= 100;

const d4 = Math.floor(convertStringToNum / 10);
    convertStringToNum %= 10;

const d5 = convertStringToNum;
    

console.log(d1, d2, d3, d4, d5);