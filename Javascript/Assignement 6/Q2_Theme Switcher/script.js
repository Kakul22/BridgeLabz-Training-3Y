"use strict";

const lightButton = document.getElementById("lightButton");
const darkButton = document.getElementById("darkButton");
const blueButton = document.getElementById("blueButton");

const currentTheme = document.getElementById("currentTheme");

// Function to change theme
function changeTheme(theme) {

    // Apply class using setAttribute()
    document.body.setAttribute("class", theme);

    // Save theme in custom attribute
    document.body.setAttribute("data-theme", theme);

    currentTheme.textContent = "Current Theme: " + theme;
}

// Button events
lightButton.addEventListener("click", function() {
    changeTheme("light");
});

darkButton.addEventListener("click", function() {
    changeTheme("dark");
});

blueButton.addEventListener("click", function() {
    changeTheme("blue");
});