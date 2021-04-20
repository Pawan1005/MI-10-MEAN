function factorial(number) {
    let result = 1;
    
    if (number < 0 ) {
        result = 1
    }
    else if (number == 0) {
        result = 1
    }
    else {
        let i = 1;
        while (i <= number) {
            result *= i;
            i++;
        }
        result;
    }

    return result;
}

function sumOfFactorial() {
    let total = document.getElementById('total');

    let numbersFactorial = [];
    let numbers = []

    document.querySelector('h4').style.display = 'none';

    let flag = true;
    while(flag) {
        let number = prompt('Enter a Number:');
        if (number != 'x' && number != 'X' && number != null) {
            let fact = factorial(parseInt(number));
            numbers.push(number);
            numbersFactorial.push(fact);
        }
        else {
            flag = false;
        }
    }
    
    total.innerHTML = `Actual Numbers: ${numbers} <br> Sum Of Factorial are ${numbersFactorial.join('+')} = <b>${numbersFactorial.reduce((sum, number) => sum += number)}</b>`;
}