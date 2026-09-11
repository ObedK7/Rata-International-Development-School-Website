<?php
// api/login.php

session_start();
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");

require_once 'db_connect.php';

// Read raw JSON input from JS
$input = json_decode(file_get_contents("php://input"), true);

$user = trim($input['username'] ?? '');
$pass = trim($input['password'] ?? '');

if (empty($user) || empty($pass)) {
    echo json_encode(["success" => false, "message" => "Please enter both username and password."]);
    exit();
}

try {
    // Fetch admin user record
    $stmt = $pdo->prepare("SELECT id, username, password FROM admins WHERE username = ?");
    $stmt->execute([$user]);
    $admin = $stmt->fetch();

    if ($admin && password_verify($pass, $admin['password'])) {
        // Regeneration prevents session fixation attacks
        session_regenerate_id(true);
        $_SESSION['admin_logged_in'] = true;
        $_SESSION['admin_id']        = $admin['id'];
        $_SESSION['admin_user']      = $admin['username'];

        echo json_encode(["success" => true, "message" => "Login successful. Redirecting..."]);
    } else {
        echo json_encode(["success" => false, "message" => "Invalid username or password."]);
    }
} catch (PDOException $e) {
    echo json_encode(["success" => false, "message" => "Server error: " . $e->getMessage()]);
}
?>