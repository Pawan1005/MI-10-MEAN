class student {
    constructor(rollno, name, maths, science, history) {
        this.rollno = rollno;
        this.name = name;
        this.maths = maths;
        this.science = science;
        this.history = history;
        this.total = 0;
        this.percentage = 0;
    }
    display() {
        document.getElementById("name1").innerHTML =
            "<span>NAME:</span>" + this.name;
        document.getElementById("rollno1").innerHTML =
            "<span>ROLL NUMBER:</span>" + this.rollno;
        document.getElementById("maths1").innerHTML =
            "<span>MATHS:</span>" + this.maths;
        document.getElementById("science1").innerHTML =
            "<span>SCIENCE:</span>" + this.science;
        document.getElementById("history1").innerHTML =
            "<span>HISTORY:</span>" + this.history;
        document.getElementById("total").innerHTML =
            " <span>TOTAL:</span>" + this.total;
        document.getElementById("percentage").innerHTML =
            "<span>PERCENTAGE:</span>" + this.percentage + "%";
        if (this.percentage < 40) {
            document.getElementById("grade").innerHTML =
                "<span>GRADE:</span>NO GRADE";
            document.getElementById("grade").style.color = "red";
        }
        if (this.percentage >= 40) {
            document.getElementById("grade").innerHTML = "<span>GRADE:</span>B";
            document.getElementById("grade").style.color = "yellow";
        }
        if (this.percentage >= 55) {
            document.getElementById("grade").innerHTML =
                "<span>GRADE:</span>B+";
            document.getElementById("grade").style.color = "yellow";
        }
        if (this.percentage >= 60) {
            document.getElementById("grade").innerHTML = "<span>GRADE:</span>A";
            document.getElementById("grade").style.color = "green";
        }
        if (this.percentage >= 80) {
            document.getElementById("grade").innerHTML =
                "<span>GRADE:</span>A+";
            document.getElementById("grade").style.color = "green";
        }
    }
    calculate() {
        this.rollno = document.getElementById("rollno").value;
        this.name = document.getElementById("name").value.toUpperCase();
        this.maths = document.getElementById("maths").value;
        this.science = document.getElementById("science").value;
        this.history = document.getElementById("history").value;
        let patt = /[a-zA-Z]/;
        var check1 = patt.test(this.maths);
        var check2 = patt.test(this.science);
        var check3 = patt.test(this.history);
        try {
            if (check1 || check2 || check3)
                throw "you entered aplhanumeric string";
        } catch (err) {
            console.error(err);
        }
        this.total =
            parseInt(this.maths) +
            parseInt(this.science) +
            parseInt(this.history);
        this.percentage = (this.total / 300) * 100;
        this.display();
    }
}

var obj = new student(rollno, name, maths, science, history);
