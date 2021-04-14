function sumOfEvenProductOdd() {
    event.preventDefault();

    let number = document.getElementById('number').value;
    let result = document.getElementById('result');

    // Converting All number into Array format
    let numberArray = Array.from(number, (num) => Number(num));
    let sumOfEven = 0 , productOfOdd = 1, listOfEven = [], listOfOdd = [];

    // Creating pattern for only digit
    let pattern = new RegExp('^[0-9]');

    if (pattern.test(number) && (number.length == 6)) {
        for (let index = 0; index < numberArray.length; index++) {

            // If index of present value is divided zero then sum of Even;
            if (numberArray[index] % 2 == 0) {
                listOfEven.push(numberArray[index]);
                sumOfEven += numberArray[index];
            }
            else {
                listOfOdd.push(numberArray[index]);
                productOfOdd*= numberArray[index];
            }
        }

        result.innerHTML = `Sum: ${listOfEven.join("+")} = ${sumOfEven} <br> 
                            Prodcut: ${listOfOdd.join("*")} = ${productOfOdd}`;
    }

    else {
        result.innerHTML = "Invalid Number!! Please enter a 6 digit number."
    }

}