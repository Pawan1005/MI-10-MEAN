var url = prompt("enter url");
var patt = /^www.([a-zA-Z0-9]+).([a-z]{2,9})$/;
var check = patt.test(url);
if ((check == true)) {
    document.write("you entered correct url");
} else {
    document.write("you entered incorrect url");
}
