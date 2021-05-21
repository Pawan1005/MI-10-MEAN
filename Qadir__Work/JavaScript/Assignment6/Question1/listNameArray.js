function enterNamesList() {
    let namesList = document.getElementById('namesList');
    let namesListNewLine = document.getElementById('namesListNewLine');

    let listOfNames = [];

    let ask = 0;
    let askTimes = 5;
    while(ask < askTimes) {
        let name = prompt('Enter a Names:');
        listOfNames.push(name);
        ask++;
    }

    document.querySelector('h4').style.display = 'none';

    namesList.innerHTML = `List Of Names Are: <b>${listOfNames.toString()}</b>`;

    namesListNewLine.innerHTML = `List Of Names Are In New Line:<br>`;
    
    listOfNames.forEach((name, index) => {
        namesListNewLine.innerHTML += "<b>Name "+(index+1)+": "+name+"</b>"+'<br>';
    });
}