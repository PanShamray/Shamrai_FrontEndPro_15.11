function getCounter(){
    let count = 0;
    
    function sum(value) {
        count += value;
        return count;
    }
    return sum;
}

const sum = getCounter();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));