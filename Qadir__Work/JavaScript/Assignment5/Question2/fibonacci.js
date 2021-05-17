function fibonacciSeries() {
    event.preventDefault();

    let numbers = parseInt(document.getElementById('number').value);
    let result = document.getElementById('result');

    let firstNumber = 0, secondNumber = 1;
    let nextNumber = 0;

    result.style.display = 'block';

    for (let number = 1; number <= numbers; number++) {
        
        result.innerHTML += `<br> ${firstNumber}`;

        nextNumber = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = nextNumber;
    }
}