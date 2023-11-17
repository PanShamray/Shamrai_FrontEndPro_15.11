const firstValue = prompt("Введіть перше значення для розрахунку");
const secondValue = prompt("Введіть друге значення для розрахунку");

const num1 = Number(firstValue);
const num2 = Number(secondValue);
 
const sum = num1 + num2;
const minus = num1 - num2;
const multi = num1 * num2;
const division = num1 / num2;
  
alert(`//Користувач ввів ${num1} і ${num2}:
         ${num1} + ${num2} = ${sum}
         ${num1} - ${num2} = ${minus}
         ${num1} * ${num2} = ${multi}
         ${num1} / ${num2} = ${division}`)