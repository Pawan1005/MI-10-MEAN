function bubbleSort(numbers, array) {

    for (let iteration = 0; iteration <= numbers-2; iteration++) {
        for (let index = 0; index<= numbers-1; index++) {
            if(array[index] > array[index+1]) {
                let temp = array[index];
                array[index] = array[index+1];
                array[index+1]=temp;
            }
        }
    }
}

function selectionSort(numbers, array) {

    for (let iteration = 0; iteration < numbers; iteration++) {
        for (let index = iteration + 1; index< numbers; index++) {
            if(array[iteration] > array[index]) {
                let temp = array[index];
                array[index] = array[iteration];
                array[iteration]=temp;
            }
        }
    }
}

function insertionSort(numbers, array) {

    for (let iteration = 1; iteration <= numbers-1; iteration++) {
        for (let index = 0; index<=iteration; index++) {
            if(array[index] > array[iteration]) {
                let temp = array[index];
                array[index] = array[iteration];
                for (var incrementPosition=iteration; incrementPosition>index;incrementPosition--) {
                    array[incrementPosition] = array[incrementPosition-1];
                }
                array[incrementPosition+1] = temp;
            }
        }
    }

}

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

    // Putting the pivot value in the middle (Swapping)
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

function studentMarkSort() {
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
            marks = marks + parseInt(marks * 0.2);
            subjectMarks.push(marks);
        }
        subject--;
    }

    result.innerHTML = '<b>Total Marks Before Without Sort</b>';
    subjectMarks.forEach((value, index) => {
        result.innerHTML += `<br> Subject: <b>${index+1}</b> --> Marks: <b>${value}</b>`;
    });

    let sortNumber = parseInt(prompt(`1 - Bubble Sort (Press 1) \n 2 - Insertion Sort (Press 2) \n 3 - Selection Sort (Press 3) \n 4 - Quick Sort (Press 4) \n 5 - Exit (Press X or Cancel or 5)`));

    switch(sortNumber) {
        case 1:
            bubbleSort(subjectMarks.length, subjectMarks);
            break;

        case 2:
            insertionSort(subjectMarks.length, subjectMarks);
            break;

        case 3:
            selectionSort(subjectMarks.length, subjectMarks);
            break;

        case 4:
            quickSortRecursive(subjectMarks, 0, subjectMarks.length - 1);
            break;
        
        default:
            break;
    }

    if (sortNumber < 5) {
        result.innerHTML += '<br><br><b>Total Marks After Applying Sort</b>';
        subjectMarks.forEach((value, index) => {
            result.innerHTML += `<br> Subject: <b>${index+1}</b> --> Marks: <b>${value}</b>`;
        });
    }

    else {
        result.innerHTML += '<br><b>Total Marks After Applying Sort</b>';
    }
}
