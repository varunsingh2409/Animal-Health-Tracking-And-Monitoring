// Example Data (Initially populated records)
const animalRecords = [
    {
        ownerName: "Rajesh",
        animalName: "Bella",
        type: "Dog",
        age: "4 years",
        healthIssues: "None",
        liveHealthLink: "live.html" 
    },
    {
        ownerName: "Aastha",
        animalName: "Charlie",
        type: "Cat",
        age: "2 years",
        healthIssues: "Asthma",
        liveHealthLink: "live.html" 
    }
];

// Function to populate the table with records
function populateAnimalTable() {
    const tableBody = document.getElementById("animalTableBody");
    tableBody.innerHTML = ''; 

    animalRecords.forEach((record, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${record.ownerName}</td>
            <td>${record.animalName}</td>
            <td>${record.type}</td>
            <td>${record.age}</td>
            <td>${record.healthIssues || "None"}</td>
            <td><a href="${record.liveHealthLink}" target="_blank">View Live</a></td> <!-- New column for live updates -->
            <td><button onclick="deleteRecord(${index})">Delete</button></td>
        `;

        tableBody.appendChild(row);
    });
}

// Function to add a new record
function addNewRecord(event) {
    event.preventDefault(); 

    const ownerName = document.getElementById("ownerName").value;
    const animalName = document.getElementById("animalName").value;
    const animalType = document.getElementById("animalType").value;
    const animalAge = document.getElementById("animalAge").value;
    const healthIssues = document.getElementById("healthIssues").value || "None"; // Default to "None" if not provided

    // Create new record object
    const newRecord = {
        ownerName,
        animalName,
        type: animalType,
        age: animalAge,
        healthIssues,
        liveHealthLink: "live.html" 
    };

    // Add the new record to the array
    animalRecords.push(newRecord);

    // Repopulate the table with the new record added
    populateAnimalTable();

    // Reset the form and hide it
    document.getElementById("addRecordForm").reset();
    document.getElementById("addRecordSection").style.display = "none";
}

// Function to delete a record
function deleteRecord(index) {
    if (confirm("Are you sure you want to delete this record?")) {
        animalRecords.splice(index, 1); // Remove the record from the array
        populateAnimalTable(); // Repopulate the table
    }
}

// Show or hide the add record form when clicking the add new record button
document.getElementById("addNewRecordButton").addEventListener("click", function() {
    const addRecordSection = document.getElementById("addRecordSection");
    if (addRecordSection.style.display === "none") {
        addRecordSection.style.display = "block";
    } else {
        addRecordSection.style.display = "none";
    }
});

// Initialize the table on page load
document.addEventListener("DOMContentLoaded", populateAnimalTable);

// Add new record when the form is submitted
document.getElementById("addRecordForm").addEventListener("submit", addNewRecord);
