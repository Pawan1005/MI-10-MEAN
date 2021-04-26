const isLowerCase = (character) => {
    return character.match(/[a-z]/);
}

const isUpperCase = (character) => {
    return character.match(/[A-Z]/);
}

function stringCaseConvert() {
    event.preventDefault();

    let text = document.getElementById('text').value;
    let result = document.getElementById('result');

    //Creating variable For storing Converted Text Case
    let convertCaseText = "";
    let countUpper = 0;
    let countLower = 0;

    for (let index = 0; index< text.length; index++) {

        if (isLowerCase(text.charAt(index))) {
            convertCaseText += text.charAt(index).toUpperCase();
            countLower++;
        }
        
        else if (isUpperCase(text.charAt(index))){
            convertCaseText += text.charAt(index).toLowerCase();
            countUpper++;
        }
    }

    if (countLower > countUpper) {
        result.innerHTML = `Original Text: <b>${text}</b> <br> Converted Text Case: <b>${text.toLowerCase()}</b>`;    
    }

    else if (countUpper > countLower) {
        result.innerHTML = `Original Text: <b>${text}</b> <br> Converted Text Case: <b>${text.toUpperCase()}</b>`;
    }

    else {
        result.innerHTML = `Original Text: <b>${text}</b> <br> Converted Text Case: <b>${convertCaseText}</b>`;
    }
    // console.log('Total Lower',countLower);
    // console.log('Total Upper',countUpper);
    
}