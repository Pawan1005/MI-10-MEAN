window.addEventListener("load", () => {
    var rollno = sessionStorage.getItem("rollno");
    var name = sessionStorage.getItem("name");
    var maths = sessionStorage.getItem("maths");
    var science = sessionStorage.getItem("science");
    var history = sessionStorage.getItem("history");

    document.getElementById("rollno").innerHTML = rollno;
    document.getElementById("name").innerHTML = name;
    document.getElementById("maths").innerHTML = maths;
    document.getElementById("science").innerHTML = science;
    document.getElementById("history").innerHTML = history;

    var total = parseInt(maths) + parseInt(science) + parseInt(history);

    var percentage = total / 5;
    function grade() {
        if (percentage < 40) return "No Grade";
        if (percentage < 55) return "B";
        if (percentage < 60) return "B+";
        if (percentage < 80) return "A";
        else return "A+";
    }
    document.getElementById("total").innerHTML = total;
    document.getElementById("percentage").innerHTML = percentage;
    document.getElementById("grade").innerHTML = grade();
});
