document.getElementById("name").addEventListener("input", function(event) {
    let nameInput = event.target;
    let nameValue = nameInput.value;

    // Remove any non-alphabetic characters
    nameValue = nameValue.replace(/[^a-zA-Z]/g, '');

    // Capitalize the first letter and make the rest lowercase
    if (nameValue.length > 0) {
        nameValue = nameValue.charAt(0).toUpperCase() + nameValue.slice(1).toLowerCase();
    }

    nameInput.value = nameValue;
});

document.getElementById("name").addEventListener("keypress", function(event) {
    const charCode = event.charCode;

    // If the character code is not between 65 (A) and 90 (Z) or 97 (a) and 122 (z), prevent the input
    if (charCode < 65 || (charCode > 90 && charCode < 97) || charCode > 122) {
        event.preventDefault();
    }
});



document.getElementById("age").addEventListener("keypress", function(event) {
    const charCode = event.charCode;

    // If the character code is not between 48 (0) and 57 (9), prevent the input
    if (charCode < 48 || charCode > 57) {
        event.preventDefault();
    }
});

document.getElementById("contact").addEventListener("keypress", function(event) {
    const charCode = event.charCode;
    const contactInput = event.target;

    // If the character code is not between 48 (0) and 57 (9), prevent the input
    if (charCode < 48 || charCode > 57) {
        event.preventDefault();
    }

    // If the length of the input value is already 10, prevent additional input
    if (contactInput.value.length >= 10) {
        event.preventDefault();
    }
})


document.getElementById("mail").addEventListener("input", function(event) {
    let emailInput = event.target;
    let emailValue = emailInput.value.trim(); // Trim whitespace from the input

    // Regular expression to match the specified rules
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.(com)$/;

    // Validate the email input against the pattern
    if (!emailPattern.test(emailValue)) {
        emailInput.setCustomValidity("Invalid email address. Ensure it contains only small letters, numbers, special characters, and ends with .com.");
    } else {
        emailInput.setCustomValidity("");
    }

    // Update the email input value (optional: convert to lowercase)
    // emailInput.value = emailValue.toLowerCase();
});



