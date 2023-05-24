<?php
// Retrieve the email entered by the user
$email = $_POST['email'];

// Database configuration
$host = "localhost";
$username = "root";
$password = "";
$dbname = "cropiodatabase";

// Create a new database connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare the SQL statement to insert the email into the table
$stmt = $conn->prepare("INSERT INTO subscribers (email) VALUES (?)");
$stmt->bind_param("s", $email);

// Execute the prepared statement
if ($stmt->execute()) {
    header("Location: subs.html");
    exit;
} else {
    echo "Error: " . $stmt->error;
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>
