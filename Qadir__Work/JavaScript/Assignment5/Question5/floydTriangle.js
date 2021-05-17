function generateFloydTriangle() {
    event.preventDefault();

    let number = parseInt(document.getElementById('number').value);
    let result = document.getElementById('result');
    let counter = 1;

    for (let row=1; row <= number; row++) {
        
        for(let column = 1; column <= row; column++) {
            result.innerHTML += ` ${counter} `
            counter++;
        }

        result.innerHTML += "<br>";
    }
}