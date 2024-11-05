let otpSent = false;
let otpVerified = false;

function sendOtp() {
    const contact = document.getElementById('contact').value;
    if (contact) {
        document.getElementById('step1').style.display = 'none';
        document.getElementById('step2').style.display = 'block';
        document.getElementById('message').textContent = "OTP sent to " + contact;
        otpSent = true; 
    } else {
        document.getElementById('message').textContent = "Please enter a valid email or phone number.";
    }
}

function verifyOtp() {
    const otp = document.getElementById('otp').value;
    if (otp === "123456") { 
        document.getElementById('step2').style.display = 'none';
        document.getElementById('step3').style.display = 'block';
        document.getElementById('message').textContent = "OTP verified!";
        otpVerified = true;
    } else {
        document.getElementById('message').textContent = "Invalid OTP. Please try again.";
    }
}

function changePassword() {
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (newPassword === confirmPassword) {
        document.getElementById('message').textContent = "Password changed successfully!";
    } else {
        document.getElementById('message').textContent = "Passwords do not match. Please try again.";
    }
}
