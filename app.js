// Event listeners for input fields to trigger validation function on change
document.getElementById('username').addEventListener('change', () => {
    validation();
});

document.getElementById('password').addEventListener('change', () => {
    validation();
});

document.getElementById('cpassword').addEventListener('change', () => {
    validation();
});
document.getElementById('email').addEventListener('change', () => {
    validation();
});

document.getElementById('number').addEventListener('change', () => {
    validation();
});



    // Event listener for form submission
const form = document.getElementById('myForm');
form.addEventListener('submit', () => {
    event.preventDefault(); // Prevent default form submission
    var res = validation();
    if (res) {
        alert("do you want to submit"); // If validation passes, prompt user for submission
                // Clear input fields after submission
        username.value = " "
        password.value = " "
        cpassword.value = " "
        email.value = " "
        number.value = " "
    }
})


// Function to perform form validation
function validation() {

        // Fetching input field values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;


    // Regular expressions for validation
    var usercheck = /^(?!\\d+$)[A-Za-z0-9_ ]*[A-Za-z_ ][A-Za-z0-9_ ]{4,}$/;
    var passchecker = /^(?=.*[0-9])(?=.*[@#$%^&*!])(?=.*[a-zA-Z])[a-zA-Z0-9@#$%^&*!]{6,16}$/;
    var emailcheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
    var mobilechecker = /^[6-9]\d{9}$/;


        // Username validation
    if (usercheck.test(username)) {
        document.getElementById('usererror').innerHTML = " ";
    } else {
        document.getElementById('usererror').innerHTML = "*invalid username [ atleast 1 alphabetic charecter , no special case except _ ,  must not be less than 5 characters";
        return;
    }

    
    if (passchecker.test(password)) {
        document.getElementById('passerror').innerHTML = " ";
    } else {
        document.getElementById('passerror').innerHTML = "*at least 1 specialcase[!@,#,$,%,^,& . at least one numeric character. at least one alphabetic characte length of the password (6 to 16 characters).*";
        return;
    }

    if (cpassword === password) {
        document.getElementById('cpasserror').innerHTML = " ";
    } else {
        document.getElementById('cpasserror').innerHTML = "*password not matching*";
        return;
    }

    if (emailcheck.test(email)) {
        document.getElementById('emailerror').innerHTML = " ";
    } else {
        document.getElementById('emailerror').innerHTML = "*invalid email";
        return;
    }

    if (mobilechecker.test(number)) {
        document.getElementById('numbererror').innerHTML = " ";
    } else {
        document.getElementById('numbererror').innerHTML = "*invalid number";
        return;
    }

    // alert(`do you want to submit`);
    return true;

}
