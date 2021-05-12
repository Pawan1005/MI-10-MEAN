function checkFormFieldsIsValidOrNot() {
    event.preventDefault();

    // UserName length 8 to 15
    let userNamePattern = /^\w{8,15}$/;
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8})/i;
    let namePattern = /^[a-z ]*$/i;

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let userName = document.getElementById('userName').value;
    let password = document.getElementById('password').value;
    
    let correctUserName = userNamePattern.test(userName);
    let correctFullName = (namePattern.test(lastName) && namePattern.test(firstName));
    let correctPassword =  passwordPattern.test(password);

    try {
        if (correctUserName && correctPassword && correctFullName) {
            document.write(`You Login SuccessFully, Welcome ${userName}`);
        }
        else {
            let errorMessage = correctUserName ? 
                               correctPassword ? 
                               correctFullName ? '' 
                               : 'Please Enter Name Properly' 
                               : 'Please Enter Password atleast 8 characters, 1 special, 1 number and 1 alphabet'
                               : 'Please Enter Correct UserName atleast 8 characters and  Max 15';
            throw new Error(errorMessage);
        }
    }
    catch(error) {
        alert(error.message);
    }
}
