const array = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
console.log(array);

const positiveElementsOfArray = [];

for (let i = 0; i <= array.length; i++){
    if (array[i] > 0){
        positiveElementsOfArray.push(array[i]);
    }
}
 
console.log("Позитивні елементи масиву: ", positiveElementsOfArray);

const sumOfpositiveElementsOfArray = positiveElementsOfArray.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log("Сума позитивних елементів масиву: ", sumOfpositiveElementsOfArray);

////////////////////////////////////////////////////////////////////////////////////////

let minElement = array[0];
let minElementIndex = 0;
for (i = 0; i <= array.length; i++){
    if (array[i] < minElement){
        minElement = array[i];
        minElementIndex = i;
    }
}
console.log("Мінімальний елемент:", minElement);
console.log("Індекс:", minElementIndex);

////////////////////////////////////////////////////////////////////////////////////////

let maxElement = array[0];
let maxElementIndex = 0;
for (i = 0; i <= array.length; i++){
    if (array[i] > maxElement){
        maxElement = array[i];
        maxElementIndex = i;
    }
}
console.log("Максимальний елемент:", maxElement);
console.log("Індекс:", maxElementIndex);

////////////////////////////////////////////////////////////////////////////////////////

const negativeElementsOfArray = [];

for (let i = 0; i <= array.length; i++){
    if (array[i] < 0){
        negativeElementsOfArray.push(array[i]);
    }
}
 
console.log("Негативні елементи масиву: ", negativeElementsOfArray);


////////////////////////////////////////////////////////////////////////////////////////

const oddPositiveElements = [];

for (i = 0; i < positiveElementsOfArray.length; i++){
    if (positiveElementsOfArray[i] % 2 !== 0){
        oddPositiveElements.push(positiveElementsOfArray[i]);
    }
}

console.log("Непарні позитивні елементи ", oddPositiveElements);

////////////////////////////////////////////////////////////////////////////////////////

const evenPositiveElements = [];

for (i = 0; i < positiveElementsOfArray.length; i++){
    if (positiveElementsOfArray[i] % 2 === 0){
        evenPositiveElements.push(positiveElementsOfArray[i]);
    }
}

console.log("Парні позитивні елементи ", evenPositiveElements);

////////////////////////////////////////////////////////////////////////////////////////

const sumOfEvenPositiveElements = evenPositiveElements.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log("Сума парних позитивних елементів масиву: ", sumOfEvenPositiveElements);

////////////////////////////////////////////////////////////////////////////////////////

const sumOfOddPositiveElements = oddPositiveElements.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log("Сума непарних позитивних елементів масиву: ", sumOfOddPositiveElements);

////////////////////////////////////////////////////////////////////////////////////////

const addOfPositiveElements = positiveElementsOfArray.reduce(function (accumulator, currentValue) {
    return accumulator * currentValue;
}, 1);

console.log("Добуток позитивних елементів масиву: ", addOfPositiveElements);

////////////////////////////////////////////////////////////////////////////////////////

const maxValueOfArray = Math.max(...array);


for (let i = 0; i < array.length; i++) {
    if (array[i] !== maxValueOfArray) {
        array[i] = 0;
    }
}

console.log("Обнулений масив, крім найбільшого елементу:", array);