class Employee {
    constructor() {
        this.name = "";
        this.empno = 0;
        this.address = "";
        this.salary = 0;
        this.da;
        this.hra;
        this.pf;
        this.gross;
        this.net;
    }
    get_data() {
        this.name = prompt("name of employee");
        this.empno = prompt("employee number");
        this.address = prompt("employee address");
        this.salary = parseInt(prompt("employee salary"));
    }
    show_init() {
        return `NAME: ${this.name}<br>EMPLOYEE NUMBER: ${this.empno}<br>ADDRESS: ${this.address}<br>SALARY: ${this.salary}`;
    }
    calculate() {
        this.da = 0.3 * this.salary;
        this.hra = 0.15 * this.salary;
        this.pf = (12.5 / 100) * this.salary;
        this.gross = this.salary + this.da + this.hra;
        this.net = this.gross - this.pf;
        if (this.gross > 180000) {
            alert("Income Tax Payer");
        } else {
            alert("Not an income tax payer");
        }
    }
    display() {
        this.get_data();
        this.calculate();
        document.getElementById(
            "salary"
        ).innerHTML += `EMPLOYEE DETAILS<br>Name: <b>${this.name}</b>`;
        document.getElementById(
            "salary"
        ).innerHTML += `<br>Employee No: <b>${this.empno}</b>`;
        document.getElementById(
            "salary"
        ).innerHTML += `<br>Annual Gross Salary: <b>${this.gross}</b>`;
        document.getElementById(
            "salary"
        ).innerHTML += `<br>Net Salary: <b>${this.net}</b><br><br>`;
    }
}

var obj = new Employee();
obj.display();
var obj2 = new Employee();
obj2.display();
