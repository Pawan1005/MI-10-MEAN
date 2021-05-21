// List of Object --> Country With There Capital
var countryWithCapital = [
    {country : 'India', capital: 'New Delhi'},
    {country : 'Australia', capital: 'Canberra'},
    {country : 'Afghanistan', capital:'Kabul'},
    {country : 'Brazil', capital:'Brasilia'},
    {country : 'New Zealand', capital:'Wellington'},
    {country : 'China', capital:'Beijing'},
    {country : 'Egypt', capital:'Cairo'},
    {country : 'Saudi Arabia', capital:'Riyadh'},
    {country : 'France', capital:'Paris'},
    {country : 'Japan', capital:'Tokyo'},
    {country : 'United States of America', capital:'Washington, D.C.'},
    {country : 'United Kingdom', capital:'London'},
    {country : 'United Arab Emirates', capital:'Abu Dhabi'}
];

let countryMenu = document.createElement('select');
let capitalMenu = document.createElement('select');

countryMenu.id = "countries";
capitalMenu.id = "capital";

// Creating and Setting Default value in Select tag or dropdown for Capital and Country
let selectedValue = document.createElement('option');
selectedValue.value = "Country";
selectedValue.text = "Country";
selectedValue.selected = true;
selectedValue.disabled = true;

countryMenu.appendChild(selectedValue);

// For Capital Default Value
let selectedCapitalValue = document.createElement('option');
selectedCapitalValue.value = "Capital";
selectedCapitalValue.text = "Capital";
selectedCapitalValue.selected = true;
selectedCapitalValue.disabled = true;

capitalMenu.appendChild(selectedCapitalValue);

for (let index = 0; index < countryWithCapital.length; index++) {

    let countryOption = document.createElement('option');

    countryOption.value = countryWithCapital[index]['country'];
    countryOption.text = countryWithCapital[index]['country'];

    countryMenu.appendChild(countryOption);
}

for (let index = 0; index < countryWithCapital.length; index++) {

    let countryOption = document.createElement('option');

    countryOption.value = countryWithCapital[index]['capital'];
    countryOption.text = countryWithCapital[index]['capital'];

    capitalMenu.appendChild(countryOption);
}

document.body.appendChild(countryMenu);
document.body.appendChild(capitalMenu);

document.getElementById('countries').addEventListener('change', capitalDropDown);
