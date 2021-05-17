function trimString(){
    event.preventDefault();

    let string = document.getElementById('string').value;
    let text = document.getElementById('text');
    let result = document.getElementById('result');

    text.innerHTML = string;
    result.innerHTML = string.trim();
}

function indexFinder(){
    event.preventDefault();

    let string1 = document.getElementById('string1').value;
    let val = document.getElementById('val').value;

    let text = document.getElementById('text');
    let result = document.getElementById('result');

    text.innerHTML = string1;
    result.innerHTML = 'Index is:' + string1.indexOf(val);
}

const sliceString = () => {
    event.preventDefault();

    let string3 = document.getElementById('string3').value;
    let firstIndex = parseInt(document.getElementById('firstIndex').value);
    let lastIndex = parseInt(document.getElementById('lastIndex').value);

    let text = document.getElementById('text');
    let result = document.getElementById('result');

    text.innerHTML = string3;
    result.innerHTML ='After Slicing: ' + string3.slice(firstIndex, lastIndex);
}

const lastIndexFinder = () => {
    event.preventDefault();

    let string2 = document.getElementById('string2').value;
    let val = document.getElementById('val').value;

    let text = document.getElementById('text');
    let result = document.getElementById('result');

    text.innerHTML = string2;
    result.innerHTML = 'Index is:' + string2.lastIndexOf(val);
}

const concatStrings = () => {
    event.preventDefault();

    let string4 = document.getElementById('string4').value;
    let stringTwo = document.getElementById('stringTwo').value;

    let text = document.getElementById('text');
    let result = document.getElementById('result');

    text.innerHTML = string4 + ',' + stringTwo;
    result.innerHTML = string4.concat(stringTwo);
}

const substrMethod = () => {
    event.preventDefault();

    let string5 = document.getElementById('string5').value;
    let startIndex1 = parseInt(document.getElementById('startIndex1').value);
    let length = parseInt(document.getElementById('length').value);

    let text = document.getElementById('text');
    let result = document.getElementById('result');

    text.innerHTML = string5;
    result.innerHTML = string5.substr(startIndex1, length);
}

const stringLength = () => {
    event.preventDefault();

    let string6 = document.getElementById('string6').value;
    let text = document.getElementById('text');
    let result = document.getElementById('result');

    text.innerHTML = string6;
    result.innerHTML = 'Total Length String is: ' + string6.length;
}

const upperCaseString = () => {
    event.preventDefault();

    let string7 = document.getElementById('string7').value;

    let text = document.getElementById('text');
    let result = document.getElementById('result');

    text.innerHTML = string7;
    result.innerHTML = 'Into Upper Case: ' + string7.toUpperCase();
}

const lowerCaseString = () => {
    event.preventDefault();

    let string8 = document.getElementById('string8').value;

    let text = document.getElementById('text');
    let result = document.getElementById('result');

    text.innerHTML = string8;
    result.innerHTML = 'Into Lower Case: ' + string8.toLowerCase();
}

const splitString = () => {
    event.preventDefault();

    let string9 = document.getElementById('string9').value;
    let splitBase = document.getElementById('split').value;

    let text = document.getElementById('text');
    let result = document.getElementById('result');

    text.innerHTML = string9;
    result.innerHTML = 'Split String: ' + string9.split(splitBase);
}

const charAtString = () => {
    event.preventDefault();

    let string10 = document.getElementById('string10').value;
    let position = parseInt(document.getElementById('position').value);

    let text = document.getElementById('text');
    let result = document.getElementById('result');

    text.innerHTML = string10;
    result.innerHTML = `Character Present at ${position} in String is: ` + string10.charAt(position);
}

const searchString = () => {
    event.preventDefault();

    let string11 = document.getElementById('string11').value;
    let word = document.getElementById('word').value;

    let text = document.getElementById('text');
    let result = document.getElementById('result');

    text.innerHTML = string11;
    result.innerHTML = 'Search Word Positions in String is: ' + string11.search(word);
}

const replaceString = () => {
    event.preventDefault();

    let string12 = document.getElementById('string12').value;
    let newWord = document.getElementById('newWord').value;
    let replaceWord = document.getElementById('replaceWord').value;

    let text = document.getElementById('text');
    let result = document.getElementById('result');

    text.innerHTML = string12;
    result.innerHTML = 'New String is: ' + string12.replace(newWord, replaceWord);
}