function studentMark() {
    let result = document.getElementById('result');
    let subjectMarks = [];

    // Additional 20% of each marks array
    // let subjectMarksAdditional = []

    let subject = 10;
    while (subject > 0) {
        marks = parseInt(prompt("Enter a Marks"));

        if (marks > 80) {
            alert('Please Enter Marks less then equal 80');
            subject++;
        }

        else {
            // subjectMarksAdditional.push(parseInt(marks * 0.2))
            marks = marks + parseInt(marks * 0.2)
            subjectMarks.push(marks);
        }
        subject--;
    }

    subjectMarks.forEach((value, index) => {
        // for (let mark = 0; mark < subjectMarksAdditional.length; mark++) {
            result.innerHTML += `<br> Subject: <b>${index+1}</b> --> Marks: <b>${value}</b>`;
        // }
    });
}
