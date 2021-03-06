class Student {
    constructor() {
        this.rollNo = 0;
        this.stdName = '';
        this.maths = 0;
        this.science = 0;
        this.history = 0;
        this.biology = 0;
        this.physics = 0;
    }

    read() {
        this.rollNo  = parseInt(sessionStorage.getItem('rollNo'));
        this.stdName = sessionStorage.getItem('stdName');
        this.maths = parseInt(sessionStorage.getItem('maths'));
        this.science = parseInt(sessionStorage.getItem('science'));
        this.history = parseInt(sessionStorage.getItem('history'));
        this.biology = parseInt(sessionStorage.getItem('biology'));
        this.physics = parseInt(sessionStorage.getItem('physics'));

        console.log(this.rollNo, this.science, this.stdName, this.physics, this.maths, this.history, this.biology)
    }

    calculate() {
        this.total = this.maths + this.history + this.science + this.physics + this.biology;
        this.marksPercentage = (this.total * 100) / 500;

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

    display() {
        document.getElementById('card').innerHTML = ` <p><b>Roll No: </b>${this.rollNo}</p>
                                                            <p><b>Name: </b>${this.stdName.toUpperCase()}</p>
                                                            <p><b>Maths: </b>${this.maths}</p>
                                                            <p><b>Science: </b>${this.science}</p>
                                                            <p><b>History: </b>${this.history}</p>
                                                            <p><b>Physics: </b>${this.physics}</p>
                                                            <p><b>Biology: </b>${this.biology}</p>
                                                            <p><b>TOTAL: </b>${this.total}</p>
                                                            <p><b>Percentage: </b>${this.marksPercentage.toFixed(2)}</p>
                                                            <p style = ${this.studentGrade == 'A+' ? "color:#39e600" : this.studentGrade == 'A' ? "color:#1aff1a" : 
                                                                        this.studentGrade == 'B+' ? "color:#e0ad6e" : this.studentGrade == 'B' ? "color:#e0be6e" : "color:red" }><b style="color: white">Grade: </b>${this.studentGrade}</p>`;
    }
}


window.addEventListener('load', function(){
    var student = new Student();
    student.read();
    student.calculate();
    student.display();
});