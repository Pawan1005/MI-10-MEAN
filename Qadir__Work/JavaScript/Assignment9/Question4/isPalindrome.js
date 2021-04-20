function isPalindrome(){
    event.preventDefault();

    let string = document.getElementById('string').value;
    let result = document.getElementById('result');

    let reverseString = string.split('').reverse().join('');

    // checking reverseString is same as given string
    if (reverseString == string) {
        result.innerHTML = `<b>${string} is a Palindrome</b>`;
    }
    else {
        result.innerHTML = `<b>${string} not a Palindrome</b>`;
    }
}