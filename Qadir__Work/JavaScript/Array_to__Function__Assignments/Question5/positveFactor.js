function factorNumber() {
    event.preventDefault();

    let number = parseInt(document.getElementById('number').value);
    let result = document.getElementById('result');

    // Storing All positve Factor Numbers in list
    let positveNumberList = [];

    if (number > 0) {
        for (let positve = 1; positve <= number; positve++) {
            if (number % positve == 0) {
                // Pushing all postive Factor number into the list
                positveNumberList.push(positve);
            }
        }
    }

    else {
        result.innerHTML = `Please Enter a <b>Positve Number</b>`;
    }
    
    result.innerHTML = `All Positve Factor Numbers Are: <br><b>${positveNumberList.join('<br>')}</b>`;
}