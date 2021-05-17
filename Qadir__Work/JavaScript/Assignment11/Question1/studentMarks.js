function studentMark(studentMarkRollNo) {
    event.preventDefault();

    let rollNumber = parseInt(document.getElementById('rollNumber').value);
    let marks = document.getElementById("marks");
    let isPresent = false;

    for (let index = 0; index < studentMarkRollNo.length; index++) {
        if (studentMarkRollNo[index]["Roll Number"] == rollNumber) {
            marks.innerHTML = `Roll No ${rollNumber} has scored ${studentMarkRollNo[index]["Marks"]} marks`;
            isPresent = true;
            break;
        }
    }

    if(!isPresent) {
        marks.innerHTML = `Given Roll No ${rollNumber} is Not Present`;
    }
}
