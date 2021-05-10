let patt = /\d{2}\D\d{2}\D\d{2,4}/g;
let string = prompt("enter date");
let date = string.match(patt);
document.write("date is: " + date);
