function checkNumberEvenOrOdd() {
    event.preventDefault();

    try {
        var number = document.getElementById('number').value;
        let numberPattern = /^[0-9]*$/;
        if (numberPattern.test(number) && parseInt(number) > 0) {
            let result = document.getElementById('result');

            // Converting input number into Integer form
            let numberInt = parseInt(number);
            if ((numberInt % 2) == 0 ) {
                result.innerHTML = `${numberInt} is Even Number`;
            }

            else {
                result.innerHTML = `${numberInt} is Odd Number`;
            }
        }
        
        else {
            throw new Error("Please Enter Number Only");
        }
    }
    catch(error) {
        result.innerHTML = "";
        alert(error.message);
    }
}
