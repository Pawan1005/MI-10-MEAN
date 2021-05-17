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
    let actualArray = document.getElementById('actualArray');
    let descendingOrder = document.getElementById('descendingOrder');

    let numbersFactorial = [];
    let numbers = [];

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
    
    actualArray.innerHTML = `Actual Number List Without Factorial Is: <b>${numbers.join(", ")}</b>, <br> With Each Factorial is <b>${numbersFactorial.join(", ")}</b>`
    descendingOrder.innerHTML = `Descending Order Of Each Number Factorial is: <b>${numbersFactorial.sort(function(a, b){ return b - a}).join(", ")}</b>`;
}