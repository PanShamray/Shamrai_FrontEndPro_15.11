function getCounter(){
    let count = 0;
    
    function sum(value) {
        count += value;
        return count;
    }
    return sum;
}

const mySum = getCounter();

console.log(mySum(3));
console.log(mySum(5));
console.log(mySum(20));