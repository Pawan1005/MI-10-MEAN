function numberReverse() {
    event.preventDefault();

    let number = document.getElementById('number').value;
    let result = document.getElementById('result');

    let reverseNumber = parseInt(number.split('').reverse().join(''));

    result.innerHTML = `Reverse Number: <b>${reverseNumber}</b>`;
}