class SalesPerson {
    constructor() {
        this.person__id = 0;
        this.person__name = "";
    }

    getData(person__id, person__name) {
        this.person__id = person__id;
        this.person__name = person__name;
    }
}

class TotalSales extends SalesPerson {
    constructor() {
        super();
        this.total__sales = 0;
    }

    // Taking input sales as amount
    calculateSales(amount) {
        try {
            if (amount < 0 || (!amount)) {
                throw new Error("Please Enter Proper sales");
            }
            else if (amount >=0 && amount <=5000) {
                this.total__sales = amount - (amount * 0.02);
                // Set empty if No Error
                document.getElementById('errorMessage').innerHTML = '';
            }
            else if (amount >=5001 && amount <=12000) {
                this.total__sales = amount - (amount * 0.05);
                document.getElementById('errorMessage').innerHTML = '';
            }
            else if (amount >=12001 && amount <= 50000) {
                this.total__sales = amount - (amount * 0.1);
                document.getElementById('errorMessage').innerHTML = '';
            }
            else {
                this.total__sales = amount - (amount * 0.15);
                document.getElementById('errorMessage').innerHTML = '';
            }
        }
        catch (error) {
            document.getElementById('errorMessage').innerHTML = `<b style="color: red">${error.message}</b>`;
        }
    }
}

var salesPerson = null;
var counter = 0;
// For Not showing commision directly without input of sales
var checkCall = false;

function getSalesData() {
    checkCall = false;
    let salesId = parseInt(prompt('Enter a Sales Id:'));
    let personName = prompt('Enter a Sales Person Name:');

    salesPerson = new TotalSales();
    salesPerson.getData(salesId, personName);

    counter++;
}

function inputSales() {
    // Showing commision input of sales Flag set To be True
    checkCall = true;
    let salesAmount = parseInt(prompt('Enter a Sales Amount:'));
    salesPerson.calculateSales(salesAmount);
}

function displayDetails() {
    let table = document.getElementById('table');

    table.style.display = "inline-block";

    let row = table.insertRow();
    let rowData1 = row.insertCell(0);
    let rowData2 = row.insertCell(1);
    let rowData3 = row.insertCell(2);

    rowData1.innerHTML = `${counter}`;
    rowData2.innerHTML = `${salesPerson.person__id}`;
    rowData3.innerHTML = `${salesPerson.person__name}`;

    // If Input Function is Call then show Total Sales With Commision
    checkCall ? document.getElementById("totalSales").innerHTML += `<br>Total Sales With Commision: <b>${salesPerson.total__sales}</b>` : '';
}
