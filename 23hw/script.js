class SuperMath {
    constructor() {}

    check(obj) {
        if (this.isValidOperator(obj.znak)) {
            const res = this.calculate(obj.X, obj.Y, obj.znak);
            console.log(`Результат: ${res}`);
        } else {
            console.log("Введіть правильний оператор");
            this.input();
        }
    }

    calculate(X, Y, znak) {
        switch (znak) {
            case "+":
                return X + Y;
            case "-":
                return X - Y;
            case "/":
                return X / Y;
            case "*":
                return X * Y;
            case "%":
                return X % Y;
            default:
                return NaN;
        }
    }

    isValidOperator(operator){
        const validOperator = ['+', '-', '/', '*', '%'];
        return validOperator.includes(operator);
    }

    input() {
        const X = +prompt("Введіть перше значення");
        const Y = +prompt("Введіть друге значення");
        const znak = prompt("Введіть коректний оператор ( + - / * % )");
        const obj = { X, Y, znak };
        this.check(obj);
    }
}

const p = new SuperMath();
p.check({X:12, Y: 3, znak: '-'});
