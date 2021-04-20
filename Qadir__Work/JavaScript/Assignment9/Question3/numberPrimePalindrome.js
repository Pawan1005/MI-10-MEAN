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

function isNumberPrimePalindrome() {
    event.preventDefault();

    let numbers = document.getElementById('numbers');
    let result = document.getElementById('result');
    
    let reverse = '';

    // Creating Array for Storing input numbers and Prime Palindrome number
    let primePalindromeNumbers = [];
    let listNumbers = [];
    let notPrimePalindrome = [];

    // Asking 5 time from user a input number
    let ask = 5;
    while (ask > 0) {
        let inputNumbers = prompt('Enter a  5 Numbers:');
        listNumbers.push(inputNumbers);

        // Converting number into palindrome
        reverse = inputNumbers.split('').reverse().join('');

        // Checking both prime and palindrome
        if (isPrimeNumber(parseInt(inputNumbers)) && (reverse == inputNumbers)) {
            primePalindromeNumbers.push(inputNumbers);
        }
    
        else {
            notPrimePalindrome.push(inputNumbers)
        }
        ask--;
    }

    numbers.innerHTML = `List of Numbers are ${listNumbers.toString()}`
    result.innerHTML = `<b>Prime Palindrome Numbers are: </b> ${primePalindromeNumbers.toString()} <br>`;
    result.innerHTML += `<b>Not Prime Palindrome Numbers are: </b> ${notPrimePalindrome.toString()} <br>`;
}