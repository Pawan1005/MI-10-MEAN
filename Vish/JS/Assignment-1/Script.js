function swapMethod1() {
    a = document.getElementById("val1").value;
    b = document.getElementById("val2").value;
    c = a;
    a = b; 
    b = c;
    // console.log("a = "+a + "b =" + b)
    document.getElementById("val1").value=a;
    document.getElementById("val2").value=b;
    document.getElementById("first").innerHTML = "<h3>After Swaping (Method-1):- A ="+a +", B ="+b+"</h3>"
}
function swapMethod2() {
    a = parseInt(document.getElementById("val1").value);
    b = parseInt(document.getElementById("val2").value);
    // console.log("a = "+ a + "b =" + b);
    // debugger
    a=a+b;
    b=a-b;
    a=a-b;
    document.getElementById("val1").value=a;
    document.getElementById("val2").value=b;
    document.getElementById("second").innerHTML = "<h3>After Swaping (Method-2):- A ="+a +", B ="+b+"</h3>"
}
function temp() {
    c = document.getElementById("val3").value;
    f = (c * 9/5)+32;
    document.getElementById("temp").innerHTML=c+"<b><sup>o</sup>C</b> is equal to "+f+" <b><sup>o</sup>F</b>"
}