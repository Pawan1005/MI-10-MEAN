function vowelChecker() {
    event.preventDefault();

    let character = document.getElementById('character').value;
    let result = document.getElementById('result');

    // Declaring and Defiend all vowels character in array
    const vowels = ['a', 'e', 'i','o', 'u'];

    // Now converting all input character into the lowercase
    let characterLowerCase = character.toLowerCase();

    // Now checking if any character present in vowels or not, using array method
    if (vowels.includes(characterLowerCase)) {
        result.innerHTML = `${character} is a Vowel`;
    }
    else {
        result.innerHTML = `<b>${character}</b> is not a Vowel`;
    }
}