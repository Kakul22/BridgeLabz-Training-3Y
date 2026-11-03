"use strict";

const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const success = document.getElementById("success");

// Function to validate name
function validateName() {

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        return false;
    }

    nameError.textContent = "";
    return true;
}

// Function to validate email
function validateEmail() {

    if (
        emailInput.value.trim() === "" ||
        !emailInput.value.includes("@")
    ) {
        emailError.textContent = "Enter a valid email";
        return false;
    }

    emailError.textContent = "";
    return true;
}

// Function to validate password
function validatePassword() {

    if (passwordInput.value.length < 6) {
        passwordError.textContent =
            "Password must contain at least 6 characters";

        return false;
    }

    passwordError.textContent = "";
    return true;
}

// Live validation while typing
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);

// Form submission
form.addEventListener("submit", function(event) {

    // Prevent page reload
    event.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    // Check all validations
    if (isNameValid && isEmailValid && isPasswordValid) {

        success.textContent = "Form Submitted Successfully!";

        form.reset();

    } else {

        success.textContent = "";
    }

});