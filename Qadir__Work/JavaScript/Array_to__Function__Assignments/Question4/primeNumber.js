function checkPrime() {
    event.preventDefault();

    let number = parseInt(document.getElementById('number').value);
    let isPrime = true;
    let result = document.getElementById('result');

    // Decalring arrow function with one parameter as number and return flag as a true or false
    const primeOrNot = (number) => {
        if (number > 1) {
            for(let i = 2; i< number; i++){
                if ((number % i) == 0) {
                    isPrime = false;
                    break;
                }
            }
        }
    
        else {
            isPrime = false
        }
        return isPrime;
    }

    // Passing number as a parameter
    primeOrNot(number)

    if (isPrime) {
        result.innerHTML = `<b>${number}</b> is a Prime Number`;
    }
    
    else {
        result.innerHTML = `<b>${number}</b> is not a Prime Number`;
    }
}