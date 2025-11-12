<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address.";
        exit;
    }

    // In a real setup, you'd check the database to ensure the email exists.
    // We'll simulate that here:
    $userExists = true;

    if ($userExists) {
        // Create a unique reset token
        $token = bin2hex(random_bytes(16));

        // Store the token in a real database in production!
        // Example reset link (replace example.com with your domain)
        $resetLink = "https://https://fishydodgey.github.io/Practise-NEA//reset_password.php?token=$token";

        // Email subject and body
        $subject = "Password Reset Request";
        $message = "Hello,\n\nWe received a request to reset your password.\n";
        $message .= "Click the link below to reset it:\n$resetLink\n\n";
        $message .= "If you didn’t request this, ignore this email.\n\n— Your Website Team";

        // Email headers
        $headers = "From: jbushell24@synergymat.uk\r\n" .
                   "Reply-To: jbushell24@synergymat.uk\r\n" .
                   "X-Mailer: PHP/" . phpversion();

        // Send the email
        if (mail($email, $subject, $message, $headers)) {
            echo "A password reset link has been sent to your email.";
        } else {
            echo "Error: could not send email. Please contact support.";
        }
    } else {
        echo "No account found with that email address.";
    }
} else {
    echo "Invalid request.";
}
?>
