function checkEvenOrOdd() {
    event.preventDefault();

    let number = parseInt(document.getElementById('number').value);
    let result = document.getElementById('even');

    if ((number % 2) == 0) {
        result.innerHTML = `${number} is a Even Number`;
    }

    else {
        result.innerHTML = `${number} is a Odd Number`;
    }
}