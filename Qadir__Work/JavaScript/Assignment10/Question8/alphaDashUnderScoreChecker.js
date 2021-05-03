function alphaDashUnderScoreCheck() {
    event.preventDefault();

    let string = document.getElementById("string").value;
    let result = document.getElementById("result");

    // Pattern for Alphabet, Dash and UnderScore
    let alphaDashUnderScorePattern = /^[a-z0-9\_\-]+$/i;

    let isValid = alphaDashUnderScorePattern.test(string);

    result.innerHTML += `<br>Given String <b>${string}</b> ${isValid? "Contain" : "Not Contain"} Alphabet or Dash or UnderScore`;
}
