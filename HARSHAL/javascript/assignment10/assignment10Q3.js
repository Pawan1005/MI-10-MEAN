function emailAddressCheck() {
    let emailAddress = document.getElementById("emailAddress").value;
    var patt = /^([a-zA-Z0-9\.\$!#%&'*+-/=?^_`{|}~]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$/;
    var check = patt.test(emailAddress);
    console.log(check);
    if (check) {
        alert("YOU ENTERED CORRECT EMAIL FORMAT");
    } else {
        alert("YOU ENTERED WRONG EMAIL FORMAT");
    }
}
