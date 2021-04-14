function checkPrime() {
    event.preventDefault();

    let number = parseInt(document.getElementById('number').value);
    let isPrime = true;
    let prime = document.getElementById('prime');

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

    if (isPrime) {
        prime.innerHTML = `${number} is a Prime Number`;
    }
    
    else {
        prime.innerHTML = `${number} is not a Prime Number`;
    }
}