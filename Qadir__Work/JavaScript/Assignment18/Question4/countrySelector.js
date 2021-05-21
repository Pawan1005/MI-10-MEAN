function capitalDropDown() {
    let capitalMenuValue = document.getElementById('capital');

    let countryValue = event.target.value;
    
    // Applying Filter method so we get only that country object those value is match;
    let getCountryWithCapital = countryWithCapital.filter((list) => list["country"] == countryValue);

    // Now setting capital Value, Because it's return array of object so we using 0th index for acces value
    capitalMenuValue.value = getCountryWithCapital[0]['capital'];
}
