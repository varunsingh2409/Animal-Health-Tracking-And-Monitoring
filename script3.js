function validateForm() {
    const ownerName = document.getElementById('ownerName').value;
    const email = document.getElementById('email').value;
    const animalName = document.getElementById('animalName').value;
    const animalType = document.getElementById('animalType').value;
    const animalDOB = document.getElementById('animalDOB').value;

    if (ownerName === "" || email === "" || animalName === "" || animalType === "" || animalDOB === "") {
        alert("Please fill in all required fields.");
        return false;
    }

    alert("Registration successful! You can login now.");
    return true;
}
