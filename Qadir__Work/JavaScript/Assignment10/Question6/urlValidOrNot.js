function urlChecker() {
    event.preventDefault();

    let url = document.getElementById('url').value;
    let result = document.getElementById('result');

    // Pattern for URL Starting From https or http
    let urlPattern = /^((http(s?)?):\/\/)?([wW]{3}\.)?[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/i;

    let urlValid = urlPattern.test(url);

    result.innerHTML += `<br>Given Url: <b>${url}</b> is a <b>${urlValid ? 'Valid' : 'Not Valid'} Url</b></b>`;
}
