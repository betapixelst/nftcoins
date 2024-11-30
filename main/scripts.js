// When the "Get OTP" button is clicked
document.getElementById('getOtpButton').addEventListener('click', function() {
    console.log("Get OTP button clicked"); // Debugging: Check if the button is clicked.
    
    // Start the 10-second timer when the button is clicked
    var timer = 10;  // 10 seconds countdown
    var timerElement = document.getElementById('timer');
    var otpInput = document.getElementById('otp');
    var submitButton = document.getElementById('submitButton');
    
    // Show OTP input and timer below phone number input
    otpInput.style.display = 'block';
    timerElement.style.display = 'block'; // Show timer input below phone number
    
    // Disable the "Get OTP" button
    this.disabled = true;
    
    // Start the countdown
    var countdown = setInterval(function() {
        if (timer <= 0) {
            clearInterval(countdown); // Stop the timer when it reaches 0
            timerElement.value = "Time's up!";
            submitButton.disabled = false; // Enable the submit button
        } else {
            timerElement.value = timer; // Update the timer display
            timer--;
        }
    }, 1000); // Update every second
});

// Handle form validation before submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting until validation is passed

    var phoneNumber = document.getElementById('phoneNumber').value;
    var otp = document.getElementById('otp').value;

    // Basic validation for phone number and OTP
    if (phoneNumber === "") {
        alert("Please enter your phone number.");
        return;
    }

    if (otp === "") {
        alert("Please enter the OTP.");
        return;
    }

    // Validate phone number format for 11 digits
    var phoneRegex = /^[0-9]{11}$/;  // Updated regex to allow 11-digit phone numbers
    if (!phoneRegex.test(phoneNumber)) {
        alert("Please enter a valid 11-digit phone number.");
        return;
    }

    // Validate OTP length and format (assuming 6-digit OTP)
    if (otp.length !== 6 || isNaN(otp)) {
        alert("Please enter a valid 6-digit OTP.");
        return;
    }

    // If validation passes, manually submit the form
    this.submit();
});
