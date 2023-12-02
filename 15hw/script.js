const array = [1, 2, 3, 4, 5, 6, 7];

const newArray = removeElement(array, 5);

function removeElement(array, item) {
    return array.filter(function(element) {
        return element !== item;
    });
}

console.log(newArray);