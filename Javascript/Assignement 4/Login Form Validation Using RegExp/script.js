"use strict";

const loginForm = document.getElementById("loginForm");

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");

const success = document.getElementById("success");

// Username must contain at least 5 characters
const usernamePattern = /^.{5,}$/;

// Password must contain:
// 1 uppercase, 1 lowercase, 1 number, 1 special character
// Minimum 8 characters
const passwordPattern =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S{8,}$/;

// Form submission
loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    let isValid = true;

    // Validate username
    if (!usernamePattern.test(username)) {

        usernameError.textContent =
            "Username must contain at least 5 characters.";

        isValid = false;

    }
    else {
        usernameError.textContent = "";
    }

    // Validate password
    if (!passwordPattern.test(password)) {

        passwordError.textContent =
            "Password must have 8 characters, uppercase, lowercase, number and special character.";

        isValid = false;

    }
    else {
        passwordError.textContent = "";
    }

    // Display result
    if (isValid) {

        success.textContent = "Login Successful!";

    }
    else {

        success.textContent = "";

    }

});

// Clear errors while typing
usernameInput.addEventListener("input", function() {
    usernameError.textContent = "";
    success.textContent = "";
});

passwordInput.addEventListener("input", function() {
    passwordError.textContent = "";
    success.textContent = "";
});