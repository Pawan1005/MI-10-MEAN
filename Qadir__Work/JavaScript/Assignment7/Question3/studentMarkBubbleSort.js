function bubbleSort(numbers, array, iterations) {

    for (let iteration = 0; iteration <= numbers-2; iteration++) {
        for (let index = 0; index<= numbers-1; index++) {
            if(array[index] > array[index+1]) {
                let temp = array[index];
                array[index] = array[index+1];
                array[index+1]=temp;
            }
        }
        iterations.innerHTML += `Each Iteration: <br><b>${array}</b><br>`;
    }

    // return array;
}

function studentsMarks() {
    let total = document.getElementById('total');
    let subjectMarks = document.getElementById('subjectMarks');
    let afterSorting = document.getElementById('afterSorting');
    let iteration = document.getElementById('iteration');

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

    total.innerHTML = "(*******Before Sorting*******)";
    total.innerHTML += `<br>Total Students are: <b>${totalStudents}</b>`;
    for (let stdMark = 0; stdMark < totalStudents; stdMark++) {
        subjectMarks.innerHTML += `<br> <b>Student ${stdMark+1}</b>: <br>There Marks: <br>`;

        for (let mark = 0; mark < 5; mark++) {
            subjectMarks.innerHTML += `<br><b>Marks ${mark+1}: ${studentMarkList[stdMark][mark]}</b><br>`;
        }
    }

    afterSorting.innerHTML = "(*******After Sorting (Bubble Sort)*******)<br>";
    for (let stdMark = 0; stdMark < totalStudents; stdMark++) {
        afterSorting.innerHTML += `<br> <b>Student ${stdMark+1}</b>: <br>There Marks: <br>`;
        
        bubbleSort(studentMarkList[stdMark].length, studentMarkList[stdMark], iteration);
        for (let mark = 0; mark < 5; mark++) {
            afterSorting.innerHTML += `<br><b>Marks ${mark+1}: ${studentMarkList[stdMark][mark]}</b><br>`;
        }
    }
}
