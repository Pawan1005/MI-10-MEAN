function isPalindrome(){
    event.preventDefault();

    let number = document.getElementById('number').value;
    let result = document.getElementById('result');

    let reverseNumber = '';
    let copyNumber = parseInt(number);

    let digit = 0;
    while (copyNumber > 0) {
        digit = copyNumber % 10;
        reverseNumber += digit;
        copyNumber = Math.floor(copyNumber / 10);
    }

    // checking reverseNumber is same as given number
    if (reverseNumber == number) {
        result.innerHTML = `<b>${number} is a Palindrome</b>`;
    }
    else {
        result.innerHTML = `<b>${number} not a Palindrome</b>`;
    }
}
