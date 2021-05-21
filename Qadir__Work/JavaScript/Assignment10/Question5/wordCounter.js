function wordCounters() {
    event.preventDefault();

    let string = document.getElementById('string').value;
    let result = document.getElementById('result');

    // 1. First Pattern for Removing Start and End whitespace;
    let trimStringPattern = /(^\s*)|(\s*$)/g;

    // 2. Converting 2 or more spaces to 1
    let convertSpacesToOnePattern = /[ ]{2,}/g;

    // 3. Removing newLine with Start spacing
    let newLineRemovingPattern = /\n /;

    // First Applying Pattern 1 then 2 and then 3 (Because Replace return new string) Chain All method at one
    let newString = string.replace(trimStringPattern, "").replace(convertSpacesToOnePattern, " ").replace(newLineRemovingPattern, "\n");

    result.innerHTML += `<br><b>${newString}</b><br> Total Number of Words Are: <b>${newString.split(' ').length}</b>`;
}
