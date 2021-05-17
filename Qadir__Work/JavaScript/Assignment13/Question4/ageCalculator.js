function ageCalculate() {
    let birthDateInput = prompt("Enter a BirthDate, Date Format: yyyy-mm-dd");

    let birthDate = new Date(birthDateInput);
    let currentDate = new Date();

    if (birthDate.toString() != "Invalid Date") {
        let age = currentDate.getFullYear() - birthDate.getFullYear();

        alert(`${age} years old.`);
    }

    else {
        alert("Invalid Date, Please Enter Proper Date");
    }
}
