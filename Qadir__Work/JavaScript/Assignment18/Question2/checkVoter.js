function personIsAbleToVote() {
    event.preventDefault();

    try {
        let age = document.getElementById('age').value;
        let name = document.getElementById('name').value;

        let numberPattern = /^[0-9]*$/;
        let namePattern = /^[a-z]*$/i;

        if (numberPattern.test(age) && parseInt(age) > 0 && namePattern.test(name)) {
            let result = document.getElementById('result');

            // Converting input age into Integer form
            let ageInt = parseInt(age);
            if (ageInt >= 18) {
                result.innerHTML = `${name} is eligible to vote.`;
            }

            else {
                result.innerHTML = `${name} is not eligible to vote.`;
            }
        }
        
        else {
            throw new Error("Please Enter Age or Name properly");
        }
    }
    catch(error) {
        alert(error.message);
    }
}
