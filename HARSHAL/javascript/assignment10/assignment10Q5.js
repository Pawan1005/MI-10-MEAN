function countWords(str) {
    var str = str.replace(/(^\s*)|(\s*$)/gi, "");
    str = str.replace(/[ ]{2,}/gi, " ");
    str = str.replace(/\n /, "\n");
    return str.split(" ").length;
}
document.write("number of words in string are: ");
document.write(countWords(prompt("enter a sentence")));
