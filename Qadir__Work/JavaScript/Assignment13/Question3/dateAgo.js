function getDateAgo(date, number) {
    // setting Date from actual Selected date and total number previous Date : based on milesecond
    date.setDate(date.getDate() - number);

    // getting Date after setting based on mileseond
    let previousDate = date.getDate();

    if (previousDate == 1) {
        return `${previousDate}st`;
    }
    
    else if (previousDate == 2) {
        return `${previousDate}nd`;
    }

    else if (previousDate == 3) {
        return `${previousDate}rd`;
    }

    else {
        return `${previousDate}th`;
    }
}

function getDateAgoCall() {
    event.preventDefault();

    let dateInput = document.getElementById('dateInput').value;
    let number = parseInt(document.getElementById('number').value);

    let date = new Date(dateInput);

    alert(getDateAgo(date, number));
}
