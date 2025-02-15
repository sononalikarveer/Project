document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Simulate a successful registration process
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you would typically send the data to your server for processing
    // For this example, we'll just simulate success
    const success = true; // Simulate a successful registration

    if (success) {
        document.getElementById('register-response').innerText = 'Registration successful! Redirecting to login page...';
        
        // Redirect to the login page after a short delay
        setTimeout(function() {
            window.location.href = 'login-page/login.html'; // Correct path to login.html
        }, 2000); // Redirect after 2 seconds
    } else {
        document.getElementById('register-response').innerText = 'Registration failed. Please try again.';
    }
});