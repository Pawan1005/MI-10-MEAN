function dateExtractor() {
    event.preventDefault();

    let date = document.getElementById('date').value;
    let result = document.getElementById('result');

    // Pattern for Date Matching 21/10/2021 Either 21-10-2021 Else 1-10-21
    let datePattern = /\d{1,2}\D\d{1,2}\D(\d{4}|\d{2})/g;

    let datesList = date.match(datePattern);
    
    result.innerHTML += `<br><b>${date}</b><br> Date Present In Text or String are: <br> <b>${datesList}</b>`;
}
