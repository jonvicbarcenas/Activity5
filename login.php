<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Perform basic validation
    if (empty($email) || empty($password)) {
        print "Please enter both username and password.";
    } else {
        // You should perform more secure validation and use a database to verify credentials
        // For demonstration purposes, let's just check if email and password match
        if ($email === "admin@email.com" && $password === "password") {
            // print "Login successful!";
            
            // Redirect to login successful page
            header("Location: login-success.html");
        } else {
            print "Invalid username or password.";
        }
    }
}
?>

