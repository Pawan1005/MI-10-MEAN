function countWordsAndSpace() {
    event.preventDefault();

    let sentence = document.getElementById('sentence').value;
    let result = document.getElementById('result');

    // Using regular expression for finding space
    let spacePattern = /\s/g;

    // Storing Total word present in sentence
    let totalWord = sentence.split(" ").length;

    // Sotring Total whitespace present in sentence
    let totalSpace = sentence.match(spacePattern).length;

    result.innerHTML = `<b>Total Words: ${totalWord}</b> and <b>Whitespaces: ${totalSpace}</b>`;
}