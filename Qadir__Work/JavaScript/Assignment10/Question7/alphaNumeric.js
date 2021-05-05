function alphaNumericChecker() {
    event.preventDefault();

    let string = document.getElementById('string').value;
    let result = document.getElementById('result');

    // Pattern for Alpha Numeric
    let alphaNumeric = /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i;

    let isAlphaNumeric = alphaNumeric.test(string);

    result.innerHTML += `<br><b>${string}</b> it's a <b>${isAlphaNumeric ? 'Alpha Numeric' : 'Not Alpha Numeric'}.</b>`;
}
