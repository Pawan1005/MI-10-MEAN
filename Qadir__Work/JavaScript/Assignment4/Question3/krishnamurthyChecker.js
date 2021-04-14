// First creating factorial function that return factorial of number 
const factorial = (digit) => {
    let sum = 1;

    if (digit <=1) {
        return sum;
    }
    else {
        for(let num=2; num<=digit; num++) {
            sum *= num;
        }
        return sum;
    }
}

function isKrishnamurthy() {
    event.preventDefault();

    let number = parseInt(document.getElementById('number').value);
    let result = document.getElementById('result');
    let calculation = document.getElementById('calculation');

    let copyNumber = number;

    let total = 0;

    while (copyNumber > 0) {
        let digit = copyNumber % 10;

        total += factorial(digit);

        // For Seeing result
        document.getElementById('calculation').innerHTML += `<br><b>${total}</b> = ${digit}`;

        // convert float into integer
        copyNumber = parseInt(copyNumber / 10);
    }

    if (number == total) {
        document.getElementById('result').innerHTML = `<b>${number}</b> is a Krishnamurthy Number.`;
    }
    else {
        document.getElementById('result').innerHTML = `<b>${number}</b> is not an Krishnamurthy Number.`;
    }
}