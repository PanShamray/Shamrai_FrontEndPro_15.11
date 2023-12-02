const array = [1, 2, 3, 4, 5, 6, 7];

const copiedArr = [...array];

function removeElement(array, item){
    if (array.includes(item)){
        array.splice(item - 1, 1);
        console.log(array);
    }
}
console.log("Початковий масив: ",array);
removeElement(copiedArr, 5);