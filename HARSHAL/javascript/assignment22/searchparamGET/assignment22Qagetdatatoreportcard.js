window.addEventListener("load", () => {
    let param = new URL(document.location).searchParams;
    var rollno = param.get("rollno");
    var name = param.get("name");
    var maths = param.get("maths");
    var science = param.get("science");
    var history = param.get("history");

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
