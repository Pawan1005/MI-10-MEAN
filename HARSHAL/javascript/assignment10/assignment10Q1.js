var user = prompt("enter a word");
var patt = /^[A-Z]/;
var check = patt.test(user);
if (check) {
    document.write("You entered a word with 1st letter capital");
} else {
    document.write("You entered a word with 1st letter not a capital letter");
}
