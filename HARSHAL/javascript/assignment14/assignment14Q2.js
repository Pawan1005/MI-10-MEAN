class BankDet {
    constructor() {
        this.acc_no = 0;
        this.acc_name = "";
        this.bal = 0;
    }
    get_data(acc_no, acc_name, bal) {
        this.acc_no = acc_no;
        this.acc_name = acc_name;
        this.bal = bal;
    }
    deposit(d) {
        return (this.bal = this.bal + d);
    }
    withdraw(w) {
        console.log(this.bal);
        if (w > this.bal) {
            alert("ERROR: INSUFFICIENT FUNDS");
        } else if (w < this.bal) {
            this.bal = this.bal - w;
            if (this.bal < 1000) {
                alert("your balance is below 1000, Please deposit");
            } else {
                alert("your account balance is rs " + this.bal);
            }
        }
    }
    myfunction() {
        var tb = document.getElementById("mytable");
        var row1 = tb.insertRow();
        var col1 = row1.insertCell();
        var col2 = row1.insertCell();
        var col3 = row1.insertCell();
        var col4 = row1.insertCell();
        col1.innerHTML = prompt("sr no.");
        this.get_data(
            parseInt(prompt("employee number")),
            prompt("employee name"),
            0
        );
        this.deposit(parseInt(prompt("HOW MUCH MONEY YOU WANT TO DEPOSIT?")));
        this.withdraw(parseInt(prompt("HOW MUCH MONEY YOU WANT TO WITHDRAW?")));
        col2.innerHTML = this.acc_no;
        col3.innerHTML = this.acc_name;
        col4.innerHTML = this.bal;
    }
}
var obj = new BankDet();
