export const armstrongOperation = (number) => {
    let copyNumber = number;
    let total = 0;
    while (copyNumber > 0) {
        // taking out each digit from copyNumber and storing into the digit variable
        let digit = copyNumber % 10;
        total += Math.pow(digit, 3);
        // convert float into integer
        copyNumber = parseInt(copyNumber / 10);
    }
    if (number === total) {
        return "It's a Armstrong Number";
    }
    else {
        return 'Not A Armstrong Number';
    }
}

export const factorialOperation = (number) => {
    let result = 1;
    if (number < 0) {
        return 'Please Enter positve number';
    }
    else if (number === 0) {
        return result
    }
    else {
        let i = 1;
        while (i <= number) {
            result *= i;
            i++;
        }
        return result;
    }
}
export const fibonacciOperation = (numbers) => {
    let fibonacciNumbersList = [];
    let firstNumber = 0, secondNumber = 1;
    let nextNumber = 0;
    for (let number = 1; number <= numbers; number++) {
        fibonacciNumbersList.push(firstNumber)
        nextNumber = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = nextNumber;
    }
    return fibonacciNumbersList;
}

export const palindromeOperation = (number) => {
    let palindromeNumber = number.toString().split("").reverse().join("");
    if ((number.toString()) === palindromeNumber) {
        return "It's a Palindrome";
    }
    else {
        return "Not A Palindrome";
    }
}
