

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

   
    const emailOrUsername = document.getElementById('emailOrUsername').value;
    const password = document.getElementById('password').value;

   
    if (emailOrUsername === "animal" && password === "4518") {
        alert("Login successful!");

       
        window.location.href = "admin.html"; 
    } else {
        alert("Invalid credentials. Please try again.");
    }
});
