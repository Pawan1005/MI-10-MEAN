class Salesman {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
class Calculator extends Salesman {
    constructor(name, id, numberofsales) {
        super(name, id);
        this.numberofsales = numberofsales;
    }
    calculator() {
        var amount = 0;
        for (let i = 0; i < this.numberofsales; i++) {
            var sales = parseInt(prompt("enter sale amount"));
            try {
                if (sales < 0) throw alert("entered negative value");
                if (isNaN(sales)) throw alert("enter number");
            } catch (err) {
                return err;
            }
            if (sales > 0 && sales <= 5000) {
                amount = amount + sales * 0.02;
            } else if (sales > 5000 && sales <= 12000) {
                amount = amount + sales * 0.05;
            } else if (sales > 12001 && sales <= 50000) {
                amount = amount + sales * 0.01;
            } else if (sales > 50001) {
                amount = amount + sales * 0.15;
            }
        }
        document.write("Total amount of sales is " + amount);
    }
}

var obj = new Salesman("harshal", 45);
var obj2 = new Calculator("harshal", 45, prompt("enter number of sales"));
obj2.calculator();
