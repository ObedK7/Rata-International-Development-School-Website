<?php
// api/db_connect.php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$host     = 'localhost';
$dbname   = 'YOUR_CPANEL_DB_NAME';     // Replace with your cPanel DB name
$username = 'YOUR_CPANEL_DB_USER';   // Replace with your cPanel DB user
$password = 'YOUR_CPANEL_DB_PASS';   // Replace with your cPanel DB password

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password, [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ]);
} catch (PDOException $e) {
    echo json_encode([
        "success" => false,
        "message" => "Database connection failed: " . $e->getMessage()
    ]);
    exit();
}
?>