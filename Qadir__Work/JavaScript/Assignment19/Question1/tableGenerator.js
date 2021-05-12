function createTable() {
    event.preventDefault();

    let number = document.getElementById('number').value;
    let result = document.getElementById('result');

    let numberPattern = /^[0-9]*$/i;

    try {
        if(numberPattern.test(number) && (parseInt(number) >=0)) {
            // Converting number to Integer Form
            let numberInt = parseInt(number);

            // For particular number Table upTo 10x
            let upTo = 10;

            result.innerHTML = "";

            for (let num = 1; num <= upTo; num++) {
                result.innerHTML += `${numberInt} x ${num} = ${numberInt*num}<br>`;
            }
        }
        else {
            throw new Error('Please Enter a Number Only Or Positve Number');
        }
    }
    catch(error) {
        result.innerHTML = error.message;
    }
}
