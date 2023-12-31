    console.log('1. Вивести на сторінку в один рядок через кому числа від 10 до 20');

 function oneRowFor (){
    const arrRow = [];

    for (let i1 = 10; i1 <= 20; i1++){
        arrRow.push(i1);
    }
    return arrRow; 
}
console.log(oneRowFor());

//////////////////////////////////////////////////////////////////////////////////////

console.log('    2. Вивести квадрати чисел від 10 до 20');

for (let i2 = 10; i2 <= 20; i2++){
    console.log(i2**2);
}

//////////////////////////////////////////////////////////////////////////////////////

console.log('    3. Вивести таблицю множення на 7');

for (let i3 = 1; i3 <= 9; i3++){
    console.log('7 * ' +i3+ ' = ' +(i3 * 7));
}

//////////////////////////////////////////////////////////////////////////////////////

console.log('    4. Знайти суму всіх цілих чисел від 1 до 15');

let sumFrom1To15 = 0;
for(let i4 = 1; i4 <= 15; i4++){
    sumFrom1To15 += i4;
}
console.log(sumFrom1To15);

//////////////////////////////////////////////////////////////////////////////////////

console.log('    5. Знайти добуток усіх цілих чисел від 15 до 35');

let addFrom15To35 = 1n;
for(let i5 = 15n; i5 <= 35n; i5++){
    addFrom15To35 *= i5;
}
console.log(addFrom15To35);

//////////////////////////////////////////////////////////////////////////////////////

console.log('    6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500');

let sumFrom1To500 = 0;
let middle;
for(let i6 = 1; i6 <= 500; i6++){
    sumFrom1To500 += i6;
    middle = sumFrom1To500 / 500;
}
console.log(middle);


//////////////////////////////////////////////////////////////////////////////////////

console.log('    7. Вивести суму лише парних чисел в діапазоні від 30 до 80');

let sumFrom30To80 = 0;

for (let i7 = 30; i7 <= 80; i7++){
    if (i7 % 2 === 0){
        sumFrom30To80 += i7;
    }
}
console.log(sumFrom30To80);

//////////////////////////////////////////////////////////////////////////////////////

console.log('    8. Вивести всі числа в діапазоні від 100 до 200 кратні 3');

for (let i8 = 100; i8 <= 200; i8++){
    if (i8 % 3 === 0){
        console.log(i8);
    }
}
 
//////////////////////////////////////////////////////////////////////////////////////

console.log('    9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники');

const givenNum = 68;

console.log("Дільники натурального числа " + givenNum + ":");

for (let i9 = 1; i9 <= givenNum; i9++){
    if (givenNum % i9 === 0){
        console.log(i9);
    }
}
 
//////////////////////////////////////////////////////////////////////////////////////

console.log("    10. Визначити кількість його парних дільників")

function valueOfEvenDivs(givenNum) { //        функція визначення кількості парних дільників

    const evenDiv = [];

    for (let i9 = 1; i9 <= givenNum; i9++){
        if (givenNum % i9 === 0 && i9 % 2 === 0){
            evenDiv.push(i9);
        }
    }
    return evenDiv;
}
console.log("Кількість парних дільників числа " + givenNum + ": " + valueOfEvenDivs(givenNum));

//////////////////////////////////////////////////////////////////////////////////////

console.log("    11. Знайти суму його парних дільників")

function sumOfEvenDivs(givenNum) {//        функція визначення суми парних дільників
    let sumDivs = 0;

    for (let i9 = 1; i9 <= givenNum; i9++){
        if (givenNum % i9 === 0 && i9 % 2 === 0){
            sumDivs += i9;
        }
    }
    return sumDivs;
}
console.log("Сума парних дільників: " + sumOfEvenDivs(givenNum));

//////////////////////////////////////////////////////////////////////////////////////

console.log("    12. Надрукувати повну таблицю множення від 1 до 10")

for (let i12 = 1; i12 <= 10; i12++){
    for(let j12 = 1; j12 <=10; j12++){
        if (j12 === 1){
            console.log('\n    Табличка множення на ' + i12)
        } 
        console.log(i12 + ' * ' + j12 + ' = ' + i12 * j12);
    }
}

//////////////////////////////////////////////////////////////////////////////////////

console.log("\n    КІНЕЦЬ ДЗ")