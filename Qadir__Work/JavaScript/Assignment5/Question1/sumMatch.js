function sumFirstAndLastEqualMiddleDigit() {
    event.preventDefault();

    let number = parseInt(document.getElementById('number').value);
    let result = document.getElementById('result');
    let sum = document.getElementById('sum');

    let copyNumber = number.toString();

    // Creating pattern for only digit
    let pattern = new RegExp('^[0-9]');

    if (pattern.test(copyNumber) && (copyNumber.length == 3)) {

        // Storing All digit position proper place
        let first = parseInt(copyNumber[0]);
        let middle = parseInt(copyNumber[1]);
        let last = parseInt(copyNumber[2]);

        sum.innerHTML = `${first} + ${last} = ${middle}`;

        if ((first + last) == middle) {
            result.innerHTML = 'Sum Match';
        }
        else {
            result.innerHTML = 'Sum does not match';
        }
    }
    else {
        result.innerHTML = 'Invalid Number!! Please enter a 3 digit Number.';
    }
        
}