function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Get form fields
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation
    if (username === "" || password === "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (username === 'admin' && password === 'password') {
        alert("Login successful!");
        // Open a new blank window or tab
       window.location.href = "blank.html";
    } else {
        alert("Invalid username or password.");
    }
    return true;
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('login-form');
    form.addEventListener("submit", validateForm);
    <form id="login-form" action="login.php" method="POST"></form>
});
