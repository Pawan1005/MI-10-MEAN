function emailAddressChecker() {
    event.preventDefault();

    let emailAddress = document.getElementById("emailAddress").value;
    let result = document.getElementById('result');

    /*  Email Address Pattern 
        Uppercase (A-Z) and lowercase (a-z) English letters.
        Digits (0-9).
        Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
        Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.
    */
    let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let isValid = emailPattern.test(emailAddress);

    result.innerHTML += `<br><b>${emailAddress}</b> it's a <b>${isValid ? 'Valid' : 'Not Valid'}</b> Email Address`;
}
