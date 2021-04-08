var d;

function calculateGrade() {
    event.preventDefault();

    // Total Marks
    const total = 500;

    let maths = parseInt(document.getElementById('maths').value);
    let science = parseInt(document.getElementById('science').value);
    let biology = parseInt(document.getElementById('biology').value);
    let chemistry = parseInt(document.getElementById('chemistry').value);
    let physics = parseInt(document.getElementById('physics').value);

    let totalMarks = maths + science + biology + chemistry + physics;

    document.getElementById('total').innerText = `Total Marks: ${totalMarks}`;

    let percentage = (totalMarks * 100) / total;

    document.getElementById('per').innerText = `Percentage You Got: ${percentage}%`;

    if (percentage <= 100 && percentage >=75) {
        document.getElementById('grade').innerHTML = `Grade You Get: <b>A</b>`;
    }

    else if (percentage <= 74 && percentage >=60) {
        document.getElementById('grade').innerHTML = `Grade You Get: <b>B</b>`;
    }

    else if (percentage <= 59 && percentage >=40) {
        document.getElementById('grade').innerHTML = `Grade You Get: <b>C</b>`;
    }

    else if (percentage < 40 && percentage >=30) {
        document.getElementById('grade').innerHTML = `Grade You Get: <b>D</b>`;
    }
    
    else if (percentage <30) {
        document.getElementById('grade').innerHTML = `Grade You Get: <b>F</b>`;
    }
    
    else { 
        document.getElementById('gradeLess').innerHTML = ` <b>Please Enter Marks Properly</b>`;
    }
}