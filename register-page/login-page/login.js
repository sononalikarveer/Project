// script.js
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login process
    if (username === "user" && password === "password") {
        document.getElementById('login-response').innerText = "Login successful! Redirecting...";
        // Redirect to the home page or another page
        setTimeout(() => {
            window.location.href = "index.html"; // Change to your desired page
        }, 2000);
    } else {
        document.getElementById('login-response').innerText = "Invalid username or password.";
    }
});