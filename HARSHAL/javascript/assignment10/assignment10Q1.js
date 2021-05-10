var a = prompt("write one word");
var firstindex = a.charAt(0);
var check = firstindex.toUpperCase();
if (firstindex == check) {
    alert("the 1st character if string is in uppercase");
} else {
    alert("it is not in uppercase");
}
