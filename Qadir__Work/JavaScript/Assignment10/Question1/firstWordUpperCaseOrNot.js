function firstWordUpperCase() {
    event.preventDefault();

    let string = document.getElementById('string').value;
    let result = document.getElementById('result');

    // Pattern for String, Starting First character in Upper Case
    let pattern = /^[A-Z]/;

    // If 
    let upperCaseOrNot = pattern.test(string);

    if(upperCaseOrNot) {
        result.innerHTML = `First character of: <b>${string}</b> -> Is Upper Case<br>`;
    }
    else {
        result.innerHTML += `First character of: <b>${string}</b> -> Not in Upper Case<br>`;
    }
}
