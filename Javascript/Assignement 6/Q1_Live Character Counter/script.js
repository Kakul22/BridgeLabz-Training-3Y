"use strict";

const message = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");

const maxCharacters = 100;

// Update remaining characters
function updateCounter() {
    const remaining = maxCharacters - message.value.length;

    counter.textContent = remaining + " characters remaining";

    // Change counter color
    if (remaining === 0) {
        counter.style.color = "red";
    }
    else if (remaining <= 20) {
        counter.style.color = "yellow";
    }
    else {
        counter.style.color = "green";
    }
}

// Prevent typing beyond 100 characters
message.addEventListener("keydown", function(event) {

    if (
        message.value.length >= maxCharacters &&
        event.key.length === 1 &&
        !event.ctrlKey &&
        !event.metaKey
    ) {
        event.preventDefault();
    }
});

// Prevent pasting more characters than allowed
message.addEventListener("paste", function(event) {

    const pastedText = event.clipboardData.getData("text");

    const availableSpace = maxCharacters - message.value.length;

    if (pastedText.length > availableSpace) {
        event.preventDefault();
    }
});

// Update counter whenever input changes
message.addEventListener("input", updateCounter);

// Reset everything
resetButton.addEventListener("click", function() {
    message.value = "";
    updateCounter();
});