

function validateForm(event) {
    event.preventDefault(); //default submission can be prevented

    if (!validateName() || !validateEmail() || !validatePhoneNumber() || !validatePassword()) {
        alert("Form submission failed. Please check your entries.");
        return;
    }

    // when all fields are correct
    alert("Form submitted successfully!");
}

// Validation functions
function validateName() {
    const fullName = document.getElementById('fullName').value;
    if (fullName.length < 5) {
        alert('Name must be at least 5 characters long.');
        return false;
    }
    return true;
}

function validateEmail() {
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
        alert('Enter a valid email address.');
        return false;
    }
    return true;
}

function validatePhoneNumber() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    if (phoneNumber === '123456789' || phoneNumber.length !== 10 || isNaN(phoneNumber)) {
        alert('Enter a valid 10-digit phone number.');
        return false;
    }
    return true;
}

function validatePassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password === 'password' || password.length < 8) {
        alert('Password must be at least 8 characters long and not "password".');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Password and Confirm Password must match.');
        return false;
    }

    return true;
}