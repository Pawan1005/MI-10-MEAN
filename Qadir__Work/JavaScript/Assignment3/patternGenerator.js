function generatePattern() {
    event.preventDefault();

    let rows = parseInt(document.getElementById('rows').value);
    let cols = parseInt(document.getElementById('cols').value);
    let pattern = document.getElementById('pattern');

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            pattern.innerHTML += `*`;
        }
        pattern.innerHTML += `<br>`;
    }
}