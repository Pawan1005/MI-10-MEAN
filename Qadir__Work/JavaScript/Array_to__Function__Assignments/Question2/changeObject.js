function changeObjectValue() {
    let newObject = document.getElementById('newObject');
    let mainValue = document.getElementById('mainValue');
    let finalValue = document.getElementById('finalValue');

    var person = {firstName:"John", lastName:"Doe", block:["a","b",{e:"block_one", f:"block_two", g:[1,{main:"main_value"},3]},"c"], eyeColor:"blue"};

    mainValue.innerHTML = `Actual Main Value: <b>${person.block[2].g[1].main}</b>`;

    person.block[2].g[1].main = 'final_value';

    finalValue.innerHTML = `After Changing Main value to Final Value is: <b>${person.block[2].g[1].main}</b>`;
    newObject.innerHTML = `Now <b>New Object</b> is: <b>${JSON.stringify(person)}</b>`;
}
