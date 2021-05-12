function addProgramming() {
    event.preventDefault();

    let programmingName = document.getElementById('programming');
    let programmingList = document.querySelector('#programmingList');

    // Creating List tag
    let li = document.createElement('li');

    li.innerText = programmingName.value.toUpperCase();

    programmingList.appendChild(li);

    programmingName.value = "";
}
