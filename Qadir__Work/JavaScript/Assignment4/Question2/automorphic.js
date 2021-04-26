function automorphicChecker() {
    event.preventDefault();

    let number = parseInt(document.getElementById('number').value);
    let result = document.getElementById('result');

    // copying actual number 
    let copyNumber = number;

    let squareNumber = number * number;

    // Now converting square number into a string and also copyNumber also
    squareNumber = squareNumber.toString();
    copyNumber = copyNumber.toString();

    if (squareNumber.endsWith(copyNumber)) {
        result.innerHTML = `Square of <b>${number}</b> is <b>${squareNumber}</b><br>
                            <b>${number}</b> is Automorphic`;
    }
    else {
        result.innerHTML = `Square of <b>${number} is <b>${squareNumber}</b><br>
                            <b>${number}</b> is not Automorphic`;
    }
}