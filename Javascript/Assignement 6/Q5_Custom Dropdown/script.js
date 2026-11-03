"use strict";

const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const options = document.getElementById("options");

const allOptions = document.querySelectorAll(".option");

// Show or hide dropdown
dropdownButton.addEventListener("click", function() {

    options.classList.toggle("show");

});

// Select an option
allOptions.forEach(function(option) {

    option.addEventListener("click", function() {

        dropdownButton.textContent = option.textContent;

        options.classList.remove("show");

    });

});

// Close dropdown using capturing phase
document.addEventListener("click", function(event) {

    if (!dropdown.contains(event.target)) {

        options.classList.remove("show");

    }

}, true);