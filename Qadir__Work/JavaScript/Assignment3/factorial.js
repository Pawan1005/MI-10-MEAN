function factorial() {
    event.preventDefault();

    let number = parseInt(document.getElementById('number').value);
    let result = 1;
    
    if (number < 0) {
        document.getElementById('total').innerHTML = '<b>Please Enter positve number</b>'
    }
    else if (number == 0) {
        document.getElementById('total').innerHTML = `Factorial of <b>${number}</b> is <b>1</b>`;
    }
    else {
        let i = 1;
        while (i <= number) {
            result *= i;
            i++;
        }
        document.getElementById('total').innerHTML = `Factorial of <b>${number}</b> is <b>${result}</b>`;
    }
}