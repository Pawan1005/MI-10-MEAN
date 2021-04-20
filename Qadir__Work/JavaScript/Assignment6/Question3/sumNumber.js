function sumOfNumber() {
    let total = document.getElementById('total');

    let numbers = [];

    document.querySelector('h4').style.display = 'none';

    let flag = true;
    while(flag) {
        let number = prompt('Enter a Number:');
        if (number != 'x' && number != 'X' && number != null) {
            numbers.push(parseInt(number));
        }
        else {
            flag = false;
        }
    }
    
    total.innerHTML = `Sum Of Number are ${numbers.join('+')} = <b>${numbers.reduce((sum, number) => sum += number)}</b>`;
}