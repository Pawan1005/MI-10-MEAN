var number = parseInt(prompt("ENTER NUMBER"));
let isValid = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/.test(number);//only for visa card
if (isValid) {
    alert("you have entered right credit card number");
} else {
    alert("enter correct number");
}
