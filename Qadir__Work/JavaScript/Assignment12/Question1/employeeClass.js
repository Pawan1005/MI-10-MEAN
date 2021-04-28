class Employee {
    constructor(){
        this.empno = "1";
        this.name = "Mohammed Qadir Khan";
        this.address = "Old Panvel";
        this.city = "Navi Mumbai";
        this.salary = 85000;
        this.da;
        this.hra;
        this.pf;
        this.gross;
        this.net;
        this.basic;
    }

    show__init() {
        document.getElementById('basicDetials').innerHTML +=`<br>Employee No: <b>${this.empno}</b>`;
        document.getElementById('basicDetials').innerHTML +=`<br>Name: <b>${this.name}</b>`;
        document.getElementById('basicDetials').innerHTML +=`<br>Address: <b>${this.address}</b>`;
        document.getElementById('basicDetials').innerHTML +=`<br>City: <b>${this.city}</b>`;
        document.getElementById('basicDetials').innerHTML +=`<br>Salary: <b>${this.salary}</b>`;
    }

    calculate(){
        this.da = this.salary * 0.3;
        this.hra = this.salary * 0.15;
        this.pf = this.salary * 0.125;
        this.basic = this.salary * 12;
        this.gross = this.basic + (this.da *12) + (this.hra * 12);
        this.net = this.gross - (this.pf *12);

        if (this.gross > 1_80_000) {
            alert('Income Tax Payer');
        }
        else {
            alert('Not an income tax payer');
        }
    }

    display() {
        this.calculate();
        
        document.getElementById('advanceDetials').innerHTML +=`<br>Name: <b>${this.name}</b>`;
        document.getElementById('advanceDetials').innerHTML +=`<br>Employee No: <b>${this.empno}</b>`;
        document.getElementById('advanceDetials').innerHTML +=`<br>Annual Gross Salary: <b>${this.gross}</b>`;
        document.getElementById('advanceDetials').innerHTML +=`<br>Net Salary: <b>${this.net}</b>`;
    }
}

let std = new Employee();

function callInitMethod() {
    event.preventDefault();
    std.show__init();
}

function showEmployee() {

    std.display();
}