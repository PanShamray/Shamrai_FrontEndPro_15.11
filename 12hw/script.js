const arrayLength = prompt("Введіть довжину масиву");

//////////////////////

const arrayLengthConvertToNum = + arrayLength;

const array = [];

for (let i = 0; i < arrayLengthConvertToNum; i++) {
    let element = prompt("Введіть елемент масиву " + (i + 1) + ":");
    array.push(element);
}

console.log(array);

array.sort(function(a, b) {
    return a - b;
});

console.log("Сортування масиву: ", array);

array.splice(1, 3);

console.log("Видалення з 2 по 4 елемент: ", array);