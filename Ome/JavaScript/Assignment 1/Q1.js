function MethodWithVar(){
    event.preventDefault();
    let x,y,z;
    x = parseInt(document.getElementById('num1').value);
    y = parseInt(document.getElementById('num2').value);
    z = x;
    x = y;
    y = z;
    document.getElementById('swap_1').innerHTML=  x ;
    document.getElementById('swap_2').innerHTML=  y ;
}

function MethodWithoutVar(){
    event.preventDefault();

    document.getElementById('swap_3').innerHTML=
    document.getElementById('num2').value
    document.getElementById('swap_4').innerHTML=  
    document.getElementById('num1').value
}
