function primeSeries() {
    event.preventDefault();

    let startRange = parseInt(document.getElementById('start').value);
    let lastRange = parseInt(document.getElementById('last').value);

    let result = document.getElementById('result');
    let range = document.getElementById('range');

    result.style.display = 'block';

    range.innerHTML = `Prime Range From <b> ${startRange} and ${lastRange}</b> are:`

    // For Number is prime or not;
    let isPrime;

    for (let number = startRange; number <= lastRange; number++) {

        // Skip 0 and 1 for prime 
        if (number ==1 || number == 0) {
            continue;
        }

        isPrime = true;

        for(let prime=2; prime<= number/2; ++prime) {
            if (number % prime == 0) {
                isPrime = false;
                break;
            }
        }
        
        if(isPrime == true) {
            result.innerHTML += `<br>${number}`;
        }
    }
}