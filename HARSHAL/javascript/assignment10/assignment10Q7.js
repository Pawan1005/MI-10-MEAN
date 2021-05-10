var alphanumeric = prompt("enter alphnumeric string");
let patt = /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i;
var check = patt.test(alphanumeric);
console.log(check);
if ((check == true)) {
    document.write("you entered correct aplhanumeric string");
} else {
    document.write("you entered incorrect aplhanumeric string");
}
