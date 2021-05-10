class Student {
    constructor(rollNo, name, maths, science, history) {
        this.rollNo = 0;
        this.name = '';
        this.maths = 0;
        this.science = 0;
        this.history = 0;
    }

    read() {
        let rollNumber  = document.getElementById('rollNo').value;
        let name = document.getElementById('name').value;
        let maths = document.getElementById('maths').value;
        let science = document.getElementById('science').value;
        let history = document.getElementById('history').value;

        let numberPattern = /^[0-9]*$/;
        let namePattern = /^[a-z]*$/i;

        try {
            if (numberPattern.test(rollNumber) && namePattern.test(name) && numberPattern.test(maths) && numberPattern.test(science) && numberPattern.test(history) && (parseInt(history) <=100) && (parseInt(maths) <=100) && (parseInt(science) <=100)) {
                this.rollNo = parseInt(rollNumber);
                this.name = name;
                this.maths = parseInt(maths);
                this.science = parseInt(science);
                this.history = parseInt(history);
            }
            else {
                throw new Error("Please Enter proper Marks or Name");
            }
        }
        catch(error) {
            this.errorMessage = error.message;
            alert(this.errorMessage);
        }
    }

    calculate() {
        this.errorMessage ? '' : 
        this.total = this.maths + this.history + this.science;
        this.marksPercentage = (this.total * 100) / 300;

        if (this.marksPercentage >= 80) {
            this.studentGrade = 'A+';
        }
        
        else if (this.marksPercentage < 80 && this.marksPercentage >= 60) {
            this.studentGrade = 'A'
        }

        else if (this.marksPercentage < 60 && this.marksPercentage >= 55) {
            this.studentGrade = 'B+';
        }

        else if (this.marksPercentage < 55 && this.marksPercentage >= 40) {
            this.studentGrade = 'B';
        }

        else {
            this.studentGrade = 'No Grade';
        }
    }

    display(cardHeading, cardForm) {
        this.errorMessage ? '' :

        cardHeading = document.getElementById('reportCardHeading');
        cardForm = document.getElementById('reportCardForm');

        cardHeading.innerHTML = '**********Report Card**********';

        document.getElementById('reportCard').innerHTML = ` <p><b>Roll No: </b>${this.rollNo}</p>
                                                            <p><b>Name: </b>${this.name.toUpperCase()}</p>
                                                            <p><b>Maths: </b>${this.maths}</p>
                                                            <p><b>Science: </b>${this.science}</p>
                                                            <p><b>History: </b>${this.history}</p>
                                                            <p><b>TOTAL: </b>${this.total}</p>
                                                            <p><b>Percentage: </b>${this.marksPercentage.toFixed(2)}</p>
                                                            <p style = ${this.studentGrade == 'A+' ? "color:lightgreen" : this.studentGrade == 'A' ? "color:green" : 
                                                                        this.studentGrade == 'B+' ? "color:#e0ad6e" : this.studentGrade == 'B' ? "color:#e0be6e" : "color:red" }><b style="color: black">Grade: </b>${this.studentGrade}</p>`;
        cardForm.style.display = 'none';
    }
}

function getResult() {
    event.preventDefault();

    let cardHeading, cardForm;
    var student = new Student();
    student.read();
    student.calculate();
    student.display(cardHeading, cardForm);
}
