window.addEventListener("load", () => {
    var rollno = localStorage.getItem("rollno");
    var name = localStorage.getItem("name");
    var maths = localStorage.getItem("maths");
    var science = localStorage.getItem("science");
    var history = localStorage.getItem("history");

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
