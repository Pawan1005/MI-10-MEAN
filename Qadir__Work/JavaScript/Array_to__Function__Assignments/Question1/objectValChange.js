function changeObjectValue() {
    let newObject = document.getElementById('newObject');
    let keys = document.getElementById('keys');
    let eyeColors = document.getElementById('eyeColors');
    let method = document.getElementById('method');

    var person = {firsName: 'Jhon', lastName:'Doe', age:50, eyeColor:"blue"};

    // Chnanging eyeColor value
    person.eyeColor = "green";

    keys.innerHTML = `List of Keys Above Object is:<br> <b>${Object.keys(person).join('<br>')}</b>`;
    eyeColors.innerHTML = `New Eye Color is: <b>${person.eyeColor}</b>`;

    // Creating Method inside in Object
    person.fullName = function(){return this.firsName +' '+ this.lastName};

    method.innerHTML = `Method in person Object is: <b>${Object.keys(person)[Object.keys(person).length-1]}</b>, FirstName and LastName is: <b>${person.fullName()}</b>`;

    person.fullName = person.fullName.toString();
    newObject.innerHTML = `Now <b>New Object</b> is: <b>${JSON.stringify(person)}</b>`;
}
