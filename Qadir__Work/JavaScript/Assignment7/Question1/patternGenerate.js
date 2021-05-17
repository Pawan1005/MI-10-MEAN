function pattern(){
    event.preventDefault();

    let numbers = parseInt(prompt('Enter Number For Pattern Generation:'));
    let result = document.getElementById('result');
    let row, column;
    
    for(row = 0; row <numbers; row++){
        if(-1 < 0 && row == 0){
            result.innerHTML += '1<br>'
        }
        let num = 1;

        for(column = 0; column <=row; column++) {
            if (row == 0 || column <= 0) {
                num =1 ;
            }
            else if (row>=2 || column >=1) {
                num = num + 1;
            }
            result.innerHTML += ` ${num} `
        }
        result.innerHTML += "1<br>";
    }

    document.getElementById('btn').style.display = 'none';
}
