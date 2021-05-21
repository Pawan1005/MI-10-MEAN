function mergeSort(arr) {
    let len = arr.length;

    if(len < 2) {
        return arr;
    }
    let mid = Math.floor(len/2),
        left = arr.slice(0, mid),
        right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var result = [],
        lLen = left.length,
        rLen = right.length,
        l = 0,
        r = 0;


    while(l < lLen && r < rLen){
        if(left[l] < right[r]) {
            result.push(left[l++]);
        }
        else{
            result.push(right[r++]);
        }
    }

    return result.concat(left.slice(l)).concat(right.slice(r));
}

function studentMarkMergeSort() {
    let result = document.getElementById('result');
    let subjectMarksA = [];
    let subjectMarksB = [];

    for (let sectionAb = 0; sectionAb < 2; sectionAb++) {
        let subject = 5;
        while (subject > 0) {
            if (sectionAb <1) { 
                marks = parseInt(prompt("Enter a Marks from Section A Student:"));
            }
            else {
                marks = parseInt(prompt("Enter a Marks from Section B Student:"));
            }
    
            if (marks > 80) {
                alert('Please Enter Marks less then equal 80');
                subject++;
            }
            else {
                // subjectMarksAdditional.push(parseInt(marks * 0.2))
                marks = marks + parseInt(marks * 0.2);
                if (sectionAb <1) {
                    subjectMarksA.push(marks);
                }
                else {
                    subjectMarksB.push(marks);
                }
            }
            subject--;
        }
    }
    

    result.innerHTML = '<b>Total Marks Section A Before Merge Sort</b>';
    subjectMarksA.forEach((value, index) => {
        // for (let mark = 0; mark < subjectMarksAdditional.length; mark++) {
            result.innerHTML += `<br> Subject: <b>${index+1}</b> --> Marks: <b>${value}</b>`;
        // }
    });

    result.innerHTML += '<br><b>Total Marks Section B Before Merge Sort</b>';
    subjectMarksB.forEach((value, index) => {
        // for (let mark = 0; mark < subjectMarksAdditional.length; mark++) {
            result.innerHTML += `<br> Subject: <b>${index+1}</b> --> Marks: <b>${value}</b>`;
        // }
    });

    let subjectMarks = subjectMarksA.concat(subjectMarksB);
    let subjectMarksSort = mergeSort(subjectMarks);

    result.innerHTML += '<br><br><b>Total Marks After Applying Merge Sort</b>';
    subjectMarksSort.forEach((value, index) => {
        // for (let mark = 0; mark < subjectMarksAdditional.length; mark++) {
            result.innerHTML += `<br> Subject: <b>${index+1}</b> --> Marks: <b>${value}</b>`;
        // }
    });
}
