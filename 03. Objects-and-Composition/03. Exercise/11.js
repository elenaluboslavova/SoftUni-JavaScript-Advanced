function notation(inputArray) {
    let numberArray = [];
    let operatorsArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (typeof inputArray[i] == 'number') {
            numberArray.push(inputArray[i]);
        }
        else {
            operatorsArray.push(inputArray[i]);
        }
    }

    let result = 0;

    while (true) {
        if (numberArray.length == 1 && operatorsArray.length == 0) {
            console.log(result);
            break;
        }
        if (numberArray.length > 1 && operatorsArray.length == 0) {
            console.log("Error: too many operands!");
            break;
        }
        if (numberArray.length == 1 && operatorsArray.length > 0) {
            console.log("Error: not enough operands!");
            break;
        }
        let num1 = numberArray[0];
        let num2 = numberArray[1];
        let operator = operatorsArray.shift();

        const parser = {
            '+'() { return num1 + num2 },
            '-'() { return num1 - num2 },
            '*'() { return num1 * num2 },
            '/'() { return Math.ceil(num1 / num2) }
        };
        result = parser[operator]();
        numberArray.shift();
        numberArray.shift();
        numberArray.unshift(result);
    }
}

notation([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/']);