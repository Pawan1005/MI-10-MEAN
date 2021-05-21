function alphaDashUnderScoreCheck() {
    event.preventDefault();

    let string = document.getElementById("string").value;
    let result = document.getElementById("result");

    // Pattern for Alphabet, Dash and UnderScore
    let alphaDashUnderScorePattern = /^[a-z0-9\_\-]+$/i;

    let isValid = alphaDashUnderScorePattern.test(string);

    // If digit only pattern for Ignore
    let digit = /^[0-9]*$/

    // IF there is only digit
    if (digit.test(string)) {
        result.innerHTML += `<br>Given String <b>${string}</b> Not Contain Alphabet or Dash or UnderScore`;
    }
    else {
        result.innerHTML += `<br>Given String <b>${string}</b> ${isValid? "Contain" : "Not Contain"} Alphabet or Dash or UnderScore`;
    }
    
}
