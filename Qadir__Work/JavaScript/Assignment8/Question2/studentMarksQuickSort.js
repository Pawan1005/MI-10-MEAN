function partition(arr, start, end){
    // Taking the last element as the pivot
    const pivotValue = arr[end];
    let pivotIndex = start;

    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
        // Swapping elements
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];

        // Moving to next element
        pivotIndex++;
        }
    }
    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];

    return pivotIndex;
}

function quickSortRecursive(arr, start, end) {
    // Base case or terminating case
    if (start >= end) {
        return;
    }

    // Returns pivotIndex
    let index = partition(arr, start, end);

    // Recursively apply the same logic to the left and right subarrays
    quickSortRecursive(arr, start, index - 1);
    quickSortRecursive(arr, index + 1, end);
}

function studentMarkQuickSort() {
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

    result.innerHTML = '<b>Total Marks Before Quick Sort</b>';
    subjectMarks.forEach((value, index) => {
        // for (let mark = 0; mark < subjectMarksAdditional.length; mark++) {
            result.innerHTML += `<br> Subject: <b>${index+1}</b> --> Marks: <b>${value}</b>`;
        // }
    });

    quickSortRecursive(subjectMarks, 0, subjectMarks.length - 1);

    result.innerHTML += '<br><br><b>Total Marks After Applying Quick Sort</b>';
    subjectMarks.forEach((value, index) => {
        // for (let mark = 0; mark < subjectMarksAdditional.length; mark++) {
            result.innerHTML += `<br> Subject: <b>${index+1}</b> --> Marks: <b>${value}</b>`;
        // }
    });
}
