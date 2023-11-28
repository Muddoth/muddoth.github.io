// script.js

function formValidation() {
    var nameInput = document.getElementById('name').value;
    var emailInput = document.getElementById('email').value;

    // Check if both fields are entered
    if (nameInput.trim() === '' || emailInput.trim() === '') {
        alert("Both name and email are required fields. Please fill them out.");
        return false;
    }

    // Check for numbers in the name
    if (/\d/.test(nameInput)) {
        alert("Invalid name. Please remove numbers from the name.");
        return false;
    }

    // Check for a valid email format
    if (!isValidEmail(emailInput)) {
        alert("Invalid email address. Please enter a valid email.");
        return false;
    }

    alert("Contact details submitted");

    // Clear the input fields after submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';

    return true;
}

function isValidEmail(email) {
    return email.includes('@') && email.endsWith('.com') || email.endsWith('.my');
}

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener('DOMContentLoaded', function () {
    // This function will be executed when the DOM is fully loaded
    var element = document.getElementById('animated-column');
    
    // Add the 'show' class to trigger the animation
    element.classList.add('show');
});
