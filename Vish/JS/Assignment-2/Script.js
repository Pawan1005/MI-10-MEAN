function secondMax(){
    // alert("hi")
    var a, b, c, d, e;
    a = parseInt( document.getElementById("val1").value);
    b = parseInt( document.getElementById("val2").value);
    c = parseInt( document.getElementById("val3").value);
    d = parseInt( document.getElementById("val4").value);
    e = parseInt( document.getElementById("val5").value);
    var second = 0;
    var arr = [a,b,c,d,e]; // use int arrays
    var max = Math.max.apply(null, arr); // get the max of the array
    arr.splice(arr.indexOf(max), 1); // remove max from the array
    second = Math.max.apply(null, arr);
    document.getElementById("demo").innerHTML = "<h3 style='display:inline-block;'> This Second Largest In Five Number</h3> <b> <i>"+ second +"</i> </b>";
}

var per = 0;
function persent() {
    // alert("kase hai aap");
    a = parseInt( document.getElementById("hin").value);
    b = parseInt( document.getElementById("eng").value);
    c = parseInt( document.getElementById("mat").value);
    d = parseInt( document.getElementById("sol").value);
    e = parseInt( document.getElementById("san").value);
    var obtained = a + b + c + d + e; 
    per = obtained * 100 / 500
    if (per <= 100 && per >= 75) {
        document.getElementById("demo").innerHTML="Your Obtained <b>"+obtained+"</b> Your Percentage is <b>"+per+" You Get <b> A </b>Grade";
    } else if(per <= 74 && per >= 60){
        document.getElementById("demo").innerHTML="Your Obtained <b>"+obtained+"</b> Your Percentage is <b>"+per+" You Get <b> B </b>Grade";
    } else if(per <= 59 && per >= 40){
        document.getElementById("demo").innerHTML="Your Obtained <b>"+obtained+"</b> Your Percentage is <b>"+per+" You Get <b> C </b>Grade";
    } else if(per <= 39 && per >= 33){
        document.getElementById("demo").innerHTML="Your Obtained <b>"+obtained+"</b> Your Percentage is <b>"+per+" You Get <b> D </b>Grade";
    }else{
        document.getElementById("demo").innerHTML="Your Obtained <b>"+obtained+"</b> Your Percentage is <b>"+per+" You Get <b> F </b>Grade Fall!!!";
    }
}