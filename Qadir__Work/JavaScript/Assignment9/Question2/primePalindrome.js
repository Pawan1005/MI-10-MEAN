// For Checking Number is Prime or not
function isPrimeNumber(number) {
    let isPrime = true;
    if (number > 1) {
        for(let i = 2; i< number; i++){
            if ((number % i) == 0) {
                isPrime = false;
                break;
            }
        }
    }

    else {
        isPrime = false
    }

    // return true is prime otherwise false
    return isPrime;
}

function isPrimePalindrome() {
    event.preventDefault();

    let inputNumber = document.getElementById('number').value;
    let result = document.getElementById('result');
    
    // Converting number into palindrome
    let reverse = inputNumber.split('').reverse().join('');

    // Checking both prime and palindrome
    if (isPrimeNumber(parseInt(inputNumber)) && (reverse == inputNumber)) {
        result.innerHTML = `<b>${inputNumber} is a Prime Palindrome</b>`;
    }

    else {
        result.innerHTML = `<b>${inputNumber} not a Prime Palindrome</b>`;
    }
}
