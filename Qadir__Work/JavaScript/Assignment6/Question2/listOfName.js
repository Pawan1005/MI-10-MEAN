function namesList() {
    let nameWithJoin = document.getElementById('nameWithJoin');
    let nameAscendingOrder = document.getElementById('nameAscendingOrder');
    let nameDescendingOrder = document.getElementById('nameDescendingOrder');

    let names = [];

    document.querySelector('h4').style.display = 'none';

    let flag = true;
    while(flag) {
        let name = prompt('Enter a Name:');
        if (name != 'x' && name != 'X' && name != null) {
            names.push(name);
        }
        else {
            flag = false;
        }
    }
    
    nameWithJoin.innerHTML = `List of Names With Join <q>~</q> are: <b>${names.join('~')}</b>`;
    nameAscendingOrder.innerHTML = `List of Names in Ascending Order are: 
                                    <b>${names.sort().map((name) => name.toUpperCase())}</b>`;
    nameDescendingOrder.innerHTML = `List of Names in Descending Order are: 
                                    <b>${names.reverse().map((name) => name.toUpperCase())}</b>`;
}