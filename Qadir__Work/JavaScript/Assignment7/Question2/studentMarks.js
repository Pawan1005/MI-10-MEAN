function studentsMarks() {
    let total = document.getElementById('total');
    let subjectMarks = document.getElementById('subjectMarks');

    let totalStudents = parseInt(prompt('Enter Total Students:'));
    // Soring Student with There Marks
    let studentMarkList = [];

    let student = 0;
    while (student < totalStudents) {

        let marksList = [];
        for (let studentMark = 0; studentMark < 5; studentMark++) {
            let marks = parseInt(prompt('Enter a Marks:'));
            marksList.push(marks);
        }
        studentMarkList.push(marksList);
        student++;
    }

    total.innerHTML = `Total Students are: ${totalStudents}`;
    for (let stdMark = 0; stdMark < totalStudents; stdMark++) {
        subjectMarks.innerHTML += `<br> <b>Student ${stdMark+1}</b>: <br>There Marks: <br>`;

        for (let mark = 0; mark < 5; mark++) {
            subjectMarks.innerHTML += `<br><b>Marks ${mark+1}: ${studentMarkList[stdMark][mark]}</b><br>`;
        }
    }
}
