var alphadashscore = prompt("enter alphnumeric string");
let patt = /[\w-_]/;
var check = patt.test(alphadashscore);
console.log(check);
if (check) {
    document.write("you entered correct alphadashscore string");
} else {
    document.write("you entered incorrect alphadashscore string");
}
