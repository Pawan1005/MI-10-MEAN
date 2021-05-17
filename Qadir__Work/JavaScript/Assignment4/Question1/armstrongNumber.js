function checkArmstrong() {
    event.preventDefault();

    let number = parseInt(document.getElementById('number').value);
    
    // copying actual number for armstrong operation
    let copyNumber = number;

    // declare and defiend total is zero
    let total = 0;

    while (copyNumber > 0) {
        // taking out each digit from copyNumber and storing into the digit variable
        let digit = copyNumber % 10;

        total += Math.pow(digit, 3);

        // convert float into integer
        copyNumber = parseInt(copyNumber / 10);
    }

    if (number == total) {
        document.getElementById('result').innerHTML = `<b>${number}</b> is a Armstrong Number.`;
    }
    else {
        document.getElementById('result').innerHTML = `<b>${number}</b> is not an Armstrong Number.`;
    }
}