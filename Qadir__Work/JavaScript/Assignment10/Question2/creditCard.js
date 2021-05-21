function creditCardChecker(){
    event.preventDefault();

    let numbers = document.getElementById('numbers').value;
    let result = document.getElementById('result');

    // Creating Pattern for Different Credit Cards
    // 1: For Visa --> Starting with 4, total length 13 or 16 digits. End with digits also
    let visaPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

    // 2: For Master Card --> Starting With 51 to 55, Total length 16 digits, End with digits also
    let masterPattern = /^(?:5[1-5][0-9]{14})$/;

    // 3: For Discover Card --> Starting with 6011, digits length 16 or starting with 5, Total length 15 digits
    let discoverPattern = /^(?:6(?:011|5[0-9]{2})[0-9]{12})$/;

    // 4: For JCB Card --> Starting with 2131 or 1800, digits length 15 or starting with 35, digits length 16.
    let jcbPattern = /^(?:2131|1800|35[0-9]{3})[0-9]{11}$/;

    // 5: For American Express --> Starting with 34 or 37, length 15 digits.
    let americanPattern = /^(?:3[47][0-9]{13})$/;

    let isCardValid = false;
    let cardName = '';
    
    if (visaPattern.test(numbers)) {
        isCardValid = true;
        cardName = "Visa";
    }
    else if (masterPattern.test(numbers)) {
        isCardValid = true;
        cardName = "Master";
    }
    else if (discoverPattern.test(numbers)) {
        isCardValid = true;
        cardName = "Discover";
    }
    else if (jcbPattern.test(numbers)) {
        isCardValid = true;
        cardName = "JCB";
    }
    else if (americanPattern.test(numbers)) {
        isCardValid = true;
        cardName = "American Express";
    }
    else {
        cardName = "Not Valid Card";
    }

    result.innerHTML += `Credit Card Number: <b>${numbers}</b> --> It's <b>${isCardValid ? 'Valid' : 'Not Valid'}</b> And Name of The Card is: <b>${cardName}</b><br>`;
}
