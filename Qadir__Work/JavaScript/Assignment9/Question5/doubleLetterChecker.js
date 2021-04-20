function isDoubleLetter() {
    event.preventDefault();

    let word = document.getElementById('word').value;
    let result = document.getElementById('result');

    // Storing All Double letter word in array
    let doubleLetter = [];

    // loop through all word
    for (let index = 0; index < word.length; index++) {
        
        // Now Checking previous letter to next letter are same or not
        if (word[index] == word[index+1]) {
            doubleLetter.push(word[index]);
        }
    }

    doubleLetter.length ? 
        (result.innerHTML = `Double Letter are: ${doubleLetter.toString()}`)
        : (result.innerHTML = 'No Double Letter in Word');
}