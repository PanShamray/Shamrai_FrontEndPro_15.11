const ask = prompt("Оберіть дію яку хочете використати з числами: add(+), sub(-), mult(*), div(/)");
const x = prompt("перше число");
const y = prompt("друге число");

const firstNum = +x;
const secNum = +y;

switch (ask) {
    //                                        ДІЯ ДОДАВАННЯ
    case "add":
       let sum = firstNum + secNum;
       alert(`Результат дії add:
       ${firstNum} + ${secNum} = ${sum}`);
       break;
    //                                        ДІЯ ВІДНІМАННЯ   
    case 'sub':
        let riz = firstNum - secNum;
        alert(`Результат дії sub:
        ${firstNum} - ${secNum} = ${riz}`);
        break;
    //                                        ДІЯ МНОЖЕННЯ                                           
    case 'mult':
        let mnozh = firstNum * secNum;
        alert(`Результат дії mult:
        ${firstNum} * ${secNum} = ${mnozh}`);
        break;
    //                                        ДІЯ ДІЛЕННЯ 
    case 'div':
        let dillenya = firstNum / secNum;
        alert(`Результат дії div:
        ${firstNum} / ${secNum} = ${dillenya}`);
        break;
    //                                        ПОМИЛКА            
    default:
        alert("Будь-ласка, коректно введіть дію, яку ви обираєте.");
}