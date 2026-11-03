"use strict";

const searchInput = document.getElementById("searchInput");
const studentTable = document.getElementById("studentTable");
const noResults = document.getElementById("noResults");

// Get all table rows
const rows = studentTable.querySelectorAll("tr");

// Search whenever user types
searchInput.addEventListener("input", function() {

    const searchValue = searchInput.value.toLowerCase();

    let visibleRows = 0;

    rows.forEach(function(row) {

        const rowData = row.textContent.toLowerCase();

        // Check if row contains search value
        if (rowData.includes(searchValue)) {

            row.style.display = "";
            visibleRows++;

        } else {

            row.style.display = "none";
        }
    });

    // Show message if no matching rows
    if (visibleRows === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }

});