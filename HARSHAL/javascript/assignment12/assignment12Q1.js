class Employee {
    constructor(name, empno, address, salary) {
        this.name = name;
        this.empno = empno;
        this.address = address;
        this.salary = salary;
        this.da;
        this.hra;
        this.pf;
        this.gross;
        this.net;
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
        this.calculate();
        document.getElementById('salary').innerHTML +=`<br>Name: <b>${this.name}</b>`;
        document.getElementById('salary').innerHTML +=`<br>Employee No: <b>${this.empno}</b>`;
        document.getElementById('salary').innerHTML +=`<br>Annual Gross Salary: <b>${this.gross}</b>`;
        document.getElementById('salary').innerHTML +=`<br>Net Salary: <b>${this.net}</b>`;
    }
}

var obj = new Employee("harshal", 33, "airoli", parseInt(prompt("enter salary")));
document.write(obj.show_init());
obj.display();


