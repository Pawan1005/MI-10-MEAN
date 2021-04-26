function leapYear() {
    event.preventDefault();

    let year = parseInt(document.getElementById('year').value);
    let isLeapYear = true;
    let result = document.getElementById('result');

    if ((year % 4) === 0) {
        if ((year % 100) === 0) {
            if ((year % 400) == 0) {
                isLeapYear = true;
            }
            else {
                isLeapYear = false;
            }
        }
        else {
            isLeapYear = true;
        }
    }
    else {
        isLeapYear = false;
    }

    if (isLeapYear) {
        result.innerHTML = `<b>${year}</b> is a Leap Year`;
    }
    else {
        result.innerHTML = `<b>${year}</b> is not a Leap Year`;
    }
}