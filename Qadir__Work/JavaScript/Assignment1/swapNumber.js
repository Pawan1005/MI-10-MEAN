// Swapping Two value using temporary variable
function swapWithTempVariable(){
    // Prevent For Page Reload after button click
    event.preventDefault();

    // Getting input value and store in apropriate variables
    let number1 = document.querySelector('#number1').value;
    let number2 = document.querySelector('#number2').value;

    // Storing first value into declare swap variable
    let swap = number1;

    // Then storing second value into first variable
    number1 = number2;

    // Then storing swap or temporary variable value into the second variable
    number2 = swap;

    // Passing value to the apropriate elements and storing that values to that elements
    document.querySelector('#method1 > #A').innerText = number1;
    document.querySelector('#method1 > #B').innerText = number2;
}

function swapWithoutTempVariable(){
    // Prevent For Page Reload after button click
    event.preventDefault();

    // Getting input value and store in apropriate variables
    let number1 = document.querySelector('#number1').value;
    let number2 = document.querySelector('#number2').value;

    // using array and passing value to the array then extracting value into the variable (ES features Destructing Assignment)
    [number1, number2] = [number2, number1];

    // Passing value to the apropriate elements and storing that values to that elements
    document.querySelector('#method2 > #A').innerText = number1;
    document.querySelector('#method2 > #B').innerText = number2;
}