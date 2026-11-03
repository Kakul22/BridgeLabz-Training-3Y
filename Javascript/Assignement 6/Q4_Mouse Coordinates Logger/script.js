"use strict";

const mouseBox = document.getElementById("mouseBox");
const coordinates = document.getElementById("coordinates");

// Track mouse movement
mouseBox.addEventListener("mousemove", function(event) {

    coordinates.textContent =
        "clientX: " + event.clientX +
        " | clientY: " + event.clientY;

});

// Detect double click
mouseBox.addEventListener("dblclick", function(event) {

    // Create a red dot
    const dot = document.createElement("div");

    dot.classList.add("dot");

    // Get box position
    const boxPosition = mouseBox.getBoundingClientRect();

    // Calculate position relative to box
    const x = event.clientX - boxPosition.left;
    const y = event.clientY - boxPosition.top;

    // Set dot position
    dot.style.left = x + "px";
    dot.style.top = y + "px";

    // Add dot inside box
    mouseBox.appendChild(dot);

});