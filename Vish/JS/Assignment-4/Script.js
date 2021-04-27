function checkArmstrong(){
    num = document.getElementById("number").value;
    var Number = num;
    var digits = 0;
    // Finding the number of digits
    while(num > 0){
       digits = digits + 1;
        num = parseInt(num/10);
    }
    num = Number;
    var sum = 0;
    // calculating sum
    var i;
    for (i = 0; i<digits; i++ ) {
        var digit = num%10;
        sum = sum + Math.pow(digit, digits);
        num = parseInt(num/10);
    }// checking sum with original number
        if(sum == Number){
            document.getElementById("result").style.color = "blue";
            document.getElementById("result").innerHTML = "The number: " + Number + " is Armstrong Number";
            }else{
            document.getElementById("result").style.color = "red";
            document.getElementById("result").innerHTML = "The number: " + Number + " is NOT Armstrong Number";
        }
}

function isVowel(){
    x = document.getElementById("val1").value;
        switch(x){
            case "A":
             document.getElementById("demo").innerHTML = "<h1> A Is Vowel Character </h1>"
            break;
            case "E":
             document.getElementById("demo").innerHTML = "<h1> E Is Vowel Character </h1>"
            break;
            case "I":
             document.getElementById("demo").innerHTML = "<h1> I Is Vowel Character </h1>"
            break;
            case "O":
             document.getElementById("demo").innerHTML = "<h1> O Is Vowel Character </h1>"
            break;
            case "U":
             document.getElementById("demo").innerHTML = "<h1> U Is Vowel Character </h1>"
            break;
            case "a":
             document.getElementById("demo").innerHTML = "<h1> a Is Vowel Character </h1>"
            break;
            case "e":
             document.getElementById("demo").innerHTML = "<h1> e Is Vowel Character </h1>"
            break;
            case "i":
             document.getElementById("demo").innerHTML = "<h1> i Is Vowel Character </h1>"
            break;
            case "o":
             document.getElementById("demo").innerHTML = "<h1> o Is Vowel Character </h1>"
            break;
            case "u":
             document.getElementById("demo").innerHTML = "<h1> u Is Vowel Character </h1>"
            break;
            default:
             document.getElementById("demo").innerHTML = "<h1>"+x+" This Character Is Not Vowel</h1>"
        }
}
function automorphic() {
    n = document.getElementById("val").value;
    num = n; 
    sq = n*n;
    t = 10;
    while (n>0) {
        r = sq%t;
        if(num==r){
            equal=1;
            break;
        }
        n = n/10;
        t = t*10;
    }
    if (equal == 1) {
        document.getElementById("demo").innerHTML = "<h3>"+num+" is an Automorphic_Number</h3>";
    } else {
        document.getElementById("demo").innerHTML = "<h3>"+num+" is Not Automorphic_Number</h3>";
    }
}

function KrishnamurthyNumber() {
    var num,i,p,r,sum=0,save_num;
    num = parseInt(document.getElementById("val").value);
    save_num = num;
    while (num) {
        i=1;
        p=1;
        r=num%10;
        while (i<=r) {
            p=p*i;
            i++;
        }
        sum = sum + p;
        num = Math.floor(num/10);
    }
    if (sum == save_num) {
        document.getElementById("demo").innerText =save_num + " is a Krishnamurthy Number";
    } else {
        document.getElementById("demo").innerText =save_num + "is not a KrishnamurthyNumber";
    }
}