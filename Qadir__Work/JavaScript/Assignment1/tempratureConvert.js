// Converting Celcius To Fahrenheite
function celciusToFahrenheit() {
    // Prevent For Page Reload after button click
    event.preventDefault();

    // Getting input value and store in celcius variable
    let celcius = document.getElementById('temprature').value;

    // converting celcius value to Fahrnite and store into the fahrnite variable
    let fahrnite = (parseInt(celcius) * 9 / 5) + 32;

    // providing the celcius value to the span of celcius id element
    document.getElementById('celcius').innerText = celcius;

    // providing the fahrnite value to the span of fahrnite id element
    document.getElementById('fahrnite').innerText = fahrnite;
}